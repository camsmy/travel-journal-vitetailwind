import React from "react"
import location from "../assets/location.svg"

export default function Content(props){
  return(
        <div className="grid max-w-5xl mt-5 md:grid-cols-2 xs:grid-cols-1">
            <div className="">
                <img src={props.coverImg} className="h-full xs:w-1/2 object-cover rounded-lg"/>
            </div>
{/* may ovrflow must be fix */}
            <div className="md:pl-5">
                <div className="flex">
                    <img src={location} alt="location svg" className="w-3"/>
                    <p className="pl-3 font-normal tracking-widest uppercase">{props.location}</p>
                    <p className=" pl-4 font-normal underline text-gray-500">View on Google Maps</p>
                </div>
                <h1 className="font-bold text-3xl">{props.title}</h1>
                <p className="font-bold text-xs pt-3">{props.Date}</p>
                <p className="font-normal text-sm pt-3 leading-5">{props.description}</p>
            </div>
        </div>
  )
}