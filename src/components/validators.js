import * as yup from 'yup'

// le format du questionnaire-test n'a pas vocation à être modifié trop
// facilement. nous le contraignons donc au respect de ce schéma yup()
const schema = yup
  .object()
  .shape({
    demo_genre: yup
      .string()
      .required()
      .oneOf([
        'Homme',
        'Femme',
        'Non-binaire, genderqueer, ou gender non-conforming',
      ]),
    demo_age: yup.string(),
    travail_activite: yup.string().oneOf(['Oui', 'Non']),
    travail_activite_autre: yup.array().of(yup.string()),
    education_formation: yup.object(),
  })
  .noUnknown()

export { schema }
