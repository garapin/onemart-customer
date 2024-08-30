interface InvoicesDetails {
  externalId: string;
  status: string;
  amount: number;
  payerEmail: string;
  paymentMethod: string;
  updated: string;
  merchantName: string;
  items: Item[];
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  referenceId: string;
}

export type { InvoicesDetails };
