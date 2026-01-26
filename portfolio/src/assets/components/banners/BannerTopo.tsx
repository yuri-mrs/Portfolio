import { useState } from 'react'
import '../../css/Main.css'

/**
 * Banner image
 * Original Name: futuristic-cyberspace-binary-code-number-background-design_419814474
 * Artitst: starline
 * Source: https://www.freepik.com/free-vector/futuristic-cyberspace-binary-code-number-background-design_419814474.htm#from_element=cross_selling__vector
 * License: Freepik
 */
import Banner from "../../imgs/banner.svg"

import World from "../../imgs/globe-showing-americas_1f30e.gif"

function BannerTopo() {
    return (
        <div className="banner-out-1 bg-cover bg-center" style={{ backgroundImage: `url(${Banner})` }}>
            <h1 className="banner-title center text-teal-400">
                <div className=''> Hello World !! </div>
                <img src={World} className='icon' alt="" />
                <div className=''>hi i'm Yuri M.R.S.</div>
            </h1>
        </div>
    )
}

export default BannerTopo