import { Result } from 'postcss'
import React from 'react'

import { Context } from '../appContext'

function Screen() {

    const { calc, signClicked, equalClicked } = React.useContext(Context)

    let screenValue = 0

    if(!signClicked){
        screenValue = calc.number1
    } else if (signClicked && !equalClicked) {
        screenValue = calc.number2
    } else if (equalClicked) {
        screenValue = calc.result
    }

    return (
        <div className='text-white bg-slate-400 text-5xl py-3 px-2 mb-2 rounded-lg h-[72px]'>
            {screenValue}
        </div>
    )
}

export default Screen