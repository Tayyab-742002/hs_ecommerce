import { ContactTemplate } from "@/components/email-templates/contact-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: "H&S Contact Form <contact@hsecommerce.store>",
      to: [process.env.EMAIL_ADDRESS!],
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      react: await ContactTemplate({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
