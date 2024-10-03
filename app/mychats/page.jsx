
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Plus, Send } from 'lucide-react'

const page = () => {
  return (
    <>
    <Sidebar/>
    <div className='w-[25vw] h-[90.8vh] bg-#09090b top-[55px] sticky rounded-md m-1 flex flex-col items-center gap-3 p-2 border-zinc-800 border-[0.5px]'>
      <div className='h-auto px-[5px] py-[10px] bg-#18181b w-[90%] rounded-md flex justify-center items-center overflow-hidden border-zinc-800 border-[0.5px]'>
        <h3 className='text-2xl font-extrabold text-white'> My Chats </h3>
      </div>
    </div>
    <div className=' relative h-auto w-[90vw] bg-#09090b m-1 flex flex-col items-center gap-10 rounded-md border-zinc-800 border-[0.5px] text-white'>
        <div className='absolute top-2 h-auto px-[3px] py-[3px] bg-#18181b w-[95%] rounded-md flex flex-row overflow-hidden rounded-md  border-zinc-800 border-[0.5px]'>
            <img src="https://lh3.googleusercontent.com/a/ACg8ocJjy2EHvBhqzTo7eXNWTeMxwzhom1dc9hNQwIQoVpZ883BlfA=s96-c" alt="" className='cardimg m-2 rounded-full p-[1px]' />
            <h2 className='text-2xl font-bold text-white flex p-2 items-center'> Name </h2>
        </div>
        
        
        <Plus className='absolute bottom-7 left-5' />
        <div className=' absolute bottom-4 right-3 h-auto px-[7px] py-[10px] bg-#18181b w-[94%] rounded-md flex justify-left items-center overflow-hidden border-zinc-800 border-[0.5px] text-white'>
            <h3 className='text-2xl font-extrabold text-white'>  Message </h3>
            <Send className='absolute bottom-3 right-5'/>
        </div>


    </div>
    


    
    
    
    
    </>
  )
}

export default page