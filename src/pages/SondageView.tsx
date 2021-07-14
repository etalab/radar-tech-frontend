import * as React from 'react';
import Layout from '../components/layout';
import { SurveyComponent } from '../components/Survey';
import { graphql, Link } from 'gatsby';

import type { Metier } from '../components/utils/types';

// cette View est utilisée par chaque page métier
// c'est probablement par ici que l'on retombera sur nos pattes
// en termes de rendre le questionnaire lui-même
const SondageView = ({ metier, troncCommun }: { metier: Metier }) => {
  const questionsCommunesEtMetiers = [
    ...troncCommun.nodes[0].pages,
    ...metier.questionnaire.pages,
  ];
  let questionnaireData = metier;
  questionnaireData.pages = questionsCommunesEtMetiers;
  return (
    <Layout>
      <div className="wrapper">
        <header>
          <Link to="/">Go back to "Home"</Link>
        </header>

        {metier && (
          <main>
            <h1>{metier.metier_str}</h1>
            <p>{metier.description}</p>

            {metier.questionnaire ? (
              <SurveyComponent
                metier={metier.metier}
                questionnaireData={questionnaireData}
              />
            ) : (
              <p style={{ color: `orange` }}>Pas de questionnaire...</p>
            )}
          </main>
        )}
      </div>
    </Layout>
  );
};

export default SondageView;
