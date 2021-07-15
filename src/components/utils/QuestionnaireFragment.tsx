import { graphql } from 'gatsby';

export const TroncCommunQuestionnaireFragment = graphql`
  fragment TroncCommun on QuestionsCommunes {
    pages {
      title
      name
      elements {
        type
        title
        name
        choices
        colCount
        inputType
        min
        max
        hasOther
        otherText
      }
    }
  }
`;

export const QuestionnaireFragment = graphql`
  fragment Questionnaire on PageMetierQuestionnaire {
    description
    key
    title
    pages {
      title
      name
      elements {
        validators {
          type
        }
        type
        title
        name
        isRequired
        colCount
        choices
        hasOther
        placeHolder
        visibleIf
      }
    }
  }
`;
