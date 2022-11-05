import React from 'react'
import { Context } from '../appContext'

function Button(props) {
    const { value } = props

    const {
        calc,
        setCalc,
        signClicked,
        setSignClicked,
        equalClicked,
        setEqualClicked
    } = React.useContext(Context)

    const resetClickHandler = () => {
        setCalc({
            number1: "",
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
    }
    const signClickHandler = (value) => {
        setSignClicked(true)
        setCalc(prevCalc => {
            return ({
                ...prevCalc,
                sign: value
            })
        })
    }
    const commaClickHandler = () => {
        console.log("comma")
    }
    const numClickHandler = (value) => {
        if (!signClicked) {
            setCalc(prevCalc => {
                return ({
                    ...prevCalc,
                    number1: prevCalc.number1 + value
                })
            })
        } else {
            setCalc(prevCalc => {
                return ({
                    ...prevCalc,
                    number2: prevCalc.number2 + value
                })
            })
        }
        console.log(calc)
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
            showResult("Divide by 0!")
        } else if (sign === "+") {
            result = value1 + value2
            showResult(result)
        } else if (sign === "-") {
            result = value1 - value2
            showResult(result)
        }

    }

    function showResult(value) {
        setCalc(prevCalc => {
            return ({ ...prevCalc, result: value })
        })
    }

    return (
        <button
            className={`bg-blue-300 text-white text-3xl h-[60px] w-[60px] rounded ${value === "=" ? "col-span-2 w-[124px] bg-orange-300" : ""}`}
            onClick={
                () => value === "C" ? resetClickHandler()
                    : value === "+-" ? invertClickHandler()
                        : value === "%" ? percentClickHandler()
                            : value === "=" ? equalsClickHandler()
                                : value === "/" ? signClickHandler(value)
                                    : value === "X" ? signClickHandler(value)
                                        : value === "-" ? signClickHandler(value)
                                            : value === "+" ? signClickHandler(value)
                                                : value === "." ? commaClickHandler()
                                                    : numClickHandler(value)
            }
        >
            {value}
        </button>
    )
}

export default Button