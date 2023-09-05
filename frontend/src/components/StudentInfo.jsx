import React from 'react'

const StudentInfo = ({id,fullname,name,email}) => {
  return (
    <div className='w-full  rounded-sm border-b border-green-500 pb-2 flex justify-between px-1 mt-7 mb-3'>
       <p className='p1 '>{id}</p>
       <p className='p-1'>{fullname}</p>
       <p className='p-1'>{name}</p>
       <p className='p-1'>{email}</p>
       <p className='p-1'>edit</p>
    </div>
  )
}

export default StudentInfo