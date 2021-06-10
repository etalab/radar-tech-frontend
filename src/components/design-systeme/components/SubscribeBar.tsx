import * as React from 'react';

const SubscribeBar = () => (
  <div className="rf-search-bar rf-search-bar--lg">
    <label className="rf-label">Label de la barre d'abonnement</label>
    <input
      className="rf-input"
      placeholder="prénom.nom@gouv.fr"
      type="search"
      name="input--lg-input"
    />
    <button
      className="rf-btn rf-btn--lg"
      title="S'abonner"
      style={{ content: 'F12C' }}
    >
      S'abonner
    </button>
  </div>
);

export default SubscribeBar;
