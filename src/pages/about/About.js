import React from 'react';
import about from './About.css';

export default function About() {
  return (
      <div class="about">
        <h1>My name is <span class="handwriting">Bridget Louise McCavanagh</span>. . .</h1>
            <h2>. . . but call me <span class="handwriting underline">B.</span></h2>

            <div>
                <p>I do many things.</p>
                <p>I have been running my own Personal Training business for over 5 years, specialising in Exercise
                    for Mental Health Management.</p>
                <p>I am currently studying at the University of Western Australia, undertaking their full stack
                    coding bootcamp. In the UK I studied across multiple disciplines at University of the Arts
                    London, the University of Glasgow and UCLan.</p>
                <p>I like when things are right, don't we all? But the ability to not only identify, but to face and
                    solve the
                    problems we encounter, is how we continue to learn and succeed.</p>
                <p>I challenge the negative connotations that far too often come hand in hand with being a self
                    proclaimed perfectionist. I am zealously hardworking, permanently curious and aspire, above
                    anything else, to achieve exponential growth in all facets of my life as it evolves. Though I
                    may strive for perfection, I will always appreciate the value of the mistakes we make. Mistakes
                    keep us learning. They keep us nimble and creative and keep us focussed on expansion, not
                    stagnation.</p>
                <p>Enough talk, the work below can say the rest.</p>
                <p>If you are interested in working with me, contact me <a href="/contact"
                        class="handwriting underline">here.</a></p>
            </div>
      </div>
  );
}