import 'dotenv/config'
import { createServer } from 'node:http'
import nodemailer from 'nodemailer'

const port = Number(process.env.API_PORT || 3001)
const smtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_TO)
const mailer = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null

function respond(response, status, payload) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' })
  response.end(JSON.stringify(payload))
}

async function readBody(request) {
  const chunks = []
  let size = 0
  for await (const chunk of request) {
    size += chunk.length
    if (size > 16384) {
      const error = new Error('Request body is too large.')
      error.statusCode = 413
      throw error
    }
    chunks.push(chunk)
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch {
    const error = new Error('Request body must be valid JSON.')
    error.statusCode = 400
    throw error
  }
}

async function handleContact(request, response) {
  if (request.method !== 'POST') return respond(response, 405, { error: 'Method not allowed.' })
  if (!smtpConfigured) return respond(response, 503, { error: 'Enquiry email is not configured. Please call or email Davidson Well Drilling directly.' })
  if (!(request.headers['content-type'] || '').includes('application/json')) return respond(response, 415, { error: 'Content-Type must be application/json.' })

  const data = await readBody(request)
  if (!data || typeof data !== 'object' || Array.isArray(data)) return respond(response, 400, { error: 'Please submit a valid enquiry.' })

  const name = typeof data.name === 'string' ? data.name.trim() : ''
  const email = typeof data.email === 'string' ? data.email.trim() : ''
  const phone = typeof data.phone === 'string' ? data.phone.trim() : ''
  const service = typeof data.service === 'string' ? data.service.trim() : ''
  const message = typeof data.message === 'string' ? data.message.trim() : ''

  if (!name || name.length > 120 || !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length > 40 || !service || !message || message.length > 5000) {
    return respond(response, 400, { error: 'Please provide a valid name, email, service, and message.' })
  }

  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService: ${service}\n\nMessage:\n${message}`
  try {
    await mailer.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Website enquiry: ${service}`,
      text,
    })
    return respond(response, 200, { message: 'Your enquiry has been sent. Thank you for contacting Davidson Well Drilling.' })
  } catch (error) {
    console.error('Contact email delivery failed:', error.message)
    return respond(response, 502, { error: 'We could not send your enquiry right now. Please call or email Davidson Well Drilling directly.' })
  }
}

const server = createServer(async (request, response) => {
  if (request.url !== '/api/contact') return respond(response, 404, { error: 'Not found.' })
  try {
    await handleContact(request, response)
  } catch (error) {
    respond(response, error.statusCode || 500, { error: error.statusCode ? error.message : 'The enquiry could not be processed.' })
  }
})

server.listen(port, () => {
  console.log(`Contact API listening on port ${port}.`)
  if (!smtpConfigured) console.warn('SMTP is not configured; contact enquiries will return an explicit configuration error.')
})
