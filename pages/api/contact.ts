import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  Message: string
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { data } = req.body;
  const {Name, Email, Message, PhoneNumber} = data
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: Email,
      to: process.env.MAIL,
      subject: `La persona de nombre: ${Name}`,
      html: `<p>Nuevo Contacto</p><br>
        <p><strong>Email de Contacto: </strong> ${Email}</p><br>
        <p><strong>Mensaje: </strong> ${Message}</p><br>
        <p><strong>Número de Teléfono: </strong> ${PhoneNumber}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({Message:'something went wrong'})
  };
  return res.status(200).json({Message:'ok'});
}