// src/models/Product.ts

interface Brand {
  _id: string;
  brand: string;
  production: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Category {
  _id: string;
  category: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Unit {
  _id: string;
  unit: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  rak_id: string[];
  position_id: string[];
  _id: string;
  name: string;
  sku: string;
  image: string;
  icon: string;
  discount: number;
  price: number;
  status: string;
  brand_ref: Brand;
  category_ref: Category;
  unit_ref: Unit;
  expired_date: string;
  stock: number;
  minimum_stock: number;
  length: number;
  width: number;
  db_user: string;
  createdAt: string;
  updatedAt: string;
  quantity?: number; // Tambahkan properti quantity

  __v: number;
}

export type { Product };
