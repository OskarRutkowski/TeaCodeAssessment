import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {colors} from './utils';
import {ContactList} from './views/ContactList';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <ContactList />
    </PaperProvider>
  );
};

export default App;
