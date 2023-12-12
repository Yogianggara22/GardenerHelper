const colors = {
  grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
  blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  green: (opacity = 1) => '#79AC78',
  green2: (opacity = 3) => '#D0E7D2',
  grey2: (opacity = 1) => '#515E63',
  darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
  darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
};
export default colors;
