import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  platformName: string;
  accountType?: string;
}

export const PricingTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
  platformName,
  accountType,
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
      }}>New Pricing Inquiry</h1>
      <p style={{
        color: '#94949c',
        fontSize: '16px',
        margin: '0',
      }}>
        For {platformName} {accountType ? `${accountType} Accounts` : 'Accounts'}
      </p>
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
            }}>{name}</td>
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
          {accountType && (
            <tr>
              <td style={{
                padding: '12px 0',
                color: '#94949c',
              }}>Account Type:</td>
              <td style={{
                padding: '12px 0',
                color: '#ffffff',
              }}>{accountType}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* Message Content */}
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
      }}>Additional Information:</h2>
      <p style={{
        color: '#ffffff',
        fontSize: '16px',
        lineHeight: '1.6',
        margin: '0',
        whiteSpace: 'pre-wrap',
      }}>{message}</p>
    </div>

    {/* Footer */}
    <div style={{
      marginTop: '32px',
      textAlign: 'center',
      color: '#94949c',
      fontSize: '14px',
    }}>
      <p style={{ margin: '0' }}>
        This email was sent from the pricing inquiry form on H&S Ecommerce Agency website.
      </p>
    </div>
  </div>
);
