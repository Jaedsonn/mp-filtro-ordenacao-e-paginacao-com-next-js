export type people = {
  id: number;
  customer_name: string;
  customer_email: string;
  order_date: string;
  amount_in_cents: number;
  status: string;
  created_at: string;
  update_at: string;
} | null;

export type peopleData = {
  data: [];
} | null;
