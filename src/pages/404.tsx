import React from "react";
import { Link } from "gatsby";
import "./css/404.scss";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="404">
      <h1>Erreur 404: Page non trouvée</h1>
      <p>La page que vous cherchez ne peut être trouvée.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </section>
  </Layout>
);

export default NotFoundPage;
