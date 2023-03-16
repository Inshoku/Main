import { useNavigate } from 'react-router-dom'
function Navibar () {
    const navigate = useNavigate()
    return (
        <nav className="absolute bg-black/70 z-10">
            <div className="sm:px-12 flex items-center justify-between p-4 shadow-2xl  text-white text-3xl ">
                <div className="flex items-center ">
                    <button className='font-arapey' onClick={() => navigate('/')}>Inshoku</button>
                </div>
                <div className="flex items-center text-sm font-medium pl-[829px] ">
                    <div className="hidden w-full md:block md:w-auto text-white pr-4">
                        <ul className="flex flex-wrap items-center mt-0 rounded-lg border md:font-medium ">
                            <li>
                                <button className='block py-2 pl-3 pr-5 text-[18px]' onClick={() => navigate('/menu')}>Menu</button>      
                            </li>
                            <li>
                                <p>|</p>
                            </li>
                            <li>
                                <button className='block py-2 pr-3 pl-5 text-[18px]' onClick={() => navigate('/about')}>About Us</button>      
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navibar