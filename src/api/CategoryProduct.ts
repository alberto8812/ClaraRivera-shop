



export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men'|'women'|'kid'|'unisex'
  }

  type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

  export interface productoCategory{
    category:string;
    product:Product[];
}

export const categoruProduct:productoCategory[]=[
    {
        category:'hombre',
        product:[
            {
                description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
                images: [
                    '1740176-00-A_0_2000.jpg',
                    '1740176-00-A_1.jpg',
                ],
                inStock: 7,
                price: 75,
                sizes: ['XS','S','M','L','XL','XXL'],
                slug: "mens_chill_crew_neck_sweatshirt",
                type: 'shirts',
                tags: ['sweatshirt'],
                title: "Men’s Chill Crew Neck Sweatshirt",
                gender: 'men'
              },
              {
                description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
                images: [
                    '1740250-00-A_0_2000.jpg',
                    '1740250-00-A_1.jpg'
                ],
                inStock: 10,
                price: 130,
                sizes: ['S','M','L','XL','XXL'],
                slug: "men_raven_lightweight_zip_up_bomber_jacket",
                type: 'shirts',
                tags: ['shirt'],
                title: "Men's Raven Lightweight Zip Up Bomber Jacket",
                gender: 'men'
              },
              {
                description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
                images: [
                    '1740280-00-A_0_2000.jpg',
                    '1740280-00-A_1.jpg',
                ],
                inStock: 50,
                price: 45,
                sizes: ['XS','S','M','L'],
                slug: "men_turbine_long_sleeve_tee",
                type: 'shirts',
                tags: ['shirt'],
                title: "Men's Turbine Long Sleeve Tee",
                gender: 'men'
              }
             ]
    },
    {
        category:'mujer',
        product:[
            {
              description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
              images: [
                  '1740535-00-A_0_2000.jpg',
                  '1740535-00-A_1.jpg',
              ],
              inStock: 85,
              price: 225,
              sizes: ['XS','S','M'],
              slug: "women_cropped_puffer_jacket",
              type: 'hoodies',
              tags: ['hoodie'],
              title: "Women's Cropped Puffer Jacket",
              gender: 'women'
              },
              {
                description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
                images: [
                    '1740226-00-A_0_2000.jpg',
                    '1740226-00-A_1.jpg',
                ],
                inStock: 10,
                price: 130,
                sizes: ['XS','S','M','XXL'],
                slug: "women_chill_half_zip_cropped_hoodie",
                type: 'hoodies',
                tags: ['hoodie'],
                title: "Women's Chill Half Zip Cropped Hoodie",
                gender: 'women'
              },
              {
                description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
                images: [
                    '1740260-00-A_0_2000.jpg',
                    '1740260-00-A_1.jpg',
                ],
                inStock: 9,
                price: 110,
                sizes: ['XS','S','M','L','XL','XXL'],
                slug: "women_raven_slouchy_crew_sweatshirt",
                type: 'hoodies',
                tags: ['hoodie'],
                title: "Women's Raven Slouchy Crew Sweatshirt",
                gender: 'women'
              }
        ]
    },
    ,
    {
        category:'niños',
        product:[
            {
              description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
              images: [
                  '1473809-00-A_1_2000.jpg',
                  '1473809-00-A_alt.jpg',
              ],
              inStock: 16,
              price: 25,
              sizes: ['XS','S'],
              slug: "made_on_earth_by_humans_onesie",
              type: 'shirts',
              tags: ['shirt'],
              title: "Made on Earth by Humans Onesie",
              gender: 'kid'
              },
              {
                description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
                images: [
                    '8529387-00-A_0_2000.jpg',
                    '8529387-00-A_1.jpg',
                ],
                inStock: 0,
                price: 30,
                sizes: ['XS','S'],
                slug: "scribble_t_logo_onesie",
                type: 'shirts',
                tags: ['shirt'],
                title: "Scribble T Logo Onesie",
                gender: 'kid'
              },
              {
                description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
                images: [
                    '1742702-00-A_0_2000.jpg',
                    '1742702-00-A_1.jpg',
                ],
                inStock: 10,
                price: 65,
                sizes: ['XS','S','M'],
                slug: "kids_cyberquad_bomber_jacket",
                type: 'shirts',
                tags: ['shirt'],
                title: "Kids Cyberquad Bomber Jacket",
                gender: 'kid'
              }
        ]
    },
]