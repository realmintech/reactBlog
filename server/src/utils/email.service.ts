// import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';

// @Injectable()
// export class EmailService {
//   private transporter: nodemailer.Transporter;

//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       host: 'your-smtp-host',
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'your-email@example.com',
//         pass: 'your-email-password',
//       },
//     });
//   }

//   async sendEmail(emailType: 'resetToken' | 'confirmation', email: string, token: string): Promise<void> {
//     let subject: string;
//     let text: string;

//     switch (emailType) {
//       case 'resetToken':
//         subject = 'Password Reset';
//         text = `Your password reset token is: ${token}`;
//         break;
//       case 'confirmation':
//         subject = 'Account Confirmation';
//         text = `Please click the following link to confirm your account: your-frontend-url}/confirm?token=token`;
//         break;
//       default:
//         throw new Error('Invalid email type');
//     }

//     const mailOptions: nodemailer.SendMailOptions = {
//       from: 'your-email@example.com',
//       to: email,
//       subject,
//       text,
//     };

//     await this.transporter.sendMail(mailOptions);
//   }
// }
