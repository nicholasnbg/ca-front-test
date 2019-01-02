export const responseColors = [
  "#cc2900",
  "#e68a00",
  "#e6e600",
  "#2db300",
  "#43A089"
];

export const gaugeColors = ["#43A089", "#b5b5b5"];

export const getResponseColor = int => {
  return responseColors[Math.floor(int === 5 ? 4.9 : int)];
};
