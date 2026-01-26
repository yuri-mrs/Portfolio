import { useState } from 'react'
import '../../css/Main.css'

import Banner from "../../imgs/banner.svg"

function BannerTopo() {
    return (
        <div className="banner-out-1 bg-cyan-700">
            <div>
                    <img src={Banner} alt="" />
                    <a href="https://www.freepik.com/free-vector/futuristic-cyberspace-binary-code-number-background-design_419814474.htm#from_element=cross_selling__vector">Image by starline on Freepik</a>
            </div>
            <img src="" alt="" />
            <h1 className="banner-title center">
                Hello World !! hi i'm yuri
            </h1>
        </div>
    )
}

export default BannerTopo