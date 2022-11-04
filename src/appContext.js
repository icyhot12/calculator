import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [calc, setCalc] = useState({
        number1: "",
        number2: "",
        sign: "",
        result: 0
    })
    const [signClicked, setSignClicked] = useState(false)

    return (
        <Context.Provider value={{
            calc,
            setCalc,
            signClicked,
            setSignClicked
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }