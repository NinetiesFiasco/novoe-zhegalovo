import nodemailer from "nodemailer"
import type { SendMailOptions } from "nodemailer"

const rateMap = new Map()
const lastRequests = new Map()

setInterval(() => {
  const now = Date.now()

  for (const [ip, entry] of rateMap) {
    if (now - entry.start > 60_000) {
      rateMap.delete(ip)
    }
  }

  for (const [phone, time] of lastRequests) {
    if (now - time > 10 * 60_000) {
      lastRequests.delete(phone)
    }
  }
}, 60_000)

function rateLimit(ip: string | undefined) {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 минута
  const limit = 5

  const entry = rateMap.get(ip) || { count: 0, start: now }

  if (now - entry.start > windowMs) {
    entry.count = 0
    entry.start = now
  }

  entry.count++
  rateMap.set(ip, entry)

  return entry.count <= limit
}

const transport = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.YANDEX_MAIL_USER,
    pass: process.env.YANDEX_MAIL_PASSWORD,
  },
})

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event)

  if (!rateLimit(ip)) {
    return { status: 1, message: "Заявка отправлена" }
  }
  const body = await readBody(event)

  if (body.company) {
    return {
      status: 1,
      message: "Заявка отправлена",
    }
  }

  if (!body.name || !body.phone || body.phone.length !== 18) {
    return {
      status: 0,
      message: "Некорректные данные",
    }
  }

  const mailOptions: SendMailOptions = {
    from: process.env.YANDEX_MAIL_FROM,
    to: process.env.YANDEX_MAIL_TO,
    subject: "Новая заявка!",
    html: `
<h2>Новая заявка</h2>
<p><b>Имя:</b> ${body.name}</p>
<p><b>Телефон:</b> ${body.phone}</p>
`,
  }
  if (process.env.YANDEX_MAIL_TO_BCC1) {
    mailOptions.bcc = [process.env.YANDEX_MAIL_TO_BCC1]
  }

  if (lastRequests.has(body.phone)) {
    return {
      status: 0,
      message: "Заявка отправлена",
    }
  } else {
    lastRequests.set(body.phone, Date.now())
  }

  try {
    const info = await transport.sendMail(mailOptions)
    console.log(info)
    return {
      status: 1,
      message: "Заявка отправлена",
    }
  } catch (error) {
    console.log(error)
    return {
      status: 2,
      message: "Ошибка",
    }
  }
})
