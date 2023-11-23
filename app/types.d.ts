export interface Product {
  Attribute:       Attribute[];
  ProductCategory: ProductCategory[];
  description:     string;
  name:            string;
  price:           string;
  product_id:      number;
 }
 
 export interface Attribute {
  attribute_id: number;
  color:        Color;
  color_id:     number;
  image:        string;
  product_id:   number;
  quantity:     number;
  size:         Size;
  size_id:      number;
 }
 
 export interface Color {
  color_id: number;
  name:     string;
 }
 
 export interface Size {
  name:    string;
  size_id: number;
 }
 
 export interface ProductCategory {
  category:            Category;
  category_id:         number;
  product_category_id: number;
  product_id:          number;
 }
 
 export interface Category {
  category_id: number;
  description: string;
  name:        string;
 }
 