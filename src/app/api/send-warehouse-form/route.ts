import { WarehouseTemplate } from "@/components/email-templates/warehouse-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      whatsappNumber,
      sellingStatus,
      monthlyOrderVolume,
      interestedServices,
      startTimeline,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !companyName ||
      !email ||
      !whatsappNumber ||
      !sellingStatus ||
      !monthlyOrderVolume ||
      !interestedServices ||
      !startTimeline
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Validate services array
    if (!Array.isArray(interestedServices) || interestedServices.length === 0) {
      return Response.json(
        { error: "Please select at least one service" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "UK Warehouse Consultation <contact@hsecommerce.store>",
      to: [process.env.EMAIL_ADDRESS!],
      subject: `New UK Warehouse Consultation Request - ${companyName}`,
      replyTo: email,
      react: await WarehouseTemplate({
        fullName,
        companyName,
        email,
        whatsappNumber,
        sellingStatus,
        monthlyOrderVolume,
        interestedServices,
        startTimeline,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({
      data,
      message: "Consultation request submitted successfully",
    });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
