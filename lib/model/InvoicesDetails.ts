interface InvoicesDetails {
  invoice_label: string;
  status: string;
  total_with_fee: number;
  webhook: Webhook;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface Webhook {
  amount: number;
  payerEmail: string;
  merchantName: string;
  paymentMethod: string;
  updated: string;
  items: Item[];
  invoiceUrl: string;
}

export type { InvoicesDetails };
