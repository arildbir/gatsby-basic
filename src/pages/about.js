import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const About = ({ location }) => (
  <Layout location={location}>
    <h1>Om denne bloggen</h1>
    <p>litt tekst her for å få inn noe</p>
  </Layout>
);

About.propTypes = {
  location: PropTypes.object,
};

export default About;
