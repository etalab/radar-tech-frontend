export type GraphQLResults = { radarTechTest: { answer: [] } };

export type KeyedResult = { key: string; values: [] };

export type FlatResult = {
  key: string;
  n: number;
  pct: number;
};

export type Metier = {
  key: number;
  metier: string;
  metier_str: string;
  description: string;
  questionnaire?: {
    title: string;
  };
};
