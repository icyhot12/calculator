import React from 'react'
import { Context } from '../appContext'

function Button(props) {
    const { value } = props

    const {
        resetClickHandler,
        invertClickHandler,
        percentClickHandler,
        equalsClickHandler,
        signClickHandler,
        commaClickHandler,
        numClickHandler
    } = React.useContext(Context)

    return (
        <button
            className={`bg-blue-300 text-white text-3xl h-[60px] w-[60px] rounded ${value === "=" ? "col-span-2 w-[124px] bg-orange-300" : ""}`}
            onClick={
                (event) => value === "C" ? resetClickHandler()
                    : value === "+-" ? invertClickHandler()
                    : value === "%" ? percentClickHandler()
                    : value === "=" ? equalsClickHandler()
                    : value === "/" ? signClickHandler(value)
                    : value === "X" ? signClickHandler(value)
                    : value === "-" ? signClickHandler(value)
                    : value === "+" ? signClickHandler(value)
                    : value === "." ? commaClickHandler()
                    : numClickHandler(event, value)
            }
        >
            {value}
        </button>
    )
}

export default Button