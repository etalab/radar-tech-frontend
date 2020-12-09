import React from 'react';
import * as Survey from 'survey-react';

import { schema } from './utils/validators.js';

class SurveyComponent extends React.Component {
  survey = {
    title: 'Sondage type',
    description:
      'Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.',
    pages: [
      {
        name: 'page1',
        elements: [
          {
            type: 'radiogroup',
            name: 'demo_genre',
            title: 'À quel genre vous identifiez-vous ?',
            isRequired: true,
            choices: [
              'Homme',
              'Femme',
              'Non-binaire, genderqueer, ou gender non-conforming',
            ],
          },
          {
            type: 'dropdown',
            name: 'demo_age',
            title: 'Dans quelle tranche d’âge vous situez vous ?',
            choices: [
              '15-19 ans',
              '20-24 ans',
              '25-29 ans',
              '30-34 ans',
              '35-39 ans',
              '40-44 ans',
              '45-49 ans',
              '50-54 ans',
              '55-59 ans',
              '60-64 ans',
              '65 ans et plus',
            ],
          },
          {
            type: 'radiogroup',
            name: 'travail_activite',
            title: 'Avez-vous une autre activité en parallèle ?',
            choices: ['Oui', 'Non'],
          },
          {
            type: 'checkbox',
            name: 'travail_activite_autre',
            title: 'Precisez:',
            visibleIf: "{travail_activite}= 'Oui'",
            choices: ['Freelance', 'CDI', 'CDD'],
            hasOther: true,
          },
          {
            type: 'matrixdropdown',
            name: 'education_formation',
            title: 'Quelle est votre formation ?',
            horizontalScroll: true,
            columnMinWidth: '50px',
            columns: [
              {
                name: 'using',
                title: 'Do you use it?',
                choices: ['Yes', 'No'],
                cellType: 'radiogroup',
              },
              {
                name: 'knowledge',
                title: 'Please describe your experience',
                cellType: 'text',
              },
            ],
            rows: [
              {
                value: 'ecole_inge',
                text: "Ecole d'ingenieur",
              },
              {
                value: 'uni_info',
                text: 'Formation universitaire en informatique',
              },
              {
                value: 'uni_pro',
                text: 'Formation pro',
              },
            ],
          },
          // {
          //   type: 'text',
          //   name: 'email',
          //   title: 'Please enter your e-mail',
          //   isRequired: true,
          //   validators: [
          //     {
          //       type: 'email',
          //     },
          //   ],
          // },
        ],
      },
    ],
    showQuestionNumbers: 'off',
  };

  // componentWillMount() {
  //   Survey.StylesManager.applyTheme('bootstrap')
  // }

  // cette fonction est appellée à la fin du questionnaire,
  // mais avant que les résultats composés par le lecteur valident.
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

  onComplete(survey, options) {
    console.log(survey.data);
  }

  onUpdatePanelCssClasses = (survey, options) => {
    options.cssClasses.panel.container =
      options.cssClasses.panel.container + ' blue-border';
  };

  onUpdateQuestionCssClasses = (survey, options) => {
    options.cssClasses.header =
      options.cssClasses.titleLeftRoot + ' mono rf-text--lead';
    options.cssClasses.title = options.cssClasses.title + ' rf-text';
  };

  render() {
    const model = new Survey.Model(this.survey);

    return (
      <section>
        <Survey.Survey
          model={model}
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
