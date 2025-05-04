export interface FormField {
  name: string;
  label: string;
  fieldType: "text" | "select" | "checkbox" | "textarea";
  options?: string[];
  required?: boolean; // Make required optional to match actual data structure
}
