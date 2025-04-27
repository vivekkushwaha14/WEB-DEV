import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, getadjective }) => {
    console.log("Navbar is rendered")
    return (
        <div>
            <div>I am a {adjective} Navbar
                <button onClick={() => { getadjective() }}>{getadjective()}</button>
            </div>
        </div>
    )
}

export default memo(Navbar)
