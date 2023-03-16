import { useState } from 'react'

function notFound() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='text-center mt-60'>Nothing Here</h1>
      <img className='h-[50vh] ml-[450px] items' src="src/assets/img/Lowres1.jpg" alt="" />
    </div>
  )
}

export default notFound