import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
            
            <div className="box-content h-50 w-50">
            <h1>{props.title}</h1>

            <a href={props.liveLink}><i class="fas fa-globe"></i></a>
            <a href={props.github}><i class="fab fa-github"></i></a>
            <img className="object-contain md:object-scale-down" src={props.image} />
            </div>

        </div>
    )
}