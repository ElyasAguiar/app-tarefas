import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { Home } from './src/page/Home';

import { theme } from './src/styles/theme';
import AppNavigator from './src/Navigation/BottomNavigation';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex='1' bg={theme.colors.primary[100]}>
        <AppNavigator />
      </Box>
    </NativeBaseProvider>
  );
}
