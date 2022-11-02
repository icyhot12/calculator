import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [num, setNum] = useState("")
    const [res, setRes] = useState("")

    return (
        <Context.Provider value={{num, setNum, res, setRes}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }