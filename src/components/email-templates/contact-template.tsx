import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  subject,
  message,
}) => (
  <div style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '30px',
      borderBottom: '2px solid #f0f0f0',
      paddingBottom: '20px',
    }}>
      <h1 style={{
        color: '#333',
        fontSize: '24px',
        margin: '0',
        marginBottom: '10px',
      }}>New Contact Form Submission</h1>
      <p style={{
        color: '#666',
        fontSize: '16px',
        margin: '0',
      }}>From H&S Ecommerce Website</p>
    </div>

    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
    }}>
      <h2 style={{
        color: '#333',
        fontSize: '18px',
        marginTop: '0',
        marginBottom: '15px',
      }}>Contact Details</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}>
        <tbody>
          <tr>
            <td style={{
              padding: '8px 0',
              color: '#666',
              width: '120px',
              verticalAlign: 'top',
            }}>Name:</td>
            <td style={{
              padding: '8px 0',
              color: '#333',
              fontWeight: '500',
            }}>{name}</td>
          </tr>
          <tr>
            <td style={{
              padding: '8px 0',
              color: '#666',
              verticalAlign: 'top',
            }}>Email:</td>
            <td style={{
              padding: '8px 0',
              color: '#333',
            }}><a href={`mailto:${email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{email}</a></td>
          </tr>
          <tr>
            <td style={{
              padding: '8px 0',
              color: '#666',
              verticalAlign: 'top',
            }}>Phone:</td>
            <td style={{
              padding: '8px 0',
              color: '#333',
            }}><a href={`tel:${phone}`} style={{ color: '#007bff', textDecoration: 'none' }}>{phone}</a></td>
          </tr>
          <tr>
            <td style={{
              padding: '8px 0',
              color: '#666',
              verticalAlign: 'top',
            }}>Subject:</td>
            <td style={{
              padding: '8px 0',
              color: '#333',
              fontWeight: '500',
            }}>{subject}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
    }}>
      <h2 style={{
        color: '#333',
        fontSize: '18px',
        marginTop: '0',
        marginBottom: '15px',
      }}>Message</h2>

      <div style={{
        color: '#333',
        lineHeight: '1.6',
        whiteSpace: 'pre-wrap',
      }}>
        {message}
      </div>
    </div>

    <div style={{
      marginTop: '30px',
      textAlign: 'center',
      color: '#666',
      fontSize: '14px',
      borderTop: '2px solid #f0f0f0',
      paddingTop: '20px',
    }}>
      <p style={{ margin: '0' }}>This is an automated email from H&S Ecommerce contact form.</p>
      <p style={{ margin: '5px 0 0 0' }}>
        Please reply to this email to respond to {name} directly.
      </p>
    </div>
  </div>
);
