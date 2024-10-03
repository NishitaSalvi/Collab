"use client"
import { LayoutDashboard, ListTodo, MessageCircleMore } from "lucide-react";
import {signIn, signOut, useSession} from "next-auth/react"
import Link from "next/link";


export default function Home() {
  const session = useSession()
  return (
    <>
    <div className="w-[99%] h-auto bg-#09090b m-1 flex flex-col items-center border-[0.5px] rounded-md border-zinc-800">
      <div className="w-[99%] h-[45vh] bg-#09090b top-[55px] m-1 flex flex-col items-center pt-[140px] border-b-[0.5px] border-zinc-800 ">

        <h1 className='text-5xl font-semibold text-white flex p-2 items-center'>CoTask</h1>
        <h2 className='text-2xl font-semibold text-white flex p-2 items-center'>hbefwehsaefb ebfhcsdwbcsuhdbcuis ebvwbusab</h2>
        <Link href="/mypage">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center flex justify-center items-center">
              Get Started
            </button>
          </Link>
      </div>

      <div className="w-[99%] h-[37vh] bg-#09090b top-[30px] m-1 flex flex-row items-center text-white gap-40 pb-[20px] px-[100px]">
          <div className="h-[20vh] px-[15px] py-[10px] bg-#18181b w-[28vw] rounded-md flex flex-row justify-center items-center text-white overflow-hidden border-zinc-800 border-[0.5px]">
            <ListTodo className="h-[5vh] w-[5vw]" />
            <h3 className="text-2xl font-extrabold text-right">Collaborate on Tasks in Real-Time</h3>
          </div>
          <div className="h-[20vh] px-[15px] py-[10px] bg-#18181b w-[28vw] rounded-md flex justify-center items-center overflow-hidden border-zinc-800 border-[0.5px]">
            <MessageCircleMore className="h-[5vh] w-[5vw]" />
            <h3 className="text-2xl font-extrabold text-white text-right">Engage in Seamless Communication</h3>
          </div>
          <div className="h-[20vh] px-[15px] py-[10px] bg-#18181b w-[28vw] rounded-md flex justify-center items-center overflow-hidden border-zinc-800 border-[0.5px]">
            <LayoutDashboard className="h-[5vh] w-[5vw]"/>
            <h3 className="text-2xl font-extrabold text-white text-right">Personalize Your Workflow</h3>
          </div>
      </div>


    </div>


    </>
  );
}

    
