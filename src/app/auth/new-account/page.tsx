'use client'
import { titleFont } from '@/app/config/fonts';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { IoAt, IoInformationOutline, IoLockClosed } from 'react-icons/io5';
import {  RiUserLine } from 'react-icons/ri';

interface FormValues{
  name:string,
  email:string,
  password:string,
  passwordValidate:string
}

export default function NexAccountPage() {

   const [Loading, setLoading]       = useState(false);
   const [error, setError]           = useState("");
   const [formValues, setFormValues] = useState<FormValues>({
     name:'',
     email:'',
     password:'',
     passwordValidate:''
   });

   const onSubmit=async (e:React.FormEvent)=>{
      e.preventDefault();
      setLoading(true);
      
      try {
        const response= await fetch("/api/register",{
          method:"POST",
          body:JSON.stringify(formValues),
          headers:{
            "Content-Type":"application/json",
          }
        });

        setLoading(false);
       
        if(!response.ok){
          setError((await response.json()).message)
          return;
        }
       
        setFormValues({name:'',email:'',password:'',passwordValidate:''});
        signIn(undefined,{callbackUrl:"/application/json"})
      } catch (error:any) {
        setLoading(false);
        setError(error);
      }

   };
   
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };



  return (
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2  h-screen">
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
                <input 
                className="pl-2 outline-none border-none" 
                type="text" 
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Nombre completo" />
              </div>

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoAt size={20} className="text-gray-400"/>
                <input 
                className="pl-2 outline-none border-none" 
                type="email" 
                name="email"
                value={formValues.email}
                onChange={handleChange}
                 placeholder="Correo Electrónico" />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoLockClosed  size={20} className="text-gray-400"/>
                <input 
                className="pl-2 outline-none border-none" 
                type="password" 
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Contraseña" />
              </div>

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <IoLockClosed  size={20} className="text-gray-400"/>
                <input 
                className="pl-2 outline-none border-none"
                 type="password" 
                 name="passwordValidate"
                 value={formValues.passwordValidate}
                 onChange={handleChange}
                 placeholder="Confirmar contraseña" />
              </div>
           
              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
                >
                {true && (
                    <>
                    <IoInformationOutline className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{error}</p>
                    </>
                )}
            </div>



              <button 
              type="submit" 
              className="block w-full bg-[rgba(156,34,78,255)] hover:bg-[rgba(156,50,78,255)] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              disabled={Loading}
              >
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
    </form>



  );
}