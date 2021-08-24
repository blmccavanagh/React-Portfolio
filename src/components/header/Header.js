import React from 'react';
import Navigation from '../navigation/Navigation';
import header from './Header.css';

export default function Header() {
  return (
    <div className="flex">
      <h1 className="handwriting headerText">Just call me <span class="text-pink-300">B.</span></h1>

      <Navigation />


    </div>
  );
}