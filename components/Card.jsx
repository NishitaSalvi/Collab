import { Pin } from 'lucide-react'
import React from 'react'

const Card = () => {
    return (
        <>
            <div className='bg-slate-700 w-[85%] h-[24vh] rounded-lg flex flex-col relative'>
                <div className='flex flex-row '>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJjy2EHvBhqzTo7eXNWTeMxwzhom1dc9hNQwIQoVpZ883BlfA=s96-c" alt="" className='cardimg m-1 rounded-full p-[2px]' />
                    <h2 className='text-3xl font-extrabold text-white flex p-2 items-center'>Title Hello World</h2>
                </div>
                <div className='text-lg font-bold text-white flex pl-10 pr-1 py-1 overflow-y-auto w-[70%] h-[auto]'>
                    <h3>dfghjkln siush dfshd fiukajsnkdxcshdf sdf  sdfhv sdfh soidlzkf sdkf sdkzf sdkzf ;</h3>
                </div>
                <div className='absolute right-0 top-2 w-auto flex flex-row gap-5 justify-center'>
                    <Pin />
                    <button className="flex-end relative inline-flex items-center justify-center p-0.5 w-[9.6vw] h-[auto] mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-500 rounded-md group-hover:bg-opacity-0">
                            Mark as done
                        </span>
                    </button>
                </div>
                <div className='absolute right-7 bottom-3'>
                    time - time
                </div>
            </div>
        </>
    )
}

export default Card