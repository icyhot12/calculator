import React from 'react'

function Button(props) {
    const { value } = props

    return (
        <button className={`bg-blue-300 text-white text-3xl h-[60px] w-[60px] rounded ${value === "=" ? "col-span-2 w-[124px] bg-orange-300" : ""}`}>
            {value}
        </button>
    )
}

export default Button