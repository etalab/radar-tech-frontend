import React, { FC, ReactElement } from 'react';
import { Link } from 'gatsby';

type Props = {
  siteTitle: string;
};

const GouvHeader = (props: Props) => (
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
            <div className="rf-service__title" title={props.siteTitle}>
              {props.siteTitle}
            </div>
            <p className="rf-service__tagline">tagline tagline tagline</p>
          </div>
        </div>

        <div className="rf-header__tools">
          <div className="rf-shortcuts">
            <ul className="rf-shortcuts__list">
              <li className="rf-shortcuts__item">
                <Link
                  to="/page-2/"
                  className="rf-link rf-fi-lock-line rf-link--icon-left"
                >
                  Page 2
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
);

const Header = props => <GouvHeader siteTitle={props.siteTitle} />;

export default Header;
