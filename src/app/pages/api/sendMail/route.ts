import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { name, email, message } = await req.json();
    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Your SMTP provider (e.g., Gmail, Outlook, etc.)
      port: 465, // For secure connection
      secure: true, // Use SSL
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER, // Your email address (set as an environment variable)
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD, // Your email password or app-specific password
      },
    });
    try {
      // Send the email
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_SMTP_USER, // Sender address (your email)
        to: "kumararyan101203@gmail.com", // Recipient address
        subject: `${name} send message from Portfolio`, // Subject line
        text: `Name : ${name}\nEmail : ${email}\n\n${message}`, // Plain text body
      });
      // If email sent successfully, return a success response
      console.log("success");
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      // If error occurs, return an error response
      console.error(error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }
  } else {
    // Handle any other HTTP method (e.g., GET, PUT, DELETE, etc.)
    // NextResponse.setHeader('Allow', ['POST']);
    return NextResponse.json({ error: `Method Not Allowed` }, { status: 405 });
  }
}
