// ce composant n'a pas vocation à etre rendu par React lui-meme.
// plutot, il est importé par `questionnaire.js` et rendu dans
// la propriété `completedHtml`,
// afin de modifier la page affichée au lecteur à la fin du questionnaire.
const SuccessComponent = (): string =>
  "<section> \
    <h4>Merci de votre soumission au sondage RadarTech.</h4> \
    <p>Pour des besoins de protection des données, un email de \
    confirmation vous parviendra bientôt.</p> \
    <p>Il est impératif que vous confirmiez vos réponses en \
    cliquant sur le lien se trouvant dans l'email.</p> \
</section>";

export default SuccessComponent;
