import  React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../languages/Text/Text';
const Footer = () => {
    return (
        <footer className="p-4 bg-[#0E2144]    text-white shadow  md:px-6 md:py-3 relative">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0">
                    <img src="./img/wahedLogo.png" className="mr-3 h-9 sm:h-11" alt="Investment Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap"></span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-xl text-white  sm:mb-0">
                    <li>
                        <Link to={"/about"}>
                            <p href="#" className="mr-4 text-base hover:underline md:mr-6 "><Text tid={"about"} /></p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/privacy'}>
                            <p href="#" className="mr-4 text-base hover:underline md:mr-6"><Text tid={"privacyPolicy"} /></p>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-3" />
            <span className="block  text-white  sm:text-center">© 2022 <a href="#" className="">IRGT</a>. <Text tid={"alright"} />.
                <p className=' sm:text-center'><Text tid={'contact'}/> &nbsp; +971566877176 support@waheedasiainvest.com</p>
            </span>
            
        </footer>
        )
}

export default Footer;