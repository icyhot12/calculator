import React from 'react'
import { Context } from '../appContext'

function Button(props) {
    const { value } = props

    const { setNum } = React.useContext(Context)

    const resetClickHandler = () => {
        setNum("")
    }
    const invertClickHandler = () => {
        console.log("invert")
    }
    const percentClickHandler = () => {
        console.log("percent")
    }
    const equalsClickHandler = () => {
        console.log("equals")
    }
    const signClickHandler = () => {
        console.log("sign")
    }
    const commaClickHandler = () => {
        console.log("comma")
    }
    const numClickHandler = (value) => {
        setNum(prevNum => {
            return (
                prevNum.concat(value.toString())
            )
        })
    }

    return (
        <button
            className={`bg-blue-300 text-white text-3xl h-[60px] w-[60px] rounded ${value === "=" ? "col-span-2 w-[124px] bg-orange-300" : ""}`}
            onClick={
                () => value === "C" ? resetClickHandler()
                    : value === "+-"? invertClickHandler()
                    : value === "%" ? percentClickHandler()
                    : value === "=" ? equalsClickHandler()
                    : value === "/" ? signClickHandler()
                    : value === "X" ? signClickHandler()
                    : value === "-" ? signClickHandler()
                    : value === "+" ? signClickHandler()
                    : value === "." ? commaClickHandler()
                    : numClickHandler(value)
            }
        >
            {value}
        </button>
    )
}

export default Button