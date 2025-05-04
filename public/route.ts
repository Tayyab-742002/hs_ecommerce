import { RequirementTemplate } from "@/components/email-templates/requirement-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, platformName, fields, ...formData } = body;

    const { data, error } = await resend.emails.send({
      from: "H&S Requirements Form <contact@hsecommerce.store>",
      to: ["qaziharis8@gmail.com"],
      subject: `New Requirements: ${platformName} Account`,
      replyTo: email,
      react: await RequirementTemplate({
        fullName,
        email,
        phone,
        platformName,
        formData,
        fields,
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
