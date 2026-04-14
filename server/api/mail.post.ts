import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    // user: process.env.YANDEX_MAIL_USER,
    // pass: process.env.YANDEX_MAIL_PASSWORD,
    user: "antonserdin",
    pass: "qsidqkbcyxlslqfm",
  },
})

const mailOptions = {
  from: "antonserdin@yandex.ru",
  to: "seredin.anton2014@gmail.com",
  subject: "Новая заявка!",
  text: "Текст письма",
}

export default defineEventHandler(async (event) => {
  console.log("tut")
  const body = await readBody(event)
  mailOptions.text = `Имя: ${body.name} Телефон: ${body.phone}`
  console.log(mailOptions.text)

  try {
    const info = await transport.sendMail(mailOptions)
    return {
      status: 1,
      message: "Письмо отправлено",
      info,
    }
  } catch (error) {
    return {
      status: 2,
      message: "Ошибка",
      error,
    }
  }
})
