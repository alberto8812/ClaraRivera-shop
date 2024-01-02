"use client";

import { useAddressStores, useCartStore } from "@/store";
import { currencyFormat } from "@/util";
import Link from "next/link";
import { useEffect, useState } from "react";

export const PlaceOrdrer = () => {
  
    const [Loaded, setLoaded] = useState(false);
    const address=useAddressStores(state=>state.address);
    const {itemsInCart,subtotal,tax,total}=useCartStore(state=>state.getSumaryInformation());


    useEffect(() => {
        setLoaded(true);
    }, []);

    if(!Loaded){
        return(
            <p>Cargando ...</p>
        )
    }
  return (
    <div className="bg-white rounded-xl shadow-xl p-7">
      <h2 className="text-2xl font-bold mb-2">{address.address}</h2>
      <div className="mb-10">
        <p className="text-xl">{address.firstName} {address.lastName}</p>
        <p>{address.address}</p>
        <p>{address.optionalAddres}</p>
        <p>{address.postalCode}</p>
        <p>{address.city}, {address.country}</p>
        <p>{address.phone}</p>
      </div>

      <div className="w-full h-0.5 bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>

      <div className="grid grid-cols-2">
        <span>No. Producto</span>
        <span className="text-right">{itemsInCart===1?'1 artículo':`${itemsInCart} articulos`}</span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subtotal)}</span>

        <span>Impuesto (15%)</span>
        <span className="text-right">{currencyFormat(tax)}</span>

        <span className="mt-2 text-2xl">Total</span>
        <span className="mt-5  text-right text-2xl">{currencyFormat(total)}</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          {/* disclamer */}
          <span className="text-xs">
            acepta nuestros{" "}
            <a href="#" className="underline">
              términos y condiciones
            </a>{" "}
            y{" "}
            <a href="#" className="underline">
              politica de privacida
            </a>
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
  );
};