import prisma from "@/lib/prisma";
import {  hashSync } from "bcryptjs";
import { NextResponse } from "next/server";




export async function POST(req:Request) {
    try {
           console.log("post")
        const {name,password,email}=(await req.json()) as {
            name:string;
            email:string;
            password:string;
        };
        
        console.log("data 1")
        const dbUser= await prisma.user.findFirst({where:{email:email.toLowerCase()}}) ?? 'no-email';
        console.log("data 2")
        if(dbUser!=='no-email'){
               return NextResponse.json( "Usuario ya se encuentra registrado", { status: 400 } );
        }
        console.log("data 3")
        const hashed_password= hashSync(password);
        
        const user=await prisma.user.create({
            data:{
                name,
                email:email.toLowerCase(),
                password:hashed_password
            },
        });


        return NextResponse.json({
            user:{
                name:user.name,
                email:user.email
            }
        })
        
    } catch (error:any) {

        return new NextResponse(
           JSON.stringify({
            status:"error",
            message:error.message
           }),
           {status:500}
        );
        
    }
    
}