import React, { useEffect, useState } from 'react'

import { Context } from '../appContext'

function Screen() {

    const { calc, signClicked, equalClicked} = React.useContext(Context)

    const { number1, number2, result } = calc

    // screen display behaviour
    let tempScreen

    if (!signClicked) {
        tempScreen = number1
    } else if (signClicked && !equalClicked && number2.length < 1) {
        tempScreen = number1
    } else if (signClicked && !equalClicked) {
        tempScreen = number2
    } else if (equalClicked) {
        tempScreen = result
    }

    function clearValue(value){
        let clearedValue = value.toString().replace(/^0+(?!\.|$)/, '').slice(0,9)
        return clearedValue
    }
    
    return (
        <div className='text-white bg-slate-400 text-5xl py-3 px-2 mb-2 rounded-lg h-[72px]'>
            {clearValue(tempScreen)}
        </div>
    )
}

export default Screen