import Image from 'next/image'
import React from 'react'

import imageOne from "../../../public/assets/pluto-admin.jpg"
import imageTwo from "../../../public/assets/pluto-chat.jpg"
import imageThree from "../../../public/assets/pluto-pharma.jpg"

function portfolio() {
  return (
    <div>
        <div className="max-w-7xl mx-auto flex  items-center justify-center p-10 bg-white">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
            <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
            <div className="h-1/2 flex-1">
                <Image  src={imageOne} className="h-full w-full object-cover object-left-top" alt="" />
                </div>
            <div className="p-10">
                <h3 className="text-xl font-medium text-gray-700">Pluto Admin</h3>
                <p className="mt-2 text-slate-500">This is a solution for everyone. Although it is at the heart of Scrum and is typically used by software development teams, it can be successfully applied to other businesses, as well as used for improving personal productivity.</p>
                <a href="" className="mt-2 inline-flex text-sky-500">Read More →</a>
            </div>
            </div>
            <div className="flex rounded-md border border-slate-200">
            <div className="flex-1 p-10">
                <h3 className="text-xl font-medium text-gray-700">Pluto Chat</h3>
                <p className="mt-2 text-slate-500">Pluto Chat allows you to create chat and discussion platforms. You can create chat groups with other people, send and receive private messages and various digital documents (video, photos, files, audio). Compatible with all devices. We have components to meet all your needs.</p>
                <a href="" className="mt-2 inline-flex text-sky-500">Read More →</a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                <Image  src={imageTwo} className="h-full w-full object-cover object-left-top" alt="" />
                </div>
            </div>
            </div>
            <div className="flex rounded-md border border-slate-200">
            <div className="flex-1 p-10">
                <h3 className="text-xl font-medium text-gray-700">Pluto Pharma</h3>
                <p className="mt-2 text-slate-500">Pluto Pharma comes with a great selection of layouts for every modern drugstore, medical store, apothecary, vitamin and supplements store & supplement products website</p>
                <a href="" className="mt-2 inline-flex text-sky-500">Read More →</a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                <Image  src={imageThree} className="h-full w-full object-cover object-left-top" alt="" />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default portfolio