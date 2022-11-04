import React from 'react'

import { Context } from '../appContext'

function Screen(props) {

    const { calc } = React.useContext(Context)

    return (
        <div className='text-white bg-slate-400 text-5xl py-3 px-2 mb-2 rounded-lg h-[72px]'>
            {calc.result}
        </div>
    )
}

export default Screen