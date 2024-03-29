import React from 'react';
import * as Survey from 'survey-react';
import './css/survey.scss';
import { GraphQLClient, gql } from 'graphql-request';
//import { API_URL, API_TOKEN } from 'gatsby-env-variables';

import { schema } from './utils/validators.js';

import SuccessComponent from './Success';
const completedHtml = SuccessComponent();

type SurveyProps = {
  metier: string;
  questionnaireData: {};
};

class SurveyComponent extends React.Component<SurveyProps> {
  // questions
  // https://pad.incubateur.net/WWhTqSqxTAKMQVjYZRlcoQ#
  //survey = questionnaire;
  metier = this.props.metier;
  // amazingly, ces questions qui requièrent un nombre ne
  // génèrent pas le meme type d'erreur que l'on catche avec
  // `onErrorCustomText`
  onValidateQuestion(survey, options) {
    if (options.name === 'age' || options.name === 'annees_experience') {
      if (options.value && isNaN(options.value)) {
        options.error = 'Merci de renseigner un nombre dans ce champ';
      }
    }
  }

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

  // change le texte mis en exergue lors d'une erreur
  // note: inclut une icone grace à sa classe CSS
  onErrorCustomText(survey, options) {
    switch (options.name) {
      case 'required': // question requise non remplie par utilisateur
        options.text = 'Merci de renseigner ce champ';
        break;

      default:
        break;
    }
  }

  // dans cette fonction async, on ré-initialise un client GraphQL
  // et l'on re-créée la mutation depuis le modèle dans
  // github.com/etalab/radar-tech-backend/src/app.js
  // @TODO ajouter un parametre en plus qui est le métier
  onComplete = (survey, options) => {
    const API_URL =
      process.env.GATSBY_API_URL || 'http://localhost:3001/graphql';
    const API_TOKEN = process.env.GATSBY_API_TOKEN || '';
    console.log(`Data a POSTer: `, survey.data);
    const graphQLClient = new GraphQLClient(API_URL, {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
      },
    });
    const mutation = gql`
    mutation ${this.props.metier}($answer: ${this.props.metier}Input) {
      ${this.props.metier}(answer: $answer) {
        email
      }
    }
    `;

    graphQLClient
      .request(mutation, { answer: survey.data })
      .catch(error => console.log(error));
  };

  render() {
    // importe le questionnaire directement depuis le file system
    // danger zone: mutation pas jolie pour customiser le texte
    // de succès annoncé à la fin du questionnaire
    const surveyData = this.props.questionnaireData;
    surveyData['completedHtml'] = completedHtml;

    const model = new Survey.Model(surveyData);

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
      error: { item: 'error--red', icon: 'error--icon rf-fi-alert-line' },
    };
    return (
      <section>
        <Survey.Survey
          commentPrefix={`_autres`}
          model={model}
          css={myCss}
          onComplete={this.onComplete}
          onErrorCustomText={this.onErrorCustomText}
          onValidateQuestion={this.onValidateQuestion}
          onServerValidateQuestions={this.onServerValidateQuestions}
        />
      </section>
    );
  }
}
export { SurveyComponent };
