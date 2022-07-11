import { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import GlobalStyles from './Global/styles/globalStyles'
import dark from './Global/styles/darkTheme'
import light from './Global/styles/lightTheme';

function App() {
  const [appTheme, setAppTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setAppTheme(appTheme.title === 'light' ? dark : light);
  }, [appTheme]);

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Header 
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  )
}
export default App
