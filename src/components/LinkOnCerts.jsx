import React from 'react'
import { useState } from 'react';



export default function LinkOnCerts({ typecert }) {
    const [colorOfBorder,setColorOfBorder] = useState('#0d6efd')
    
    return (
        <div style= {{fontFamily: 'Balsamiq Sans'}}>
            <h2 style={{borderLeft:'solid', borderColor: colorOfBorder,paddingLeft:'1rem'}} onClick={()=>setColorOfBorder('red')}>{typecert}</h2>
        </div>
    )
}
