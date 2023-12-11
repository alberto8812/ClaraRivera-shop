import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";



const productInCart=[
  initialData.products[0],
  initialData.products[2],
  initialData.products[4],
]



export default function  CartPage() {
  return (
    <>
      <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
        <div className="flex flex-col w-[1000px]">
          <Title
           title="Carrito"
          />
          <div  className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* cart */}
            <div className="flex flex-col mt-5">
              <span>Agregar mas Items</span>
              <Link href="/" className="underline mb-5 hover:text-blue-700">
               Continúa comprando
              </Link>
              {/* item */}
              {
            productInCart.map(product=>(
              <div className="flex" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded"
                  style={
                    {
                      width:'100px',
                      height:'100px'
                    }
                  }
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3}/>
                  <button className="underline mt-3">
                    Remover
                  </button>
                </div>

              </div>
            ))
          }
            </div>
                     {/* chekout */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span >No. Producto</span>
              <span className="text-right">3 articulos</span>

              <span >Subtotal</span>
              <span className="text-right">$ 100</span>

              <span >Impuesto (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-2 text-2xl">Total</span>
              <span className="mt-5  text-right text-2xl">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link 
              className="flex btn-primary justify-center"
              href="/checkout/address"
              >
                Checkout
              </Link>
            </div>

          </div>


          </div>
        </div>
      </div>
     
    </>
  );
}