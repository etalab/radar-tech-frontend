import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import header from '@gouvfr/header'

const GouvHeader = ({ siteTitle }) => (
  <header className="rf-header">
    <div className="rf-container">
      <div className="rf-header__body">
        <div className="rf-header__brand">
          <a className="rf-logo" href="#" title="République française">
            <span className="rf-logo__title">
              République
              <br />
              française
            </span>
          </a>
        </div>
        <div className="rf-header__navbar">
          <div className="rf-service">
            <a className="rf-service__title" href="#" title={siteTitle}>
              {siteTitle}
            </a>
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
)

export default GouvHeader
