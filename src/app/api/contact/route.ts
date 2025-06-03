// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: "Email From RM'S MUG PRINTING Website",
      html: `
        <h3>New message from your RM'S MUG PRINTING website contact form</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
