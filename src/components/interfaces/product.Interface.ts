export interface Product {
    id:string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    // type: Type;
    gender: Category
}

export type Category='mujer'|'hombre'|'kids'|'hogar'|'NA'|'unisex' ;
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'| 'NA';
export type Type = 'shirts'|'pants'|'hoodies'|'hats';
