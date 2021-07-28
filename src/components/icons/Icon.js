import React from 'react';

export default function Icon(props) {

    const icons = [
        {
            image: '../../images/icons/instagram.PNG',
            link: ''
        }
    ]

    return (
        <div>
  
          {icons.map((icon) => {
            return 
            <div>
              <a href={ icons.link }>
                <img src={ icons.image }/>
              </a>
            </div>
          })}

            <img src={ props } />

        </div>
    )
}