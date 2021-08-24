import React from 'react';
import ProjectCard from './ProjectCard';
import inRetrograde from '../../images/in-retrograde.png';
import iCanHelp from '../../images/i-can-help.png';
import myMindMatters from '../../images/my-mind-matters.png';
import weatherDashboard from '../../images/weather-dashboard.png';
import workScheduler from '../../images/work-scheduler.png';
import passwordGenerator from '../../images/password-generator.png';
import teamProfileGen from '../../images/team-profile-gen.png';
import codeQuiz from '../../images/code-quiz.png';
import noteTaker from '../../images/note-taker.png';
import horiseon from '../../images/horiseon.png';
import portfolio from '../../images/portfolio.png';
import regex from '../../images/regex.png';
import fitnessTracker from '../../images/fitness-tracker.png';
import budgetTracker from '../../images/budget-tracker.png';
import readMeGen from '../../images/read-me-gen.png';
import employeeTracker from '../../images/employee-tracker.png';
import eCommerce from '../../images/e-commerce.png';

export default function Project() {

  const projects = [
    {
      title: 'In Retrograde',
      liveLink: 'https://in-retrograde.herokuapp.com/',
      github: 'https://github.com/blmccavanagh/In-Retrograde',
      image: inRetrograde
    },
    {
      title: 'I Can Help',
      liveLink: 'https://i-can-help-work-market-place.herokuapp.com/',
      github: 'https://github.com/Twistedmouse/I-CAN-HELP-WorkMarketPlace',
      image: iCanHelp
    },
    {
      title: 'My Mind Matters',
      liveLink: 'https://blmccavanagh.github.io/My-Mind-Matters/',
      github: 'https://github.com/blmccavanagh/My-Mind-Matters',
      image: myMindMatters
    },
    {
      title: 'Weather Dashboard',
      liveLink: 'https://blmccavanagh.github.io/Weather-Dashboard/',
      github: 'https://github.com/blmccavanagh/Weather-Dashboard',
      image: weatherDashboard
    },
    {
      title: 'Work Day Scheduler',
      liveLink: 'https://blmccavanagh.github.io/Work-Day-Scheduler/',
      github: 'https://github.com/blmccavanagh/Work-Day-Scheduler',
      image: workScheduler
    },
    {
      title: 'Password Generator',
      liveLink: 'https://blmccavanagh.github.io/Password-Generator/',
      github: 'https://github.com/blmccavanagh/Password-Generator',
      image: passwordGenerator
    },
    {
      title: 'Team Profile Generator',
      liveLink: 'https://blmccavanagh.github.io/Team-Profile-Generator/',
      github: 'https://github.com/blmccavanagh/Team-Profile-Generator',
      image: teamProfileGen
    },
    {
      title: 'Code Quiz',
      liveLink: 'https://blmccavanagh.github.io/Code-Quiz/',
      github: 'https://github.com/blmccavanagh/Code-Quiz',
      image: codeQuiz
    },
    {
      title: 'Note Taker',
      liveLink: 'https://serene-temple-28914.herokuapp.com',
      github: 'https://github.com/blmccavanagh/Note-Taker',
      image: noteTaker
    },
    {
      title: 'Horiseon Social Solution Services Code Refactor',
      liveLink: 'https://blmccavanagh.github.io/Horiseon-Social-Solution-Services-Code-Refactor/',
      github: 'https://github.com/blmccavanagh/Horiseon-Social-Solution-Services-Code-Refactor',
      image: horiseon
    },
    {
      title: 'Professional Portfolio',
      liveLink: 'https://blmccavanagh.github.io/Professional-Portfolio/',
      github: 'https://github.com/blmccavanagh/Professional-Portfolio',
      image: portfolio
    },
    {
      title: 'RegEx Tutorial',
      liveLink: 'https://github.com/blmccavanagh/Regex-Tutorial-Email-Validation',
      github: 'https://github.com/blmccavanagh/Regex-Tutorial-Email-Validation',
      image: regex
    },
    {
      title: 'Workout Tracker',
      liveLink: 'https://sheltered-cove-91239.herokuapp.com/',
      github: 'https://github.com/blmccavanagh/Workout-Tracker',
      image: fitnessTracker
    },
    {
      title: 'Budget Tracker',
      liveLink: 'https://shrouded-atoll-03478.herokuapp.com/',
      github: 'https://github.com/blmccavanagh/Budget-Tracker',
      image: budgetTracker
    },
    {
      title: 'README Generator',
      liveLink: 'https://github.com/blmccavanagh/README-Generator',
      github: 'https://github.com/blmccavanagh/README-Generator',
      image: readMeGen
    },
    {
      title: 'Employee Tracker',
      liveLink: 'https://github.com/blmccavanagh/Employee-Tracker',
      github: 'https://github.com/blmccavanagh/Employee-Tracker',
      image: employeeTracker
    },
    {
      title: 'E-Commerce Back End',
      liveLink: 'https://github.com/blmccavanagh/E-Commerce-Back-End',
      github: 'https://github.com/blmccavanagh/E-Commerce-Back-End',
      image: eCommerce
    },
  ]


  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white text-center">

        {projects.map((project) => {
          return <ProjectCard key={project.title} title={project.title} liveLink={project.liveLink} github={project.github} image={project.image}>

          </ProjectCard>
        })}

      </div>
  );
}