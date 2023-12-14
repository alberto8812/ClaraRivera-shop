'use client'
import Link from 'next/link'
import { titleFont } from '@/app/config/fonts'
import { IoAt, IoInformationOutline, IoLockClosed } from 'react-icons/io5'
import { RiFacebookLine, RiGoogleLine } from 'react-icons/ri'
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/actions';


export const LoginForm = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    console.log(errorMessage)



  return (
    <form action={dispatch} className="bg-white">
            <h1 className={`${titleFont.className}text-gray-800 font-bold text-2xl mb-1`}>Hola!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">bienvenido de nuevo</p>


            <div  className="flex flex-row justify-center items-center space-x-3 pb-3">
                    <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                <RiFacebookLine size={30} />
            </span>
                <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-red-400 hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <RiGoogleLine  size={30} />
            </span>

                </div>

            <div  className="flex items-center justify-center space-x-2 pb-4">
                <span className="h-px w-16 bg-gray-300"></span>
                <span className="text-gray-500 font-normal">O</span>
                <span className="h-px w-16 bg-gray-300"></span>
                </div>


            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <IoAt size={20} className="text-gray-400"/>
            <input className="pl-2 outline-none border-none" type="email"  name="email"  placeholder="Correo Electrónico" />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <IoLockClosed  size={20} className="text-gray-400"/>
            <input className="pl-2 outline-none border-none" type="password" name="password"  placeholder="Contraseña" />
            </div>

            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
                >
                {errorMessage && (
                    <>
                    <IoInformationOutline className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </div>


            <button type="submit" className="block w-full bg-[rgba(156,34,78,255)] hover:bg-[rgba(156,50,78,255)] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Ingresar</button>
            {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}

            <p className="text-gray-700 text-sm mt-6">
                no tienes una cuenta? 
                <Link href="/auth/new-account" className="text-blue-500 hover:text-blue-600 mt-3 focus:outline-none font-bold underline ml-2">
                registrate
                </Link>
            </p>
     </form>
  )
}