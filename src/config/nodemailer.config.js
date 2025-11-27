import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import config from 'dotenv'
import { error } from 'console'

dotenv.config()

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_KEY_PASSWORD
    },
})

export const resetEmail = async (toEmail) => {
    try {
        const formEmail = {
            from: process.env.GMAIL_ADDRESS,
            to: toEmail,
            subject: "",
            html:
                `<a href="https://google.com">Clik this link to reset your password</a>`
        };

        console.log('options', formEmail)

        const info = await transporter.sendMail(formEmail);
        console.log("📧 ส่งอีเมลสำเร็จ:", info.messageId);
        return true

    } catch (err) {
        console.error("❌ ส่งอีเมลล้มเหลว:", err);
        return false
    }
};

export const verifyEmail = async (toEmail) => {
    try {
        const formEmail = {
            from: process.env.GMAIL_ADDRESS,
            to: toEmail,
            subject: "Verify Email",
            html:
                `<a href="https://google.com">Clik this link to reset your password</a>`
        }

        const info = await transporter.sendMail(formEmail)
        console.log("📧 ส่งอีเมลสำเร็จ:", info.messageId);
        return true
    } catch (error) {
        console.error("❌ ส่งอีเมลล้มเหลว:", error);
        return false
    }
}