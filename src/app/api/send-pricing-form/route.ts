import { PricingTemplate } from "@/components/email-templates/pricing-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, platformName, accountType } = body;

    const { data, error } = await resend.emails.send({
      from: "H&S Pricing Inquiry <contact@hsecommerce.store>",
      to: ["qaziharis8@gmail.com"],
      subject: `New Pricing Inquiry: ${platformName} ${accountType || "Accounts"}`,
      replyTo: email,
      react: await PricingTemplate({
        name,
        email,
        phone,
        message,
        platformName,
        accountType,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
