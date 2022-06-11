

export default interface Product {
   id: number,
   name: string,
   img: string,
   description: string,
   price: number,
   hasDiscount: boolean,
   discountPrice?: number,
   available: boolean
}