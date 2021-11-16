import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

interface HeaderData {
  site: {
    siteMetadata: {
      readonly title: string;
      readonly description: string;
    };
  };
}

const Header = () => {
  const data: HeaderData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    République
                    <br />
                    Française
                  </p>
                </div>
              </div>
              <div className="fr-header__service">
                <Link to="/" title={data.site.siteMetadata.title}>
                  <p className="fr-header__service-title">
                    {data.site.siteMetadata.title}
                  </p>
                </Link>
                <p className="fr-header__service-tagline">
                  {data.site.siteMetadata.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
