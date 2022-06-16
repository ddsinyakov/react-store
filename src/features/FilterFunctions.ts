import SortingTypes from "./SortingTypes";
import Product from "../models/IProduct";

// sorting products in different ways
export const sort = (products: Product[], sortType: string): Product[] => {
   let result = products;

   if (sortType === SortingTypes.ByPriceAscendig) {
      result = products.sort((prodA, prodB) => prodA.price - prodB.price);
   } else if (sortType === SortingTypes.ByPriceDescending) {
      result = products.sort((prodA, prodB) => prodB.price - prodA.price);
   } else if (sortType === SortingTypes.OnlySales) {
      result = products.filter((prod) => prod.hasDiscount);
   }

   return result;
}

// type for filters
export type Filter = {
   priceBorder?: {
      minPrice: number,
      maxPrice: number,
   }
   manufacturers?: string[],
} | null;

// filtering products with different filters
export const filter = (products: Product[], certainFilter: Filter): Product[] => {
   if (!certainFilter) return products;
   let result = products;

   // price borders
   if (certainFilter.priceBorder) {
      let pb = certainFilter.priceBorder;
      if (pb.maxPrice >= pb.minPrice) {
         result = result.filter((prod) => prod.price <= pb.maxPrice && prod.price >= pb.minPrice);
      }
   }

   // manufacturers
   if (certainFilter.manufacturers) {
      let mfs = certainFilter.manufacturers;
      if (mfs.length > 0) {
         result = result.filter((prod) => mfs.includes(prod.manufacturer));
      }
   }

   return result;
}