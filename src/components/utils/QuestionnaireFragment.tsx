import { graphql } from 'gatsby';

export const QuestionnaireFragment = graphql`
  fragment Questionnaire on PageMetierQuestionnaire {
    description
    key
    title
    pages {
      name
      elements {
        validators {
          type
        }
        type
        title
        name
        isRequired
        choices
        colCount
        hasOther
        visibleIf
      }
      title
    }
  }
`;
