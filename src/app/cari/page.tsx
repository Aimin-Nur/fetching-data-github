"use client"
import React, { useState } from "react";

export default function page() {

    const [query,setQuery] = useState('')

    const onSearch=(e:any)=>{
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setQuery(inputQuery)
    }
    return (
     <div>
        <form action="" onSubmit={onSearch}>
            <input type="text" />
            <button>Cari Orang</button>
        </form>
     </div>   
    )
}