import * as React from "react";

interface RequirementTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  platformName: string;
  formData: Record<string, any>;
  fields: Array<{
    label: string;
    fieldType: string;
    required?: boolean;
  }>;
}

export const RequirementTemplate: React.FC<Readonly<RequirementTemplateProps>> = ({
  fullName,
  email,
  phone,
  platformName,
  formData,
  fields,
}) => (
  <div style={{
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '32px',
    backgroundColor: '#0c0c0f',
    color: '#ffffff',
  }}>
    {/* Header with gradient */}
    <div style={{
      background: 'linear-gradient(135deg, #1a1a1f 0%, #0c0c0f 100%)',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
      textAlign: 'center',
    }}>
      <h1 style={{
        color: '#ffffff',
        fontSize: '24px',
        margin: '0',
        marginBottom: '8px',
        fontWeight: '600',
      }}>New Requirements Submission</h1>
      <p style={{
        color: '#94949c',
        fontSize: '16px',
        margin: '0',
      }}>For {platformName} Account</p>
    </div>

    {/* Contact Information */}
    <div style={{
      background: '#141418',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px',
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{
              padding: '12px 0',
              color: '#94949c',
              width: '120px',
            }}>Name:</td>
            <td style={{
              padding: '12px 0',
              color: '#ffffff',
            }}>{fullName}</td>
          </tr>
          <tr>
            <td style={{
              padding: '12px 0',
              color: '#94949c',
            }}>Email:</td>
            <td style={{
              padding: '12px 0',
              color: '#ffffff',
            }}>{email}</td>
          </tr>
          <tr>
            <td style={{
              padding: '12px 0',
              color: '#94949c',
            }}>Phone:</td>
            <td style={{
              padding: '12px 0',
              color: '#ffffff',
            }}>{phone}</td>
          </tr>
          <tr>
            <td style={{
              padding: '12px 0',
              color: '#94949c',
            }}>Platform:</td>
            <td style={{
              padding: '12px 0',
              color: '#ffffff',
            }}>{platformName}</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Requirements Content */}
    <div style={{
      background: '#141418',
      borderRadius: '12px',
      padding: '24px',
    }}>
      <h2 style={{
        color: '#94949c',
        fontSize: '16px',
        marginTop: '0',
        marginBottom: '16px',
      }}>Requirements:</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {fields.map((field: FormField, index: number) => (
            <tr key={index}>
              <td style={{
                padding: '12px 0',
                color: '#94949c',
                width: '200px',
                verticalAlign: 'top',
              }}>{field.label}:</td>
              <td style={{
                padding: '12px 0',
                color: '#ffffff',
              }}>{formData[field.name] || 'Not provided'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Footer */}
    <div style={{
      marginTop: '32px',
      textAlign: 'center',
      color: '#94949c',
      fontSize: '14px',
    }}>
      <p style={{ margin: '0' }}>
        This email was sent from the requirements form on H&S Ecommerce Agency website.
      </p>
    </div>
  </div>
);
