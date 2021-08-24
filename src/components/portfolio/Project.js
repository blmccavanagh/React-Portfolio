import React from 'react';
import ProjectCard from './ProjectCard';
import horiseon from '../../images/horiseon.png';
import inRetrograde from '../../images/in-retrograde.png';
import codeQuiz from '../../images/code-quiz.png';
import passwordGenerator from '../../images/password-generator.png';
import workScheduler from '../../images/work-scheduler.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import readMeGen from '../../images/read-me-gen.png';

export default function Project() {

  const projects = [
    {
      title: 'In Retrograde',
      liveLink: 'https://in-retrograde.herokuapp.com/',
      github: 'https://github.com/blmccavanagh/In-Retrograde',
      image: inRetrograde
    },
    {
      title: 'Horiseon Social Solution Services Code Refactor',
      liveLink: 'https://blmccavanagh.github.io/Horiseon-Social-Solution-Services-Code-Refactor/',
      github: 'https://github.com/blmccavanagh/Horiseon-Social-Solution-Services-Code-Refactor',
      image: horiseon
    },
    {
      title: 'Code Quiz',
      liveLink: 'https://blmccavanagh.github.io/Code-Quiz/',
      github: 'https://github.com/blmccavanagh/Code-Quiz',
      image: codeQuiz
    },
    {
      title: 'Password Generator',
      liveLink: 'https://blmccavanagh.github.io/Password-Generator/',
      github: 'https://github.com/blmccavanagh/Password-Generator',
      image: passwordGenerator
    },
    {
      title: 'Work Day Scheduler',
      liveLink: 'https://blmccavanagh.github.io/Work-Day-Scheduler/',
      github: 'https://github.com/blmccavanagh/Work-Day-Scheduler',
      image: workScheduler
    },
    {
      title: 'Weather Dashboard',
      liveLink: 'https://blmccavanagh.github.io/Weather-Dashboard/',
      github: 'https://github.com/blmccavanagh/Weather-Dashboard',
      image: weatherDashboard
    },
    {
      title: 'README Generator',
      liveLink: '',
      github: 'https://github.com/blmccavanagh/README-Generator',
      image: readMeGen
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
      <div className="grid grid-cols-3 gap-4 text-white text-center">

        {projects.map((project) => {
          return <ProjectCard key={project.title} title={project.title} liveLink={project.liveLink} github={project.github} image={project.image}>

          </ProjectCard>
        })}

      </div>
  );
}