



export interface Product {
    id    : string;
    name  : string;
    price : number;
    rating: number;
    image : string;
  }

  export interface productoCategory{
    category:string;
    product:Product[];
}

export const categoruProduct:productoCategory[]=[
    {
        category:'hombre',
        product:[
            {
                id: 'UUID-ABC-1',
                name: 'Teslo Hoodie',
                price: 15,
                rating: 5,
                image: '/products/1549268-00-A_2.jpg',
              },
              {
                id: 'UUID-ABC-2',
                name: 'Teslo Cap',
                price: 25,
                rating: 3,
                image: '/products/1473809-00-A_alt.jpg',
              },
              {
                id: 'UUID-ABC-3',
                name: 'Let the sunshine',
                price: 36,
                rating: 2,
                image: '/products/1506211-00-A_1_2000.jpg',
              }
             ]
    },
    {
        category:'mujer',
        product:[
            {
                id: 'UUID-ABC-4',
                name: 'Teslo Hoodie',
                price: 15,
                rating: 5,
                image: '/products/1657891-00-A_0_2000.jpg',
              },
              {
                id: 'UUID-ABC-5',
                name: 'Teslo Cap',
                price: 25,
                rating: 3,
                image: '/products/1657914-00-A_0_2000.jpg',
              },
              {
                id: 'UUID-ABC-6',
                name: 'Let the sunshine',
                price: 36,
                rating: 2,
                image: '/products/1657915-00-A_0_2000.jpg',
              }
        ]
    },
    ,
    {
        category:'niños',
        product:[
            {
                id: 'UUID-ABC-7',
                name: 'Teslo Hoodie',
                price: 15,
                rating: 5,
                image: '/products/1715672-00-A_featured.jpg',
              },
              {
                id: 'UUID-ABC-8',
                name: 'Teslo Cap',
                price: 25,
                rating: 3,
                image: '/products/1740140-00-A_0_2000.jpg',
              },
              {
                id: 'UUID-ABC-9',
                name: 'Let the sunshine',
                price: 36,
                rating: 2,
                image: '/products/1740145-00-A_2_2000.jpg',
              }
        ]
    },
]