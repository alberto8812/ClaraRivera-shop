'use client'
import { IoAt, IoInformationOutline, IoLockClosed } from 'react-icons/io5';
import {  RiUserLine } from 'react-icons/ri';
import { titleFont } from '@/app/config/fonts';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import {  SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';



type FormValues={
    name:string,
    email:string,
    password:string,
    passwordValidate:string
  }

export const RegisterForm = () => {

    const {register,handleSubmit,formState:{errors},watch}=useForm<FormValues>({

    })

    const onSubmit:SubmitHandler<FormValues>=async(data)=>{
        
        const {name,email,password,passwordValidate}=data;
        console.log(name,email,password,passwordValidate)

    };





    // const [Loading, setLoading]       = useState(false);
    // const [error, setError]           = useState("");
    // const [formValues, setFormValues] = useState<FormValues>({
    //   name:'',
    //   email:'',
    //   password:'',
    //   passwordValidate:''
    // });
 
    // const onSubmit=async (e:React.FormEvent)=>{
    //    e.preventDefault();
    //    setLoading(true);
       
    //    try {
    //      console.log("paso1")
    //      const response= await fetch("/api/register",{
    //        method:"POST",
    //        body:JSON.stringify(formValues),
    //        headers:{
    //          "Content-Type":"application/json",
    //        }
    //      })
 
    //      setLoading(false);
    //      console.log(response)
    //      if(!response.ok){
    //        setError((await response.json()).message)
    //        return;
    //      }
        
    //      setFormValues({name:'',email:'',password:'',passwordValidate:''});
    //     // signIn(undefined,{callbackUrl:"/application/json"})
    //    } 
    //    catch (error:any) {
    //      setLoading(false);
    //      setError(error);
    //    }
 
    // };
    
//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//      const { name, value } = event.target;
//      setFormValues({ ...formValues, [name]: value });
//    };
  return (
    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
            <h1 className={`${titleFont.className}text-gray-800 font-bold text-2xl mb-1 pb-5`}>Registrate!</h1>
            {
                errors.name?.type=== 'required' && (
                    <span className='text-red-500'>* el nombre es obligatorio</span>
                )
            }
            <div className={
                clsx(
                    "flex items-center border-2 py-2 px-3 rounded-2xl mb-4",
                    {
                        
                        'border-red-500':errors.name
                    }
                )
            }>
            <RiUserLine  size={20} className="text-gray-400"/>
            <input 
            className="pl-2 outline-none border-none"
             
            type="name" 
               {...register('name',{required:true})}
             />
            </div>

            <div 
                className={
                    clsx(
                        "flex items-center border-2 py-2 px-3 rounded-2xl mb-4",
                        {
                            
                            'border-red-500':errors.email
                        }
                    )
                }
            
            >
            <IoAt size={20} className="text-gray-400"/>
            <input 
             className="pl-2 outline-none border-none"                    
            type="email" 
            {...register('email',{required:true,pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })}
             />
            </div>
            <div 
                className={
                    clsx(
                        "flex items-center border-2 py-2 px-3 rounded-2xl mb-4",
                        {
                            
                            'border-red-500':errors.password
                        }
                    )
                }
            >
            <IoLockClosed  size={20} className="text-gray-400"/>
            <input 
            className= "pl-2 outline-none border-none"
            type="password" 
            {...register('password',{required:true,pattern:/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/})}
             />
            </div>

            <div
            
            className={
                clsx(
                    "flex items-center border-2 py-2 px-3 rounded-2xl mb-4",
                    {
                        
                        'border-red-500':errors.passwordValidate
                    }
                )
            }
            >
            <IoLockClosed  size={20} className="text-gray-400"/>
            <input 
            className="pl-2 outline-none border-none"       
            type="password" 
            {...register('passwordValidate',{required:true,
                validate:(val:string)=>{
                    if(watch('password')!=val){
                        return "Contraseña no son iugales"
                    }
                
                
                }})}
            />
            </div>
        
            <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
            >
            {true && (
                <>
                <IoInformationOutline className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{true}</p>
                </>
            )}
        </div>



            <button 
            type="submit" 
            className="block w-full bg-[rgba(156,34,78,255)] hover:bg-[rgba(156,50,68,255)] mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
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
  </form>
  )
}
