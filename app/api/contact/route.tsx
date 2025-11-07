import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Parse form data
    const data = await req.json();
    const { username, email, phone, message } = data;

    // Validate
    if (!username || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Create transporter using iCloud SMTP (port 465 with SSL)
          const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false // Only for development
        }
      });

    // Email configuration
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New message from ${username}`,
      text: `
You received a new message from your portfolio form:

Name: ${username}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}











// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     // Parse form data
//     const data = await req.json();
//     const { username, email, phone, message } = data;

//     // Validate
//     if (!username || !email || !message) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     // Create transporter using iCloud SMTP
//     const transporter = nodemailer.createTransport({
//       host: "smtp.mail.me.com",
//       port: 587,
//       secure: false, // TLS upgrade
//       auth: {
//         user: process.env.EMAIL_USER, // your iCloud email
//         pass: process.env.EMAIL_PASS, // app-specific password
//       },
//     });

//     // Email configuration
//     const mailOptions = {
//       from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`, // must match your iCloud email
//       to: process.env.EMAIL_USER, // send to yourself
//       subject: `📩 New message from ${username}`,
//       text: `
// You received a new message from your portfolio form:

// Name: ${username}
// Email: ${email}
// Phone: ${phone || "N/A"}

// Message:
// ${message}
//       `,
//       replyTo: email, // allows you to reply directly to sender
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, message: "Email sent successfully!" });
//   } catch (error: any) {
//     console.error("Email send error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email", details: error.message },
//       { status: 500 }
//     );
//   }
// }
