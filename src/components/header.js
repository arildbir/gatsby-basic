import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import gatsbyLogo from '../images/gatsby-icon.png';

const HeaderWrapper = styled.div`
  background: #524763;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  img {
    margin: 0;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: '100px',
            }}
            src={gatsbyLogo}
            alt="Gatsby logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
