import * as yup from 'yup';

// le format du questionnaire-test n'a pas vocation à être modifié trop
// facilement. nous le contraignons donc au respect de ce schéma yup
const schema = yup
  .object()
  .shape({
    genre: yup.string(),
    age: yup.string(),
    sit_professionnelle: yup.array().of(yup.string()),
    affiliation: yup.array().of(yup.string()),
    affiliation_autres: yup.string(),
    annees_experience: yup.string(),
    annees_experience_detail: yup.string(),
    email: yup.string(),
    // data scientists ci-dessous
    formation: yup.array().of(yup.string()),
    dernier_diplome: yup.string(),
    ecole_pertinente: yup.string(),
    technologies_principales: yup.array().of(yup.string()),
    methodes_et_algos: yup.array().of(yup.string()),
    methodes_et_algos_autres: yup.string(),
    autres_competences: yup.array().of(yup.string()),
    frameworks: yup.array().of(yup.string()),
    frameworks_autres: yup.string(),
    publient_codes_sources: yup.string(),
    competences_perception: yup.string(),
    competences_exploitation: yup.string(),
    // designers ci-dessous
    expertise: yup.array().of(yup.string()),
    intitule_fonction: yup.string(),
    competences_utiles: yup.array().of(yup.string()),
    competences_quotidiennes: yup.array().of(yup.string()),
    outils_utilises: yup.array().of(yup.string()),
    modes_de_travail: yup.string(),
    travail_en_equipe: yup.string(),
    besoins: yup.string(),
    travail_satisfaction: yup.string(),
    travail_satisfaction_text: yup.string(),
    recherche_emploi: yup.string(),
    recherche_emploi_text: yup.string(),
    besoin_nouvelles_competences: yup.string(),
    besoin_nouvelles_competences_text: yup.string(),
  })
  .noUnknown();

export { schema };
