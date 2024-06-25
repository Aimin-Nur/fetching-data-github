import React from "react";

async function getData(param:string) {
    const rest = await fetch(`https://api.github.com/users/${param}`)
    return rest.json()
}
export default async function DetailCari({params}:{params:{slug:string}}) {
    const data = await getData(params.slug)
    return (
        <div>
            <p>Detail User : {params.slug}</p>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}