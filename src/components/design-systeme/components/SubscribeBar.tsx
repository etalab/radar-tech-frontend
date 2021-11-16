import * as React from 'react';

const SubscribeBar = () => (
  <div className="fr-search-bar fr-search-bar--lg">
    <label className="fr-label">Label de la barre d'abonnement</label>
    <input
      className="fr-input"
      placeholder="prénom.nom@gouv.fr"
      type="search"
      name="input--lg-input"
    />
    <button
      className="fr-btn fr-btn--lg"
      title="S'abonner"
      style={{ content: 'F12C' }}
    >
      S'abonner
    </button>
  </div>
);

export default SubscribeBar;
