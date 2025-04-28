import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const RequirementTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>This is contact Requirements template.</p>
  </div>
);
