/**
 * acceso para el cierre de la venta
 * 
 */


/**
 * screen for onl admin 
 * 
 */

import { QuantitySelector, Title } from "@/components"
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

 const productInCart=[
  initialData.products[0],
  // initialData.products[1],
  // initialData.products[2],
 ]





export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title 
         title="Verificar orden"
        />  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5 hover:text-blue-700">
              Editar Carrito
            </Link>
        
          {/* items */}

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
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Sutotal: $ {product.price*3}</p>
                  <button className="underline mt-3">
                    Remover
                  </button>
                </div>

              </div>
            ))
          }
          </div>



          {/* chekout */}
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl font-bold mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Carlos velasco</p>
              <p>Cr. Robledo</p>
              <p>col. centro</p>
              <p>alcadia. rubber</p>
              <p>colombia</p>
              <p>13264588.12
              </p>
            </div>

            <div  className="w-full h-0.5 bg-gray-200 mb-10"/>

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
              <p className="mb-5">
                {/* disclamer */}
                  <span className="text-xs">
                    Al hacer clic en "color orden", acepta nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">politica de privacida</a> 

                  </span>
              </p>
              <Link 
              className="flex btn-primary justify-center"
              href="/orders/123"
              >
                Checkout
              </Link>
            </div>

          </div>

        </div>
       
      </div>
    </div>
  );
}