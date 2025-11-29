import React, { useEffect } from 'react'


function Background() {

    useEffect(()=>{
        document.body.className="bg-blue-500";
        return ()=>{
            document.body.className=''; 
        }
})

  return (
    <div></div>
  )
}

export default Background