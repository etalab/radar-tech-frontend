import React from 'react';
import * as Survey from 'survey-react';
import './css/survey.scss';
import { GraphQLClient, gql } from 'graphql-request';

import { schema } from './utils/validators.js';

class SurveyComponent extends React.Component {
  // questions
  // https://pad.incubateur.net/WWhTqSqxTAKMQVjYZRlcoQ#
  survey = {
    title: 'Sondage type',
    description:
      'Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.',
    pages: [
      {
        name: 'page1',
        title: 'Qui sont ces informaticien·ne·s ?',
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
            type: 'rating',
            name: 'rating',
            title: 'Your overall rating',
            rateValues: [
              {
                value: 1,
                text: 'D',
              },
              {
                value: 2,
                text: 'C-',
              },
              {
                value: 3,
                text: 'C',
              },
              {
                value: 4,
                text: 'C+',
              },
              {
                value: 5,
                text: 'B-',
              },
              {
                value: 6,
                text: 'B',
              },
              {
                value: 7,
                text: 'B+',
              },
              {
                value: 8,
                text: 'A-',
              },
              {
                value: 9,
                text: 'A',
              },
              {
                value: 10,
                text: 'A+',
              },
            ],
          },
          {
            type: 'dropdown',
            name: 'demo_age',
            title: 'Dans quelle tranche d’âge vous situez vous ?',
            choices: [
              '15-19',
              '20-24',
              '25-29',
              '30-34',
              '35-39',
              '40-44',
              '45-49',
              '50-54',
              '55-59',
              '60-64',
              '65+',
            ],
          },
          {
            type: 'dropdown',
            name: 'demo_titre',
            title:
              "Quels termes décrivent le mieux votre position au sein de l'administration ?",
            choices: [
              'Ingénieur informatique',
              'Développeur informatique',
              'Développeur web',
              'Développeur front-end',
              'Développeur back-end',
              'Développeur mobile',
              'Designer',
              'Datascientist',
              'Technicien de maintenance',
              'Chef·fe de projet',
              'Chef de produit',
              'Manager',
              'Cadre',
              'DevOps',
              'SRE',
              'Administrateur',
              'Expert en sécurité informatique',
              'Consultant',
              'Scrum-master',
              'Commerciale',
              'Directeur',
            ],
          },
          {
            type: 'dropdown',
            name: 'demo_fonctions',
            title:
              'Quelles fonctions remplissez-vous dans votre administration ?',
            choices: [
              'Développement informatique',
              'Support informatique',
              'Design de service',
              'Web design',
              'Maintenance',
              'Administration réseau',
              'Administration de base de données',
              'Sécurité des réseaux',
            ],
          },
          {
            type: 'radiogroup',
            name: 'demo_administration',
            title: 'De quelle administration dépendez-vous ?',
            choices: ['Ministère', 'Branche', 'Administration'],
            colCount: 3,
          },
          {
            type: 'panel',
            innerIndent: 1,
            name: 'panel1',
            title: '',
            elements: [
              {
                type: 'radiogroup',
                name: 'demo_status',
                title: 'Sous quel statut ?',
                choices: ['CDI', 'CDD', 'Freelance', 'Autre'],
                colCount: 2,
              },
              {
                type: 'radiogroup',
                name: 'demo_rythme',
                title: 'À quel rythme ?',
                choices: ['À plein-temps', 'À mi-temps'],
                colCount: 2,
              },
              {
                type: 'radiogroup',
                name: 'travail_activite',
                title: 'Avez-vous une autre activité en parallèle ?',
                choices: ['Oui', 'Non'],
                colCount: 2,
              },
              {
                type: 'checkbox',
                name: 'travail_activite_autre',
                title: 'Précisez:',
                visibleIf: "{travail_activite}= 'Oui'",
                choices: ['Freelance', 'CDI', 'CDD'],
                hasOther: true,
              },
            ],
          },
          {
            type: 'radiogroup',
            name: 'demo_entree_admin',
            title:
              'Comment avez-vous obtenu votre poste au sein de l’administration ?',
            choices: [
              'Concours',
              'Détachement',
              'Candidature',
              "Appel d'offre",
            ],
            colCount: 2,
          },
        ],
      },
      {
        name: 'page2',
        title: 'Quelle est leur formation ?',
        elements: [
          {
            type: 'checkbox',
            name: 'demo_etudiant',
            title: 'Êtes-vous encore étudiant·e ?',
            choices: ['Oui', 'Non'],
            colCount: 2,
          },
          {
            type: 'matrixdropdown',
            name: 'education_formation',
            title: 'Quelle est votre formation ?',
            horizontalScroll: true,
            columnMinWidth: '50px',
            columns: [
              {
                name: 'selection',
                title: '',
                choices: ['Oui'],
                cellType: 'radiogroup',
              },
              {
                name: 'filieres',
                title: 'Filières à préciser',
                cellType: 'text',
              },
            ],
            rows: [
              {
                value: 'ecole_inge',
                text: 'École d’ingénieur',
              },
              {
                value: 'uni_info',
                text: 'Formation universitaire en informatique',
              },
              {
                value: 'uni_pro',
                text: 'Formation professionnelle',
              },
              {
                value: 'uni_autres',
                text: 'Formation universitaire autre',
              },
              {
                value: 'pas_uni',
                text: 'Pas de formation universitaire',
              },
            ],
            colCount: 2,
          },
          {
            type: 'radiogroup',
            name: 'demo_plus_hautes_etudes',
            title:
              'Quel est le plus haut niveau d’étude que vous ayez atteint ?',
            choices: [
              'Brevet',
              'Baccalauréat',
              'Licence',
              'Master',
              'Doctorat',
            ],
            colCount: 2,
          },
          {
            type: 'matrixdropdown',
            name: 'education_formation',
            title:
              'Avez-vous bénéficié d’autres types de formations ou d’expérience ?',
            horizontalScroll: true,
            columnMinWidth: '50px',
            columns: [
              {
                name: 'selection',
                title: '',
                choices: ['Oui'],
                cellType: 'radiogroup',
              },
              {
                name: 'autre_formation',
                title: 'Précisez',
                cellType: 'text',
              },
            ],
            rows: [
              {
                value: 'bootcamp',
                text: 'Bootcamp',
              },
              {
                value: 'formation_pro_interne',
                text: 'Formation professionnelle en interne',
              },
              {
                value: 'hackathon',
                text: 'Hackathon',
              },
              {
                value: 'mooc',
                text: 'MOOC',
              },
              {
                value: 'open_source',
                text: 'Participation au développement de projets open-source',
              },
              {
                value: 'autodidacte',
                text: 'Formation autodidacte',
              },
            ],
            colCount: 2,
          },
          {
            type: 'radiogroup',
            name: 'recherches_info',
            title:
              'Avez-vous réalisé des recherches en informatique lors de votre cursus universitaire ?',
            choices: ['Oui', 'Non'],
            colCount: 2,
          },
          {
            type: 'panel',
            innerIndent: 1,
            name: 'panel1',
            elements: [
              {
                type: 'text',
                name: 'recherches_info_texte',
                title: 'Précisez',
                visibleIf: "{recherches_info}= 'Oui'",
              },
            ],
          },
        ],
      },
      {
        name: 'page4',
        title: 'Quelle est leur rapport à la programmation ?',
        elements: [
          {
            type: 'dropdown',
            name: 'premiere_ligne_code',
            title: 'Quand avez-vous écrit votre première ligne de code ?',
            choices: [
              'Avant 10 ans',
              '10-11 ans',
              '12-13 ans',
              '14-15 ans',
              '16-17 ans',
              '18-19 ans',
              '20-21 ans',
              '22-23 ans',
              '24-25 ans',
              '26-27 ans',
              '28-29 ans',
            ],
          },
          {
            type: 'dropdown',
            name: 'experience_programmation',
            title: 'Combien d’années d’expérience avez-vous en programmation ?',
            choices: [
              '< 5 ans',
              '5-9 ans',
              '10-14 ans',
              '15-19 ans',
              '20-24 ans',
              '25-29 ans',
              '30-34 ans',
              '35-39 ans',
              '40-44 ans',
              '45-49 ans',
              '> 50 ans',
            ],
          },
          {
            type: 'dropdown',
            name: 'programmation_pro',
            title:
              'Depuis combien de temps programmez-vous professionnellement ?',
            choices: [
              '< 5 ans',
              '5-9 ans',
              '10-14 ans',
              '15-19 ans',
              '20-24 ans',
              '25-29 ans',
              '30-34 ans',
              '35-39 ans',
              '40-44 ans',
              '45-49 ans',
              '> 50 ans',
            ],
          },
        ],
      },
      {
        name: 'page4',
        title: 'Quels outils utilisent-iels ?',
        elements: [
          {
            type: 'checkbox',
            name: 'language_pas_expert',
            title:
              'Quels langages de programmation connaissez-vous (sans être expert·e) ?',
            choices: [
              'JavaScript',
              'Python',
              'C',
              'C#',
              'Common Lisp',
              'Clojure',
              'Ruby',
            ],
            colCount: 3,
          },
          {
            type: 'checkbox',
            name: 'language_expert',
            title:
              'Dans quels langages de programmation vous considérez-vous expert·e ?',
            choices: [
              'JavaScript',
              'Python',
              'C',
              'C#',
              'Common Lisp',
              'Clojure',
              'Ruby',
            ],
            colCount: 3,
          },
          {
            type: 'checkbox',
            name: 'frameworks_web',
            title: 'Quel frameworks web utilisez-vous ?',
            choices: [
              'Angular',
              'Ember',
              'React',
              'Svelte',
              'Next',
              'Vue',
              're-frame',
            ],
            colCount: 2,
          },
          {
            type: 'checkbox',
            name: 'autres_libs',
            title:
              'Quelles autres bibliothèque logicielles (librairies) utilisez-vous ?',
            choices: ['jQuery', 'lodash', 'fp-js'],
            colCount: 2,
          },
          {
            type: 'checkbox',
            name: 'connaissance_db',
            title:
              'Quels systèmes de gestion de bases de données connaissez-vous ?',
            choices: [
              'Redis',
              'PostgreSQL',
              'Elasticsearch',
              'Firebase',
              'MongoDB',
              'MariaDB',
              'Microsoft SQL Server',
              'SQLite',
              'DynamoDB',
              'MySQL',
              'Cassandra',
              'Oracle',
              'Couchbase',
            ],
            colCount: 3,
          },
          {
            type: 'checkbox',
            name: 'connaissance_db',
            title:
              'Dans quels systèmes de gestion de bases de données vous considérez-vous expert·e ?',
            choices: [
              'Redis',
              'PostgreSQL',
              'Elasticsearch',
              'Firebase',
              'MongoDB',
              'MariaDB',
              'Microsoft SQL Server',
              'SQLite',
              'DynamoDB',
              'MySQL',
              'Cassandra',
              'Oracle',
              'Couchbase',
            ],
            colCount: 3,
          },
        ],
      },
      {
        name: 'page5',
        title: "Plateformes et systèmes d'exploitation",
        elements: [
          {
            type: 'checkbox',
            name: 'plateformes_os',
            title:
              'Pour quel·le·s plateformes et systèmes d’exploitation développez-vous ?',
            choices: [
              'Docker',
              'Kubernetes',
              'Raspberry Pi',
              'AWS',
              'MacOS',
              'iOS',
              'Google Cloud Platform',
              'Microsoft Azure',
              'Slack',
              'Android',
              'Windows',
              'Arduino',
              'Heroku',
              'IBM Cloud or Watson',
              'WordPress',
            ],
            colCount: 3,
          },
          {
            type: 'radiogroup',
            name: 'containers_bool',
            title: 'Utilisez-vous des containers ?',
            choices: ['Oui', 'Non'],
            colCount: 2,
          },
          {
            type: 'checkbox',
            name: 'containers_liste',
            title: 'Précisez:',
            visibleIf: "{containers_bool}= 'Oui'",
            choices: ['Docker', 'What have you'],
            hasOther: true,
            colCount: 2,
          },
          {
            type: 'checkbox',
            name: 'os_principal',
            title: 'Quel est votre système d’exploitation principal ?',
            choices: ['Windows', 'macOS', 'GNU/Linux', 'BSD'],
            colCount: 2,
          },
          {
            type: 'checkbox',
            name: 'editeur_principal',
            title:
              'Quel est votre environnement de développement ou éditeur principal ?',
            choices: [
              'Visual Studio Code',
              'Visual Studio',
              'Notepad++',
              'IntelliJ',
              'Vim',
              'Sublime Text',
              'Android Studio',
              'Eclipse',
              'PyCharm',
              'Atom',
              'IPython / Jupyter',
              'Xcode',
              'PHPStorm',
              'NetBeans',
              'Emacs',
              'RStudio',
              'RubyMine',
              'TextMate',
              'Coda',
              'Komodo',
              'Zend',
              'Light Table',
            ],
            colCount: 3,
          },
        ],
      },
      {
        name: 'page6',
        title: 'Conditions de travail',
        elements: [
          {
            type: 'radiogroup',
            name: 'travail_bureau_domicile',
            title:
              'Travaillez-vous depuis votre domicile ou depuis un bureau ?',
            choices: ['Depuis mon domicile', 'Depuis un bureau'],
            colCount: 2,
          },
          {
            type: 'dropdown',
            name: 'taille_structure',
            title:
              'Combien de personnes travaillent dans votre structure (tout profil confondu) ?',
            choices: [
              '1 (freelance)',
              '2-9',
              '10-19',
              '20-99',
              '100-499',
              '500-999',
              '1000-4999',
              '> 5000',
            ],
            colCount: 2,
          },
          {
            type: 'dropdown',
            name: 'profils_tech',
            title:
              'Quel est le pourcentage de profils tech au sein de votre structure ?',
            choices: [
              'Je suis le/la seul·e',
              '0%-10%',
              '10%-20%',
              '20%-30%',
              '30%-40%',
              '40%-50%',
              '50%-60%',
              '60%-70%',
              '70%-80%',
              '80%-90%',
              '90%-100%',
            ],
            colCount: 2,
          },

          {
            type: 'rating',
            name: 'satisfaction',
            title: 'Êtes-vous satisfait·e de votre travail ?',
            minRateDescription: 'Pas satisfait·e',
            maxRateDescription: 'Très satisfait·e',
          },
          {
            type: 'radiogroup',
            name: 'recherche_travail',
            title: 'Êtes-vous à la recherche d’un nouvel emploi ?',
            choices: ['Oui', 'Non'],
            colCount: 2,
          },
          {
            type: 'checkbox',
            name: 'recherche_travail_secteur',
            title: 'Si oui:',
            visibleIf: "{recherche_travail}= 'Oui'",
            choices: ['Dans la fonction publique', 'Dans le privé'],
            colCount: 2,
          },
        ],
      },
      {
        name: 'page3',
        elements: [
          {
            type: 'text',
            name: 'email',
            title: 'Please enter your e-mail',
            isRequired: true,
            validators: [
              {
                type: 'email',
              },
            ],
          },
        ],
      },
    ],
    showQuestionNumbers: 'off',
  };

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

  // dans cette fonction async, on ré-initialise un client GraphQL
  // (@TODO: en parler avec Audrey)
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

    await graphQLClient
      .request(mutation, survey.data)
      .catch(error => console.log(error));
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
          /* onServerValidateQuestions={this.onServerValidateQuestions} */
          onUpdatePanelCssClasses={this.onUpdatePanelCssClasses}
          onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
        />
      </section>
    );
  }
}
export { SurveyComponent };
