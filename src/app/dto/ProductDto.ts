export interface ProductDto {
  productName: string;
  categoryPrimary: string;
  categorySecondary: string;
  price: number;
  quantity: number;
  productType: string;
  unit?: string;
}

export interface ProductDetailsDto
{
  AllProducts:number;
  allCategories:number;
  lowStocks:number;
}

export interface OrderCountDto
{
  productCountId:number;
  productName:string;
  orderCount:number;
}

export interface SalesDto
{
  ordered:number;
  shipped:number;
  delivered:number;
  cancelled:number;
}
