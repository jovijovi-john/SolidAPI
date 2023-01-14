import { IMailProvider, IMessage } from "../IMailProvider";
import Mail from "nodemailer/lib/mailer";
import nodemailer from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

export class MailtrapMailProvider implements IMailProvider{
 
  private transporter: Mail;

  constructor() {
    // utilizaremos o nodemailer
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: Number(process.env.MAILER_PORT),
      auth: {
        user: process.env.MAILER_AUTH_USER,
        pass: process.env.MAILER_AUTH_PASS 
      }
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }

}