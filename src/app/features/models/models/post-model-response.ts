import { Brand } from "./model-list-item-dto";

export interface PostModelResponse {
  id: number;
  brandId: number;
  name: string;
  modelYear: number;
  imageUrl: string;
  dailyPrice: number;
  brand: Brand;
}


