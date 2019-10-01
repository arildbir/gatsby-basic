import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Listing from '../components/listing';

const IndexPage = ({ location }) => (
  <>
    <SEO title="Home" />
    <Layout location={location}>
      <Listing />
    </Layout>
  </>
);

IndexPage.propTypes = {
  location: PropTypes.object,
};

export default IndexPage;
