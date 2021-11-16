import * as React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer
      className="fr-footer"
      role="contentinfo"
      id="footer"
      style={{ marginTop: `1rem` }}
    >
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand">
            <div className="fr-logo" title="république française">
              <span className="fr-logo__title">
                république
                <br />
                française
              </span>
            </div>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="fr-footer__content-list">
              <li>
                <Link
                  className="fr-footer__content-link"
                  to="https://legifrance.gouv.fr"
                >
                  legifrance.gouv.fr
                </Link>
              </li>
              <li>
                <Link
                  className="fr-footer__content-link"
                  to="https://gouvernement.fr"
                >
                  gouvernement.fr
                </Link>
              </li>
              <li>
                <Link
                  className="fr-footer__content-link"
                  to="https://service-public.fr"
                >
                  service-public.fr
                </Link>
              </li>
              <li>
                <Link
                  className="fr-footer__content-link"
                  to="https://data.gouv.fr"
                >
                  data.gouv.fr
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list fr-pb-0">
            <li className="fr-footer__bottom-item">
              <Link className="fr-footer__bottom-link" to="sitemap.xml">
                Plan du site
              </Link>
            </li>
            <li className="fr-footer__bottom-item">
              <span className="fr-footer__bottom-link">
                Accessibilité: non/partiellement/totalement conforme
              </span>
            </li>
            {/* <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="#">
                Mentions légales
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="#">
                Données personnelles
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="#">
                Gestion des cookies
              </a>
            </li> */}
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention contraire, tous les textes de ce site sont sous{' '}
              <a
                href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                target="_blank"
              >
                licence etalab-2.0
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
