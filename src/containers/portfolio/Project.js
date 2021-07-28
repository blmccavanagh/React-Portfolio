import React from 'react';
import ProjectCard from './ProjectCard';

export default function Project() {

  const projects = [
    {
      title: 'Horiseon Social Solution Services Code Refactor',
      liveLink: 'https://blmccavanagh.github.io/Horiseon-Social-Solution-Services-Code-Refactor/',
      github: 'https://github.com/blmccavanagh/Horiseon-Social-Solution-Services-Code-Refactor',
      image: 'url'
    },
    {
      title: 'Code Quiz',
      liveLink: 'https://blmccavanagh.github.io/Code-Quiz/',
      github: 'https://github.com/blmccavanagh/Code-Quiz',
      image: 'url'
    },
    {
      title: 'Password Generator',
      liveLink: 'https://blmccavanagh.github.io/Password-Generator/',
      github: 'https://github.com/blmccavanagh/Password-Generator',
      image: 'url'
    },
    {
      title: 'Work Day Scheduler',
      liveLink: 'https://blmccavanagh.github.io/Work-Day-Scheduler/',
      github: 'https://github.com/blmccavanagh/Work-Day-Scheduler',
      image: 'url'
    },
    {
      title: 'Weather Dashboard',
      liveLink: 'https://blmccavanagh.github.io/Weather-Dashboard/',
      github: 'https://github.com/blmccavanagh/Weather-Dashboard',
      image: 'url'
    },
    {
      title: 'README Generator',
      liveLink: '',
      github: 'https://github.com/blmccavanagh/README-Generator',
      image: 'url'
    },
    {
      title: 'Note Taker',
      liveLink: 'https://serene-temple-28914.herokuapp.com',
      github: 'https://github.com/blmccavanagh/Note-Taker',
      image: 'url'
    },
    {
      title: 'Employee Tracker',
      liveLink: '',
      github: 'https://github.com/blmccavanagh/Employee-Tracker',
      image: 'url'
    },
    {
      title: 'Team Profile Generator',
      liveLink: 'https://blmccavanagh.github.io/Team-Profile-Generator/',
      github: 'https://github.com/blmccavanagh/Team-Profile-Generator',
      image: 'url'
    },
    {
      title: 'Professional Portfolio',
      liveLink: 'https://blmccavanagh.github.io/Professional-Portfolio/',
      github: 'https://github.com/blmccavanagh/Professional-Portfolio',
      image: 'url'
    },
    {
      title: 'E-Commerce Back End',
      liveLink: '',
      github: 'https://github.com/blmccavanagh/E-Commerce-Back-End',
      image: 'url'
    },
    {
      title: 'RegEx Tutorial',
      liveLink: '',
      github: 'https://github.com/blmccavanagh/Regex-Tutorial-Email-Validation',
      image: 'url'
    },
    {
      title: 'Workout Tracker',
      liveLink: 'https://sheltered-cove-91239.herokuapp.com/',
      github: 'https://github.com/blmccavanagh/Workout-Tracker',
      image: 'url'
    },
    {
      title: 'Budget Tracker',
      liveLink: '',
      github: 'https://github.com/blmccavanagh/Budget-Tracker',
      image: 'url'
    },
    {
      title: 'My Mind Matters',
      liveLink: 'https://blmccavanagh.github.io/My-Mind-Matters/',
      github: 'https://github.com/blmccavanagh/My-Mind-Matters',
      image: 'url'
    },
    {
      title: 'I Can Help',
      liveLink: 'https://i-can-help-work-market-place.herokuapp.com/',
      github: 'https://github.com/Twistedmouse/I-CAN-HELP-WorkMarketPlace',
      image: 'url'
    },
  ]


  return (
      <div>

        {projects.map((project) => {
          return <ProjectCard key={project.title} title={project.title}>
            <a href={project.liveLink}>{project.liveIcon}</a>
            <a href={project.github}></a>
          </ProjectCard>
        })}

      </div>
  );
}