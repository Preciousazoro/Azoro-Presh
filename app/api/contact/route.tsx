import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate minimum field lengths
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Check if CONTACT_RECEIVER is configured
    const contactReceiver = process.env.CONTACT_RECEIVER;
    if (!contactReceiver) {
      console.error("CONTACT_RECEIVER environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailUser || !emailPass) {
      console.error("EMAIL_USER or EMAIL_PASS environment variables are not set");
      return NextResponse.json(
        { error: "Server configuration error - email credentials missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
    });

    const mailOptions = {
      // Use verified sending email from environment variables
      from: `"Precious Portfolio" <${emailUser}>`,
      // Use CONTACT_RECEIVER environment variable for recipient
      to: process.env.CONTACT_RECEIVER,
      // Clear subject identifying portfolio contact submissions
      subject: `📩 Portfolio Contact: New message from ${name}`,
      // Clean email body format
      text: `You received a new message from your portfolio contact form:

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}

---
Sent on: ${new Date().toLocaleString()}`,
      // Set replyTo to visitor's email for direct replies
      replyTo: email.trim(),
    };

    try {
      await transporter.sendMail(mailOptions);
      
      return NextResponse.json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you within 24 hours." 
      });
    } catch (sendError: any) {
      // Enhanced logging for SMTP authentication issues
      if (sendError.code === 'EAUTH' || sendError.message.includes('authentication')) {
        console.error('SMTP Authentication Error:', {
          error: sendError.message,
          code: sendError.code,
          user: emailUser,
          hint: 'Check EMAIL_USER and EMAIL_PASS environment variables. For Gmail, ensure you have an App Password enabled.'
        });
      } else if (sendError.code === 'ECONNECTION' || sendError.message.includes('connect')) {
        console.error('SMTP Connection Error:', {
          error: sendError.message,
          code: sendError.code,
          host: 'smtp.gmail.com',
          port: 587,
          hint: 'Check network connectivity and firewall settings.'
        });
      }
      
      // Development logging for failed sends
      if (process.env.NODE_ENV === 'development') {
        console.error('Development - Email send failed:', {
          error: sendError.message,
          code: sendError.code,
          stack: sendError.stack,
          mailOptions: {
            to: mailOptions.to,
            from: mailOptions.from,
            subject: mailOptions.subject,
            replyTo: mailOptions.replyTo
          }
        });
      } else {
        console.error('Email send error:', sendError.message);
      }
      
      return NextResponse.json(
        { 
          error: "Failed to send message. Please try again later.",
          details: process.env.NODE_ENV === 'development' ? sendError.message : undefined
        }, 
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API Error:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { 
        error: "Server error occurred. Please try again later.",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }, 
      { status: 500 }
    );
  }
}




