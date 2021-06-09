type GraphQLSurveyNode = {
  key: string;
  pages: [];
  showQuestionNumbers?: string;
  title?: string;
  completedHtml?: string;
};

// re-construit un objet valide pour SurveyJS depuis:
// - une liste de questionnaires...
// - incluant une propriété `key`,
// - étant donnée une série de propriétés `key`
//
// par exemple: buildSurveys(data, "questions communes", "designers")
// assemblera le tronc commun et les questions design
const buildSurveys = (data: GraphQLSurveyNode[], ...keys: string[]) => {
  const allPages = keys
    .map(e =>
      data
        .filter(d => d.key === e)
        .map(d => d.pages)
        // @ts-expect-error
        .flat()
    )
    // @ts-expect-error
    .flat();
  const fullData = data.filter(e => e.key === keys[0]);

  fullData['pages'] = allPages;
  return fullData;
};

export default buildSurveys;
