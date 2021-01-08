type Dimensions = {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  boundedHeight?: number;
  boundedWidth?: number;
  height?: number;
  width?: number;
};

// ajoute une floppée de propriétés par défaut à notre graphique,
// si ces dernières ne sont pas définies
export const combineChartDimensions = (dimensions: Dimensions): Dimensions => {
  const parsedDimensions: Dimensions = {
    ...dimensions,
    marginTop: dimensions.marginTop || 20,
    marginRight: dimensions.marginRight || 20,
    marginBottom: dimensions.marginBottom || 20,
    marginLeft: dimensions.marginLeft || 20,
  };

  const boundedHeight =
    parsedDimensions.height &&
    parsedDimensions.marginTop &&
    parsedDimensions.marginBottom
      ? Math.max(
          parsedDimensions.height -
            parsedDimensions.marginTop -
            parsedDimensions.marginBottom,
          0
        )
      : 0;

  const boundedWidth =
    parsedDimensions.width &&
    parsedDimensions.marginLeft &&
    parsedDimensions.marginRight
      ? Math.max(
          parsedDimensions.width -
            parsedDimensions.marginLeft -
            parsedDimensions.marginRight,
          0
        )
      : 0;
  return {
    ...parsedDimensions,
    boundedHeight,
    boundedWidth,
  };
};
