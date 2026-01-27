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
        <div 
            className="banner-out-1 bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${Banner})` }}
        >
            <h1 className="center absolute bottom-28 left-0 right-0 gap-4">
                <div className='banner-title'> Hello World !! </div>
                <img src={World} className='icon-banner' alt="" />
                <div className='banner-title'>i'm Yuri M.R.S.</div>
            </h1>
        </div>
    )
}

export default BannerTopo