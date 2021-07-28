import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div> 
            
            <h1>{props.title}</h1>

            <div>{props.children}</div>

            <div>
                {props.footer}
            </div>
           

        

        </div>
    )
}
