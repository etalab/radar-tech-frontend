import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section style={{margin: `5rem 0` }}>
      <h1>Erreur 404: Page non trouvée</h1>
      <p>La page que vous cherchez ne peut être trouvée.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </section>
  </Layout>
);

export default NotFoundPage;
