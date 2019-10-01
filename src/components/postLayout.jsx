import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from './layout';

const PostLayout = ({ data, location }) => (
  <Layout location={location}>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: data.markdownRemark.html,
      }}
    />
  </Layout>
);

PostLayout.propTypes = {
  location: PropTypes.object,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.objectOf(PropTypes.string),
      html: PropTypes.string,
    }),
  }),
};

export default PostLayout;
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
