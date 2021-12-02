import React from 'react'
import Particles from 'react-tsparticles';

import options from "./options";

export default function ReactParticles() {
    return (
        <div>
            <Particles
                className="particles"
                options={options}
            />
        </div>
    )
}
     
