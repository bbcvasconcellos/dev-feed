import { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import dark from './Global/styles/darkTheme'
import light from './Global/styles/lightTheme';
import GlobalStyles from './Global/styles/globalStyles'

import { Wrapper } from './AppStyle';

function App() {
  const [appTheme, setAppTheme] = useState(dark);

  const toggleTheme = useCallback(() => {
    setAppTheme(appTheme.title === 'dark' ? light : dark);
    // localStorage.setItem('theme', JSON.stringify(appTheme));
  }, [appTheme]);  

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Header 
        toggleTheme={toggleTheme}
      />
      <Wrapper>
        <Sidebar 
          jobTitle='Frontend Developer'
          username='Bruno Vasconcellos'
          profilePic='https://avatars.githubusercontent.com/u/61482516?v=4'
          coverImage='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60'
        />
      </Wrapper>
    </ThemeProvider>
  )
}
export default App
