export type GraphQLResults = { radarTechTest: { answer: [] } };

export type KeyedResult = { key: string; value: { n: number; pct: number } };

export type FlatResult = {
  key: string;
  n: number;
  pct: number;
};
