import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface WarehouseTemplateProps {
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  sellingStatus: string;
  monthlyOrderVolume: string;
  interestedServices: string[];
  startTimeline: string;
}

export const WarehouseTemplate = ({
  fullName,
  companyName,
  email,
  whatsappNumber,
  sellingStatus,
  monthlyOrderVolume,
  interestedServices,
  startTimeline,
}: WarehouseTemplateProps) => {
  const getSellingStatusLabel = (status: string) => {
    switch (status) {
      case "already-selling":
        return "Already selling in the UK";
      case "planning-to-sell":
        return "Planning to sell in the UK";
      default:
        return status;
    }
  };

  const getVolumeLabel = (volume: string) => {
    switch (volume) {
      case "less-than-100":
        return "Less than 100 orders/month";
      case "100-500":
        return "100–500 orders/month";
      case "500-1000":
        return "500–1,000 orders/month";
      case "1000-plus":
        return "1,000+ orders/month";
      default:
        return volume;
    }
  };

  const getTimelineLabel = (timeline: string) => {
    switch (timeline) {
      case "immediately":
        return "Immediately";
      case "within-1-month":
        return "Within 1 month";
      case "within-3-months":
        return "Within 3 months";
      case "just-researching":
        return "Just researching for now";
      default:
        return timeline;
    }
  };

  return (
    <Html>
      <Head />
      <Preview>
        New UK Warehouse Consultation Request from {companyName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>
              UK Warehouse Consultation Request
            </Heading>
            <Text style={headerSubtitle}>New inquiry from {companyName}</Text>
          </Section>

          <Hr style={hr} />

          {/* Contact Information */}
          <Section style={section}>
            <Heading style={sectionTitle}>Contact Information</Heading>

            <div style={infoGrid}>
              <div style={infoItem}>
                <Text style={label}>Full Name:</Text>
                <Text style={value}>{fullName}</Text>
              </div>

              <div style={infoItem}>
                <Text style={label}>Company Name:</Text>
                <Text style={value}>{companyName}</Text>
              </div>

              <div style={infoItem}>
                <Text style={label}>Email:</Text>
                <Text style={value}>{email}</Text>
              </div>

              <div style={infoItem}>
                <Text style={label}>WhatsApp Number:</Text>
                <Text style={value}>{whatsappNumber}</Text>
              </div>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Business Information */}
          <Section style={section}>
            <Heading style={sectionTitle}>Business Information</Heading>

            <div style={infoGrid}>
              <div style={infoItem}>
                <Text style={label}>Current UK Selling Status:</Text>
                <Text style={value}>
                  {getSellingStatusLabel(sellingStatus)}
                </Text>
              </div>

              <div style={infoItem}>
                <Text style={label}>Monthly Order Volume:</Text>
                <Text style={value}>{getVolumeLabel(monthlyOrderVolume)}</Text>
              </div>

              <div style={infoItem}>
                <Text style={label}>Preferred Start Timeline:</Text>
                <Text style={value}>{getTimelineLabel(startTimeline)}</Text>
              </div>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Services Interest */}
          <Section style={section}>
            <Heading style={sectionTitle}>Services of Interest</Heading>

            <div style={servicesContainer}>
              {interestedServices.map((service, index) => (
                <div key={index} style={serviceItem}>
                  <Text style={serviceText}>{service}</Text>
                </div>
              ))}
            </div>
          </Section>

          <Hr style={hr} />

          {/* Action Items */}
          <Section style={section}>
            <Heading style={sectionTitle}>Next Steps</Heading>

            <div style={actionItems}>
              <Text style={actionItem}>
                1. Review the client&apos;s requirements and order volume
              </Text>
              <Text style={actionItem}>
                2. Prepare a customized quote for their selected services
              </Text>
              <Text style={actionItem}>
                3. Contact them within 24 hours via email or WhatsApp
              </Text>
              <Text style={actionItem}>
                4. Schedule a consultation call if needed
              </Text>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Priority Indicator */}
          <Section style={prioritySection}>
            <Text style={priorityText}>
              {startTimeline === "immediately"
                ? "HIGH PRIORITY"
                : "STANDARD PRIORITY"}{" "}
              - Client wants to start{" "}
              {getTimelineLabel(startTimeline).toLowerCase()}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This consultation request was submitted through the UK Warehouse
              Services landing page.
            </Text>
            <Text style={footerText}>
              Submitted on{" "}
              {new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  padding: "32px 24px",
  backgroundColor: "#fb4141",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 8px 0",
};

const headerSubtitle = {
  color: "#ffedd5",
  fontSize: "16px",
  margin: "0",
};

const section = {
  padding: "24px",
};

const sectionTitle = {
  color: "#1e293b",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 16px 0",
};

const infoGrid = {
  display: "grid",
  gap: "12px",
};

const infoItem = {
  backgroundColor: "#f8fafc",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
};

const label = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 4px 0",
};

const value = {
  color: "#1e293b",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
};

const servicesContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "8px",
};

const serviceItem = {
  backgroundColor: "#fff7ed",
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #fb4141",
};

const serviceText = {
  color: "#fb4141",
  fontSize: "14px",
  margin: "0",
  fontWeight: "500",
};

const actionItems = {
  backgroundColor: "#fff7ed",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #fb4141",
};

const actionItem = {
  color: "#fb4141",
  fontSize: "14px",
  margin: "0 0 8px 0",
  fontWeight: "500",
};

const prioritySection = {
  padding: "16px 24px",
  backgroundColor: "#fff7ed",
  textAlign: "center" as const,
  border: "1px solid #fb4141",
  borderRadius: "8px",
  margin: "0 24px",
};

const priorityText = {
  color: "#fb4141",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0",
};

const footer = {
  padding: "24px",
  textAlign: "center" as const,
  borderTop: "1px solid #e2e8f0",
};

const footerText = {
  color: "#64748b",
  fontSize: "12px",
  margin: "0 0 8px 0",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "0",
};
