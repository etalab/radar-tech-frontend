import * as yup from 'yup';

// le format du questionnaire-test n'a pas vocation à être modifié trop
// facilement. nous le contraignons donc au respect de ce schéma yup
const schema = yup
  .object()
  .shape({
    autres_libs: yup.array().of(yup.string()),
    connaissance_db: yup.array().of(yup.string()),
    connaissance_db_expert: yup.array().of(yup.string()),
    containers_bool: yup.string(),
    // containers_liste: yup.string(),
    // 'containers_list-Comment': yup.string(),
    demo_administration: yup.string(),
    demo_age: yup.string(),
    demo_entree_admin: yup.string(),
    demo_etudiant: yup.string(),
    demo_fonctions: yup.string(),
    demo_plus_hautes_etudes: yup.string(),
    demo_rythme: yup.string(),
    demo_status: yup.string(),
    demo_titre: yup.string(),
    editeur_principal: yup.array().of(yup.string()),
    // education_formation: yup.object(),
    // education_formation_autres: yup.object(),
    experience_programmation: yup.number(),
    frameworks_web: yup.array().of(yup.string()),
    language_expert: yup.array().of(yup.string()),
    language_pas_expert: yup.array().of(yup.string()),
    os_principal: yup.array().of(yup.string()),
    plateformes_os: yup.array().of(yup.string()),
    premiere_ligne_code: yup.number(),
    profils_tech: yup.number(),
    programmation_pro: yup.number(),
    recherche_travail: yup.string(),
    recherche_travail_secteur: yup.string(),
    recherches_info: yup.string(),
    recherches_info_texte: yup.string(),
    satisfaction: yup.number(),
    taille_structure: yup.string(),
    travail_activite: yup.string(),
    travail_activite_autre: yup.array().of(yup.string()),
    travail_bureau_domicile: yup.string(),
    demo_genre: yup.string(),
    email: yup.string(),
  })
  .noUnknown();

export { schema };
