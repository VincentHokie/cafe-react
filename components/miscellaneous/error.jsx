import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import PropTypes from 'prop-types';


const ErrorPage = ({ errorStatus, errorMessage, userMessage }) => (
  <div>
    <Section>
      <Hero size="fullheight">
        <Hero.Body>
          <Container>
            <Heading>{ errorStatus }</Heading>
            <Heading subtitle size={3}>
              { errorMessage }
            </Heading>
            <Heading subtitle size={5}>
              { userMessage }
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    </Section>
  </div>
);

ErrorPage.propTypes = {
  errorStatus: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
  userMessage: PropTypes.string.isRequired,
};

export default ErrorPage;
