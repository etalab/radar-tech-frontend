# radar-tech: frontend

## Objectif

Nous proposons de consolider un questionnaire et de le soumettre aux milliers d'agents concernés via un site web dédié, puis de produire une page avec les des résultats obtenus. La DINUM ne souhaite par recourir à des outils de sondage classique car elle vise uneaccessibilité maximale et une expérience utilisateur propre à ce site, tant pour les questionsque pour la présentation des résultats.

[Voir dépôt du projet à @etalab/radar-tech](https://github.com/etalab/radar-tech).

Le présent projet est le **frontend** de l'application. Le backend, se [trouve dans cet autre dépôt](https://github.com/etalab/radar-tech-backend).

## Présentation des résultats

La seconde phase de ce projet est la dissémination des résultats collectés. Une collection de composants réutilisables est en cours de développement et [disponible sous forme de Storybook](https://etalab.github.io/radar-tech-frontend/?path=/story/example-page).

## Installation et développement

```
$ git clone git@github.com:etalab/radar-tech-frontend.git
$ npm install
```

Deux variables d'environnement sont nécéssaires, dont un token s'obtenant [coté backend](https://github.com/etalab/radar-tech-backend/blob/master/HOW_TO_DEPLOY.md#creer-un-token). Renommez `.env_example` en `.env.development`, puis renseignez:

```
GATSBY_API_URL=http://radartech-api.app.etalab.studio/graphql
GATSBY_API_TOKEN=<>
```

Enfin, `$ gatbsy develop` démarre le kit de dev.

Rendez-vous à [https://localhost:8000](https://localhost:8000) pour visualiser le frontend.

Un client GraphQL est disponible à [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql).

---

## Guides

#### Lien avec le backend

Le lien avec le backend est assuré à deux endroits:

- [**`gatsby-config.js`**](https://github.com/etalab/radar-tech-frontend/blob/master/gatsby-config.js#L44) liste l'endpoint utilisé par les visualisations (la consommation des résultas, en quelque sorte) ;
- [**`src/components/Survey.js`**](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/Survey.js#L67) liste l'endpoint requis pour poster les résultats collectés.

#### Logique interne du questionnaire

Ce projet suit cette logique:

1. Une [liste de métiers](https://github.com/etalab/radar-tech-frontend/blob/master/page-metiers/pages-metiers.json) est définie et accompagnée de questions spécifiques. Cette définition prend la forme d'une Array d'Objects (`[{ ...métier }, { ...métier }]`)
2. Une [page d'accueil](https://github.com/etalab/radar-tech-frontend/blob/master/src/pages/index.tsx) présente les questionnaires métiers disponibles sous forme de liens
3. Pour chaque métier, une page et une route sont construites par Gatsby quand le projet est "buildé":
   1. Un "higher order component" par métier est généré par Gatsby un peu magiquement [selon ce modèle](https://github.com/etalab/radar-tech-frontend/blob/master/src/pages/metiers/{PageMetier.metier}.tsx)
   2. Une View est instanciée et passe la balle à [`src/components/Survey.js`](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/Survey.js), qui contient la logique propre à SurveyJS

- Validation: [`src/components/utils/validators.js`](https://github.com/etalab/radar-tech-frontend/blob/master/src/components/utils/validators.js) (**Crucial de bien matcher les types retournés par le questionnaire**)

Il est possible de jouer avec les options des questions dans une GUI sur [le site de SurveyJS](https://surveyjs.io/create-survey).

---

## Déploiement avec Dokku

1. Dans le dossier du projet, ajouter les variables d'environnement suivantes :

```
$ export DOKKU_HOST='studio-01.infra.data.gouv.fr'
$ export DOKKU_PORT='22'
$ export DOKKU_GIT_REMOTE='dokku'
```

2. Vérifier les variables

```
$ env | grep DOKKU
```

3. Créer une application
   Cette étape n'est nécessaire que si l'application n'existe pas déjà

```
$ dokku apps:create <nom_app>
```

4. Ajouter le remote

Cette étape est nécessaire que si une application existante est utilisée  
Sinon, le remote est automatiquement ajouté par Dokku

```
$ git remote add dokku dokku@studio-01.infra.data.gouv.fr:<nom_app>
$ git remote -v // pour vérifier
```

5. Pousser la branche locale sur le dépôt distant

```
$ git push dokku <nom_branche>:master
$ git push dokku master // équivaut à $ git push dokku master:master
```

6. Vérifier que l'application est déployée

A la fin de la trace de la commande précédente l'URL de l'application est affichée

Exemple : http://<nom_app>.app.etalab.studio

### Mécanismes internes à GatsbyJS

[Voir manuel officiel](https://github.com/etalab/radar-tech-frontend/blob/master/gatsby-README.md).
