import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';

const Search = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isSearchPage, setIsSearchPage] = useState(false)
    const [isMobile] = useMobile()

    useEffect(() => {
        const isSearch = location.pathname === "/search"
        setIsSearchPage(isSearch)
    }, [location])


    const redirectToSearchPage = () => {
        navigate("/search")

    }

    console.log("search", isSearchPage)

    return (
        <div className='w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-100'>
            <div>

                {
                    (isMobile && isSearchPage) ? (
                        <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group hover:text-primary-100 bg-white rounded-full shadow-md'>
                            <FaArrowLeft size={20} />
                        </Link>
                    ) : (
                        <button className='flex justify-center items-center h-full p-3 group hover:text-primary-100'>
                            <IoSearch size={22} />
                        </button>
                    )
                }

            </div>
            <div className='w-full h-full'>
                {
                    !isSearchPage ? (
                        //not in search page
                        <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'search "milk"',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'search "bread"',
                                    1000,
                                    'search "sugar"',
                                    1000,
                                    'search "paneer"',
                                    1000,
                                    'search "chocolate"',
                                    1000,
                                    'search "curd"',
                                    1000,
                                    'search "rice"',
                                    1000,
                                    'search "egg"',
                                    1000,
                                    'search "chips"',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    ) : (
                        //when i was search page
                        <div className='w-full h-full'>
                            <input
                                type='text'
                                placeholder='Search for atta dal and more.'
                                autoFocus
                                className='bg-transparent w-full h-full outline-none'
                            />
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Search
