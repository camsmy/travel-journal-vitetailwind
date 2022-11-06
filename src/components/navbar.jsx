import React from "react"

export default function Navbar(props){
    return(
        <div className="w-screen bg-red-500 flex justify-center py-4">
            <img src={props.image}/>
            <h3 className="pl-4 text-white font-medium text-base">{props.title}</h3>
        </div>
    )
}