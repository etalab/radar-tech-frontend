import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <header className="rf-header">
          <div className="rf-container">
            <div className="rf-header__body">
              <div className="rf-header__brand">
                <Link className="rf-logo" to="/" title="République française">
                  <span className="rf-logo__title">
                    République
                    <br />
                    française
                  </span>
                </Link>
              </div>
              <div className="rf-header__navbar">
                <div className="rf-service">
                  <Link
                    className="rf-service__title"
                    to="/"
                    title={data.site.siteMetadata.title}
                  >
                    {data.site.siteMetadata.title}
                  </Link>
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
                        to="/resultats/"
                        className="rf-link rf-fi-lock-line rf-link--icon-left"
                      >
                        Résultats
                      </Link>
                    </li>
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
      )}
    />
  );
}
