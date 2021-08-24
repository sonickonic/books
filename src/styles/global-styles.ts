import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --green: #1C444E;
  --light-green: #EFF3ED;
  --orange: #E2AF74;
  --light-orange: #E7CEB1;
  --light: #FDFAF7;
  --white: #FFF;
}`;
