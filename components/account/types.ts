import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  brand: string;
  material: string;
  price: number;
  image?: string; 
}

export interface Order {
  id: string;
  status: "Processing" | "Shipped" | "Delivered";
  placedOn: string;
  eta: string;
  total: number;
  items: Pick<Product, "id" | "name" | "image">[];
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}