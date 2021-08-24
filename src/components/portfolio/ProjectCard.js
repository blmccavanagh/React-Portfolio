import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
            
            <div className="box-content h-50 w-50">
            <h1>{props.title}</h1>

            <a href={props.liveLink} className="glowPortfolio"><i className="fas fa-globe fa-2x m-2"></i></a>
            <a href={props.github} className="glowPortfolio"><i className="fab fa-github fa-2x m-2"></i></a>
            <img className="mx-auto object-contain md:object-scale-down h-52 w-80 my-4" src={props.image} />
            </div>

        </div>
    )
}