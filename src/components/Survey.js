import React from 'react';
import * as Survey from 'survey-react';
import './css/survey.scss';
import { GraphQLClient, gql } from 'graphql-request';

import { schema } from './utils/validators.js';
import questionnaire from './questionnaire.js';

class SurveyComponent extends React.Component {
  // questions
  // https://pad.incubateur.net/WWhTqSqxTAKMQVjYZRlcoQ#
  survey = questionnaire;

  // cette fonction est appellée à la fin du questionnaire,
  // mais avant que les résultatscomposés par le lecteur valident.
  // pour éviter de changer la structure du questionnaire-test,
  // nous contraignons ce dernier à un schéma.
  // voir src/components/validators.js
  onServerValidateQuestions(survey, options) {
    schema
      .validate(options.data, { strict: true, stripUnknown: true })
      .catch(err => console.log(err))
      .then(valid => {
        if (!valid) {
          alert(
            "Le formulaire ne valide pas. A-t'il dévié de la DB? Voir devtools"
          );
        } else options.complete();
      });
  }

  // dans cette fonction async, on ré-initialise un client GraphQL
  // et l'on re-créée la mutation depuis le modèle dans
  // github.com/etalab/radar-tech-backend/src/app.js
  async onComplete(survey, options) {
    console.log(`Data a POSTer: `, survey.data);

    const endpoint = 'http://fast-snow-hulu.app.etalab.studio/graphql';
    const graphQLClient = new GraphQLClient(endpoint, {});
    const mutation = gql`
      mutation CreateAnswer(
        $email: String!
        $demo_age: String
        $demo_genre: String
        $education_formation: String
      ) {
        createAnswer(
          email: $email
          demo_age: $demo_age
          demo_genre: $demo_genre
          education_formation: $education_formation
        ) {
          email
          demo_age
          demo_genre
        }
      }
    `;

    // await graphQLClient
    //   .request(mutation, survey.data)
    //   .catch(error => console.log(error));
  }

  render() {
    const model = new Survey.Model(this.survey);

    // classes CSS à éplucher ici:
    // https://surveyjs.io/Examples/Library/?id=survey-customcss&platform=Reactjs#content-docs
    const myCss = {
      header: 'panel-heading card-header mono rf-text--lead',
      title: 'rf-text',
      rating: {
        root: 'custom-rating',
      },
      checkbox: { column: 'no-max-width' },
      radiogroup: {
        itemInline: 'radio rf-radio-group',
        column: 'no-max-width',
      },
      navigationButton: 'btn rf-btn btn-primary',
    };
    return (
      <section>
        <Survey.Survey
          model={model}
          css={myCss}
          onComplete={this.onComplete}
          onServerValidateQuestions={this.onServerValidateQuestions}
          onUpdatePanelCssClasses={this.onUpdatePanelCssClasses}
          onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
        />
      </section>
    );
  }
}
export { SurveyComponent };
