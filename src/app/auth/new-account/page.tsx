
import { titleFont } from '@/app/config/fonts';
import { SlideShowImage } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { IoAt, IoLockClosed } from 'react-icons/io5';
import { RiFacebookLine, RiGoogleLine, RiUserLine } from 'react-icons/ri';


export default function () {
  return (
<div className="grid grid-cols-1 md:grid-cols-2  h-screen">
  

     <Image
      src="/imgs/CLARA RIVERA_LOGO SLOGAN_Negativo Vinotinto.jpg"
      width={500}
      height={500}
      alt='logo'
      className="hidden md:block h-screen w-screen"
     />


  <div className="flex  justify-center items-center bg-white ">
    <div className="bg-white">
      <h1 className={`${titleFont.className}text-gray-800 font-bold text-2xl mb-1 pb-5`}>Registrate!</h1>



      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <RiUserLine  size={20} className="text-gray-400"/>
        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Nombre completo" />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <IoAt size={20} className="text-gray-400"/>
        <input className="pl-2 outline-none border-none" type="email" name="" id="" placeholder="Correo Electrónico" />
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <IoLockClosed  size={20} className="text-gray-400"/>
        <input className="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Contraseña" />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <IoLockClosed  size={20} className="text-gray-400"/>
        <input className="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Confirmar contraseña" />
      </div>
      <button type="submit" className="block w-full bg-[rgba(156,34,78,255)] hover:bg-[rgba(156,50,78,255)] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
        Crear cuenta
      </button>
      {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}

      <p className="text-gray-700 text-sm mt-6">
           tienes una cuenta? 
          <Link href="/auth/login" className="text-blue-500 hover:text-blue-600 mt-3 focus:outline-none font-bold underline ml-2">
             Ingresar
          </Link>
        </p>
    </div>
    
  </div>
</div>



  );
}