import Reactfiref from 'react'

import { Context } from '../appContext'

function Screen() {

    const { screen } = React.useContext(Context)

    return (
        <div className='text-white bg-slate-400 text-5xl py-3 px-2 mb-2 rounded-lg h-[72px]'>
            {screen}
        </div>
    )
}

export default Screen