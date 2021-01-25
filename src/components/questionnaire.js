import SuccessComponent from '../components/Success.tsx';

const completedHtml = SuccessComponent();

const questionnaire = {
  title: '',
  description: '',
  pages: [
    {
      name: 'page1',
      title: 'Qui sont ces informaticien·ne·s ?',
      elements: [
        {
          type: 'radiogroup',
          name: 'demo_genre',
          title: 'À quel genre vous identifiez-vous ?',
          // isRequired: true,
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
          type: 'radiogroup',
          name: 'demo_status',
          title: 'Sous quel statut ?',
          choices: ['CDI', 'CDD', 'Freelance', 'Autre'],
          colCount: 4,
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
        {
          type: 'radiogroup',
          name: 'demo_entree_admin',
          title:
            'Comment avez-vous obtenu votre poste au sein de l’administration ?',
          choices: ['Concours', 'Détachement', 'Candidature', "Appel d'offre"],
          colCount: 2,
        },
      ],
    },
    {
      name: 'page2',
      title: 'Quelle est leur formation ?',
      elements: [
        {
          type: 'radiogroup',
          name: 'demo_etudiant',
          title: 'Êtes-vous encore étudiant·e ?',
          choices: ['Oui', 'Non'],
          colCount: 2,
        },
        /*{
          type: 'matrixdropdown',
          name: 'education_formation',
          title: 'Quelle est votre formation ?',
          horizontalScroll: false,
          columnMinWidth: '50px',
          columns: [
            {
              name: 'selection',
              title: '',
              choices: ['Oui'],
              cellType: 'checkbox',
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
        },*/
        {
          type: 'radiogroup',
          name: 'demo_plus_hautes_etudes',
          title: 'Quel est le plus haut niveau d’étude que vous ayez atteint ?',
          choices: ['Brevet', 'Baccalauréat', 'Licence', 'Master', 'Doctorat'],
          colCount: 2,
        },
        /*{
          type: 'matrixdropdown',
          name: 'education_formation_autres',
          title:
            'Avez-vous bénéficié d’autres types de formations ou d’expérience ?',
          horizontalScroll: false,
          columnMinWidth: '50px',
          columns: [
            {
              name: 'selection',
              title: '',
              choices: ['Oui'],
              cellType: 'checkbox',
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
        },*/
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
      title: 'Quel est leur rapport à la programmation ?',
      elements: [
        {
          type: 'text',
          name: 'premiere_ligne_code',
          title: 'Quand avez-vous écrit votre première ligne de code ?',
          description: 'par example: "20" pour 20 ans',
          validators: [{ type: 'numeric' }],
          placeHolder: ' 20',
          maxWidth: '50',
          inputType: 'number',
        },
        {
          type: 'text',
          name: 'experience_programmation',
          title: 'Combien d’années d’expérience avez-vous en programmation ?',
          description: 'par example: "5" pour 5 ans',
          validators: [{ type: 'numeric' }],
          placeHolder: ' 50',
          maxWidth: '50',
          inputType: 'number',
        },
        {
          type: 'text',
          name: 'programmation_pro',
          title:
            'Depuis combien de temps programmez-vous professionnellement ?',
          description: 'par example: "5" pour 5 ans',
          validators: [{ type: 'numeric' }],
          placeHolder: ' 50',
          maxWidth: '50',
          inputType: 'number',
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
          name: 'connaissance_db_expert',
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
        /*{
          type: 'panel',
          name: 'panel2',
          innerIndent: 1,
          elements: [
            {
              type: 'checkbox',
              name: 'containers_liste',
              title: 'Précisez:',
              visibleIf: "{containers_bool}= 'Oui'",
              choices: ['Docker', 'What have you'],
              hasOther: true,
              colCount: 2,
            },
          ],
        },*/

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
          title: 'Travaillez-vous depuis votre domicile ou depuis un bureau ?',
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
          type: 'rating',
          name: 'profils_tech',
          id: 'test',
          title:
            'Quel est le pourcentage de profils tech au sein de votre structure ?',
          rateValues: [
            { value: 0, text: 'Seul·e' },
            { value: 20, text: '10-20%' },
            { value: 40, text: '20-40%' },
            { value: 60, text: '40-60%' },
            { value: 80, text: '60-80%' },
            { value: 100, text: '80-100%' },
          ],
          colCount: 2,
        },
        {
          type: 'rating',
          name: 'satisfaction',
          title: 'Êtes-vous satisfait·e de votre travail ?',
          description: '1: Pas satisfait·e      5: Très satisfait·e',
        },
        {
          type: 'radiogroup',
          name: 'recherche_travail',
          title: 'Êtes-vous à la recherche d’un nouvel emploi ?',
          choices: ['Oui', 'Non'],
          colCount: 2,
        },
        {
          type: 'radiogroup',
          name: 'recherche_travail_secteur',
          title: 'Si oui:',
          visibleIf: "{recherche_travail}= 'Oui'",
          choices: ['Dans la fonction publique', 'Dans le privé'],
          colCount: 2,
        },
      ],
    },
    {
      name: 'page7',
      elements: [
        {
          type: 'text',
          name: 'email',
          title: 'Votre adresse email',
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
  completedHtml: completedHtml,
};

export default questionnaire;
