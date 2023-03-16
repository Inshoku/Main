import Navbar from "./Navbar"

function Third () {
    return (
        <div>
            <div>
            <Navbar/>
            </div>
            <div class="bg-about flex items-center justify-center h-screen mx-auto relative bg-red-300">
                <blockquote class="text-center text-black">
                    <p class="font-bold text-5xl">About Us</p>
                        <p className='text-lg pt-6 font-semibold'>Inshoku is a Japanese restaurant that provides food and drinks typical of Japan,
                        <br />
                            learn about our food and drink culture today.</p>
                            <ul className='flex flex-wrap justify-center pt-12 space-x-4 text-4xl'>
                            <li>
                                <form action="https://www.facebook.com/profile.php?id=100088788657947&mibextid=ZbWKwL">
                                    <button formTarget='_blank' className="group border-2 border-black rounded-full hover:bg-black transition hover:duration-500 py-2 px-[6px]">
                                        <i class="fa-brands fa-facebook-f fa-fw group-hover:text-white group-hover:duration-500"></i>
                                    </button>
                                </form>
                            </li>
                            <li>
                                <form action="https://twitter.com/ChokoNumeral?t=NuFoJWv-fJjemNXRGXDOyQ&s=09">
                                    <button formTarget='_blank' className="group border-2 border-black rounded-full hover:bg-black transition hover:duration-500 py-2 px-[6px]">
                                        <i class="fa-brands fa-twitter fa-fw group-hover:text-white group-hover:duration-500"></i>
                                    </button>
                                </form>
                            </li>   
                            <li>
                                <form action="https://instagram.com/chokonumeral?igshid=NDk5N2NlZjQ=">
                                    <button formTarget='_blank' className="group border-2 border-black rounded-full hover:bg-black transition hover:duration-500 py-2 px-[6px]">
                                        <i class="fa-brands fa-instagram fa-fw group-hover:text-white group-hover:duration-500"></i>
                                        <i class="fa-solid fa-user"></i>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </blockquote>
                <span class="text-sm absolute bottom-2 left-5">© Copyright 2023 <a href="" class="hover:underline">Inshoku</a> - All Rights Reserved.</span>
            </div>  
        </div>
    )
}
export default Third