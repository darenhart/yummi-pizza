import React from 'react';
import * as Style from './style';

const About = () => {
  return (
    <Style.About>
      <p>by Daniel Werle Arenhart </p>
      <p>
        GitHub front-end:{' '}
        <a href="https://github.com/darenhart/yummi-pizza">
          github.com/darenhart/yummi-pizza
        </a>
      </p>
      <p>
        GitHub back-end:{' '}
        <a href="https://github.com/darenhart/yummi-pizza-api">
          github.com/darenhart/yummi-pizza-api
        </a>
      </p>
    </Style.About>
  );
};

export default About;
