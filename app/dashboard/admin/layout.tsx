import React from 'react'
interface Children {
    children: React.ReactNode
}

export default function layout({children}:Readonly<Children>) {
  return (
      <div className='grid grid-cols-12 gap-5 p-5'>
          {/* <Sidebar /> */}
          <div className='col-span-2 bg-secondary h-[calc(100vh-50px)] rounded-xl p-2'>Sidebar</div>
          <div className='col-span-10 bg-indigo-50 rounded-xl p-4'>
              {children}
          </div>
      </div>
  )
}
