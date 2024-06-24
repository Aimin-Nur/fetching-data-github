"use client"
import React, { useEffect } from "react";

export default function Error({error, reset}:{error:Error,reset:()=>void}) {
    useEffect(()=> {
        console.error(error);
    }, [error]);

    return(
        <div>
            <div>Error</div>
            <button onClick={()=>reset()}>Coba Ulang</button>
        </div>
        
    )
}
