"use server"
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => { 
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;
    

    if (!validateString(senderEmail, 500)) {
        return { error: "Email is required" };
    }
    if (!validateString(message, 5000)) {
        return { error: "Message is required" };
    }
    
    let data;
    try {
        data=await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "eddiewu41@gmail.com",
        subject: "Message from contact form",
        replyTo: senderEmail,
        react: React.createElement(ContactFormEmail, { message: message, senderEmail: senderEmail }),//第一个元素是要发送的组件，第二个元素是组件的props
    });
    } catch (error: unknown) {
        return { error: getErrorMessage(error) };
    }

      return {
    data,
  };
    
}
