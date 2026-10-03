export type ContactField = "name" | "email" | "message";

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Record<ContactField, string>;
}
