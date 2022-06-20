import nodemailer, { Transport } from 'nodemailer';
import { OptionsTransportType, OptionsType, CallbackType } from '../types/global';

const optionsTransport: OptionsTransportType | Transport<unknown> = {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // true ? 465 : other
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false }
}

async function sendMail(options: OptionsType, callback: CallbackType) {

    let success: boolean = false;

    try {
        const transport = nodemailer.createTransport(optionsTransport);

        await transport.sendMail(options);

        success = true;
    } catch (error) {
        console.error('Error to send email')
    }

    callback(success);
}

export default sendMail
