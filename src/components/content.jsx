import React from "react"
import location from "../assets/location.svg"

export default function Content(props){
  return(
        <div className="grid mt-5 md:grid-cols-5 xs:grid-cols-1 ">

            <div className="md:col-span-1">
                <img src={props.coverImg} className="h-full object-cover rounded-lg"/>
            </div>

                <div className="mt-5 place-self-center md:pl-5 md:mt-0 md:col-span-4">
                    <div className="flex">
                        <img src={location} alt="location svg" className="w-3"/>
                        <p className="pl-3 font-normal tracking-widest uppercase">{props.location}</p>
                        <a href={props.link} target="_blank">
                        <p className=" pl-4 font-normal underline text-gray-500">View on Google Maps</p>
                        </a>
                    </div>
                    <h1 className="font-bold text-3xl">{props.title}</h1>
                    <p className="font-bold text-xs pt-3">{props.Date}</p>
                    <p className="font-normal text-sm pt-3 leading-5">{props.description}</p>
                </div>
        </div>
  )
}