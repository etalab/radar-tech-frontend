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

          <div className="rf-header__tools">
            <div className="rf-shortcuts">
              <ul className="rf-shortcuts__list">
                <li className="rf-shortcuts__item">
                  <Link
                    to="/using-typescript/"
                    className="rf-link rf-fi-lock-line rf-link--icon-left"
                  >
                    Typescript
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
