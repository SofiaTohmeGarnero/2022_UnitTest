import React from 'react';
import { ErrorContainer } from './NotFound.style';
import Error404 from '../../assets/img/web-error-404-gato-feliz.jpg';

const NoFound = () => {
  return (
    <ErrorContainer>
      <img src={Error404} alt="error page not found" />
    </ErrorContainer>
  );
}

export default NoFound; 