import { useState } from "react"
import React from "react"

interface cart{
    name:string
}

export const Useeffectex: React.FC<cart> = (props): JSX.Element => {
    const [msg, setmesg] = useState<string>("")

    return (
    <>
        <p>{msg}</p>
        <p>{props.name}</p>
        <button onClick={() => { setmesg("hello") }}>click me</button>
        <button onClick={() => { setmesg("bye") }}>click me</button>
    </>
    )
}
