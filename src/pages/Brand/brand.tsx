import React from 'react'
import Image from 'next/image'

// image
import B1 from "../../../public/assets/Icon/amazon.png"
import B2 from "../../../public/assets/Icon/reddit.png"
import B3 from "../../../public/assets/Icon/spotify.png"
import B4 from "../../../public/assets/Icon/discord.png"

function brands() {
return (
            <section className="max-w-7xl mx-auto bg-white py-10">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="flex flex-wrap justify-center items-center">
                                <a href="#" className="w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4">
                                <Image 
                                    src={B1}
                                    alt="hero-image"
                                    className="w-full h-10" 
                                />
                                </a>
                                <a href="#" className="w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4">
                                <Image 
                                    src={B2}
                                    alt="hero-image"
                                    className="w-full h-10" 
                                />
                                </a>
                                <a href="#" className="w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4">
                                <Image 
                                    src={B3}
                                    alt="hero-image"
                                    className="w-full h-10" 
                                />
                                </a>
                                <a href="#" className="w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4">
                                <Image 
                                    src={B4}
                                    alt="hero-image"
                                    className="w-full h-10" 
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default brands