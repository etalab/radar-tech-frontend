# radar-tech: frontend

## Objectif
Nous proposons de consolider un questionnaire et de le soumettre aux milliers d'agents concernés via un site web dédié, puis de produire une page avec les des résultats obtenus. La DINUM ne souhaite par recourir à des outils de sondage classique car elle vise uneaccessibilité maximale et une expérience utilisateur propre à ce site, tant pour les questionsque pour la présentation des résultats.

[Voir dépôt du projet à @etalab/radar-tech](https://github.com/etalab/radar-tech).

Le présent projet est le **frontend** de l'application. Le backend, se [trouve dans cet autre dépôt](https://github.com/etalab/radar-tech-backend).


## Installation et développement

```
$ git clone git@github.com:etalab/radar-tech-frontend.git
$ npm install
$ gatsby develop
```

Rendez-vous à [https://localhost:8000](https://localhost:8000) pour visualiser le frontend.

Un client GraphQL est disponible à [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

---

## Guides

#### Lien avec le backend
Le lien avec le backend est assuré à deux endroits:
- [**`gatsby-config.js`**](https://github.com/etalab/radar-tech-frontend/blob/master/gatsby-config.js#L44) liste l'endpoint utilisé par les visualisations (la consommation des résultas, en quelque sorte) ;
- [**`src/components/Survey.js`**](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/Survey.js#L67) liste l'endpoint requis pour poster les résultats collectés.

#### Logique interne du questionnaire

- Questions, ordre, pages: [`src/components/questionnaire.js`](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/questionnaire.js)
- Logique, style, validation: [`src/components/Survey.js`](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/Survey.js)

Il est possible de jouer avec les options des questions dans une GUI sur [le site de SurveyJS](https://surveyjs.io/create-survey).

---

## Déploiement avec Dokku

tktktk

### Mécanismes internes à GatsbyJS

[Voir manuel officiel](https://github.com/etalab/radar-tech-frontend/blob/master/gatsby-README.md).