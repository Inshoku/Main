import Banner from './Banner'
import Navbar from './Navbar'
function First() {
  return (
    <div>
    <Navbar/>
    <Banner/> 
    <span class="text-sm bottom-2 left-5 absolute z-10 text-white">© Copyright 2023 <a href="" class="hover:underline">Inshoku</a> - All Rights Reserved.</span>   
    </div>  
  )
}

export default First