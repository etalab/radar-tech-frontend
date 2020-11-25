import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Image from '../components/image'

const Header = ({ siteTitle }) => {
  return (
    <header className="navbar" role="navigation">
      <div className="navbar__container" style={{ width: `100%` }}>
        <Link to="/" className="navbar__home">
          <div
            style={{
              minWidth: `100px`,
              maxWidth: `270px`,
              marginRight: `20px`,
            }}
          >
            <Image name="marianne" />
          </div>
          <span className="navbar__domain">{siteTitle}</span>
        </Link>

        <nav>
          <ul className="nav__links">
            <li className="nav__item">
              <Link to="/page-2/">Page 2</Link>
            </li>
            <li className="nav__item">
              <Link to="/using-typescript/">Typescript</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
