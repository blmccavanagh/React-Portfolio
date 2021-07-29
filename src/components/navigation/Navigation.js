import { link } from 'fs';
import React from 'react';
import navigation from './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {


  const location = useLocation();

  const links = [
    {
      name: " Home ",
      uri: '/'
    },
    {
      name: " About ",
      uri: '/about'
    },
    {
      name: " Contact ",
      uri: "/contact"
    },
    {
      name: " Portfolio ",
      uri: "/portfolio"
    },
    {
      name: " Resume ",
      uri: "/resume"
    },
  ]

  function render(){


    return links.map((link) => {

      // omit link if we are on the same page

      if(location.pathname === link.uri){
        return null;
      }
      
      

      return <Link key={link.name} to={link.uri}>{link.name}</Link>
    })


    // conditionally render the nav bar link, exclude the current page



  }

  return (
    <div className="text-white justify-end">
      {render()}
    </div>
      


  );
}