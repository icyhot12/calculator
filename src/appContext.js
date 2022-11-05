import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [calc, setCalc] = useState({
        number1: "0",
        number2: "",
        sign: "",
        result: ""
    })
    const [signClicked, setSignClicked] = useState(false)
    const [equalClicked, setEqualClicked] = useState(false)
    const [screen, setScreen] = useState("")
    
    const { number1, number2, result } = calc
    
    const resetClickHandler = () => {
        setCalc({
            number1: "0",
            number2: "",
            sign: "",
            result: 0
        })
        setSignClicked(false)
        setEqualClicked(false)
    }

    const invertClickHandler = () => {
        console.log("invert")
    }
    const percentClickHandler = () => {
        console.log("percent")
    }

    const equalsClickHandler = () => {
        const { number1, number2, sign } = calc
        calculate(number1, number2, sign)
        setEqualClicked(true)
        setSignClicked(false)
        setCalc(prevCalc => ({
            ...prevCalc,
            number1: prevCalc.result,
            number2: "",
            sign: ""
        }))
    }

    const signClickHandler = (value) => {
        setSignClicked(true)
        setCalc(prevCalc => ({ ...prevCalc, sign: value }))
        if (equalClicked) { setEqualClicked(false) }
    }

    const commaClickHandler = () => {
        if (!calc.number1.includes(".")) {
            setCalc(prevCalc => ({ ...prevCalc, number1: prevCalc.number1.concat(".") }))
        }
    }

    const numClickHandler = (value) => {
        if (!signClicked) {
            setCalc(prevCalc => ({ ...prevCalc, number1: prevCalc.number1 + value }))
        } else {
            setCalc(prevCalc => ({ ...prevCalc, number2: prevCalc.number2 + value }))
        }
    }

    function calculate(a, b, sign) {

        let value1 = Number(a)
        let value2 = Number(b)
        let result = 0

        if (sign === "X") {
            result = value1 * value2
            showResult(result)
        } else if (sign === "/" && value2 !== 0) {
            result = value1 / value2
            showResult(result)
        } else if (sign === "/") {
            showResult("/0 Error!")
        } else if (sign === "+") {
            result = value1 + value2
            showResult(result)
        } else if (sign === "-") {
            result = value1 - value2
            showResult(result)
        }
    }

    function showResult(value) {
        setCalc(prevCalc => ({ ...prevCalc, result: value }))
    }

    function clearValue(value) {
        let clearedValue = value.toString().replace(/^0+(?!\.|$)/, '').slice(0, 9)
        return clearedValue
    }


    useEffect(() => {
        if (!signClicked) {
            setScreen(clearValue(number1))
        } else if (signClicked && !equalClicked && number2.length < 1) {
            setScreen(clearValue(number1))
        } else if (signClicked && !equalClicked) {
            setScreen(clearValue(number2))
        } else if (equalClicked) {
            setScreen(clearValue(result))
        }
    }, [calc])


    return (
        <Context.Provider value={{
            calc,
            signClicked,
            equalClicked,
            setEqualClicked,
            resetClickHandler,
            invertClickHandler,
            percentClickHandler,
            equalsClickHandler,
            signClickHandler,
            commaClickHandler,
            numClickHandler,
            screen
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }