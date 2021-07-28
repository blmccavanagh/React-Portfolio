import React from 'react'
import Navigation from './Navigation'

export default function Layout(props) {
    return (
        <div>
            <Navigation></Navigation>


            {props.children}


            footer

        </div>
    )
}
