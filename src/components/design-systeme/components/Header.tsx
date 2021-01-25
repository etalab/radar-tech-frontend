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
    <header className="rf-header">
      <div className="rf-container">
        <div className="rf-header__body">
          <Link to="/" className="rf-link">
            <div className="rf-header__brand">
              <div className="rf-logo" title="République française">
                <span className="rf-logo__title">
                  République
                  <br />
                  française
                </span>
              </div>
            </div>
            <div className="rf-header__navbar">
              <div className="rf-service">
                <div
                  className="rf-service__title"
                  title={data.site.siteMetadata.title}
                >
                  {data.site.siteMetadata.title}
                </div>
                <p className="rf-service__tagline">
                  {data.site.siteMetadata.description}
                </p>
              </div>
            </div>
          </Link>

          <div className="rf-header__tools">
            <div className="rf-shortcuts">
              <ul className="rf-shortcuts__list">
                <li className="rf-shortcuts__item">
                  <Link to="/" className="rf-link">
                    Sondage
                  </Link>
                </li>
                <li className="rf-shortcuts__item">
                  <Link to="/resultats/" className="rf-link">
                    Résultats
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
