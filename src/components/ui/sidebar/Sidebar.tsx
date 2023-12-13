'use client'

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { IoCloseCircleOutline, IoCloseOutline, IoHeartOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";

export const Sidebar = () => {
   

    const isSideMenuOpen=useUIStore(state=>state.isSideMenuOpen);
    const closeSideMenu=useUIStore(state=>state.closeSideMenu);


  return (
    <div>
        {/* background black */}
        {
         isSideMenuOpen && (       
            <div
            onClick={closeSideMenu} 
            className="fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-30 "
        />
        )
        }
        {/* blur */}
        {

         isSideMenuOpen && ( 
            <div 
             className="fade-in fixed z-40 top-0 left-0 h-screen backdrop-filter backdrop-blur-sm "
            />
             )   
        }
        {/* side menu */}

        <nav
        className={
            clsx(
                "fixed bg-white w-[400px] z-50 h-screen shadow-2xl right-0 top-0 transform transition-all duration-300 ",
                {
                    "translate-x-full":!isSideMenuOpen
                }
            )
        }
        >
         <IoCloseCircleOutline  
            size={50}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={()=>closeSideMenu()}
           />

           {/*input */}
        <div className="relative mt-20">
            <IoSearchOutline
            size={20}
            className="absolute top-2 right-2"
            />
            <input
                type='text'
                placeholder='Buscar'
                className='w-full bg-gray-50 rounded pl-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
            />

        </div>
                {/* menu */}
        <Link
         href={'/'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoPersonOutline size={30} />
            <span className='ml-3 text-xl'>Perfil</span>

        </Link>
        <Link
         href={'/'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoHeartOutline  size={30} />
            <span className='ml-3 text-xl'>Favoritos</span>

        </Link>
        <Link
         href={'/'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoTicketOutline size={30} />
            <span className='ml-3 text-xl'>Oridenes</span>

        </Link>
        <Link
         href={'/auth/login'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoLogInOutline size={30} />
            <span className='ml-3 text-xl'>Ingresar</span>

        </Link>
        <Link
         href={'/'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoLogOutOutline size={30} />
            <span className='ml-3 text-xl'>Salir</span>

        </Link>

        {/* line separator */}

        <div className='w-full h-px bg-gray-200 my-10'/>

        <Link
         href={'/'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoShirtOutline size={30} />
            <span className='ml-3 text-xl'>Products</span>

        </Link>
        <Link
         href={'/'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoTicketOutline size={30} />
            <span className='ml-3 text-xl'>Ordenes</span>

        </Link>
        <Link
         href={'/'}
         className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
        >
            <IoPeopleOutline size={30} />
            <span className='ml-3 text-xl'>Usurios</span>

        </Link>

        </nav>
    </div>
  )
}
