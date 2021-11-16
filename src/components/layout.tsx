import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './design-systeme/components/Header';
import Footer from './design-systeme/components/Footer';

// inclut le design systeme de l'Etat
// https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476
// import './design-systeme/css/all.min.css';
import '@gouvfr/dsfr/dist/css/dsfr.min.css';
import './css/layout.css';

interface LayoutProps {
  children: {};
  noFurniture?: boolean;
}

const Layout = ({ children, noFurniture }: LayoutProps) => {
  return (
    <>
      {!noFurniture && <Header />}
      <div
        style={{
          margin: `0 auto`,
          marginTop: `50px`,
          maxWidth: 960,
        }}
      >
        <main style={{ padding: `0 2rem` }}>{children}</main>
      </div>
      {!noFurniture && <Footer />}
    </>
  );
};

export default Layout;
