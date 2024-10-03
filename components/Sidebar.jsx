import React from 'react'
import { MessageCircleMore, Settings,User,Users } from 'lucide-react'
import Link from 'next/link'; 

const Sidebar = () => {
  return (
    <div className='flex flex-row'>
    <div className='w-[4vw] h-[90.8vh] bg-#09090b top-[55px] sticky rounded-md m-1 border border-zinc-800 border-1'>
      <div className='flex justify-center items-center align-middle flex-col gap-7 mt-4  text-white'>
      {/* Link to the profile page */}
          <Link href="/mypage" passHref>
            <div className="group relative flex flex-col items-center">
              <User />
              <span className="absolute bottom-8 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded-md px-2 py-1">
                Profile
              </span>
            </div>
          </Link>

          <Link href="/mygroups" passHref>
            <div className="group relative flex flex-col items-center">
              <Users />
              <span className="absolute bottom-8 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded-md px-2 py-1">
                Groups
              </span>
            </div>
          </Link>

          {/* Tooltip for Chats */}
          <Link href="/mychats" passHref>
            <div className="group relative flex flex-col items-center">
              <MessageCircleMore />
              <span className="absolute bottom-8 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded-md px-2 py-1">
                Chats
              </span>
            </div>
          </Link>

          {/* Tooltip for Settings */}
          <Link href="/mysettings" passHref>
            <div className="group relative flex flex-col items-center">
              <Settings />
              <span className="absolute bottom-8 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded-md px-2 py-1">
                Settings
              </span>
            </div>
          </Link>
      </div>
    </div>
    
    </div>
  )
}

export default Sidebar