import { useContext } from 'react';
import Switch from 'react-switch';
import { Sun, Moon } from 'phosphor-react';
import { ThemeContext } from 'styled-components';
import Logo from '../../assets/logo.svg'
import { Container, Image, Title, ToggleContainer } from './style';

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <Image 
        src={Logo}  
        alt='logo'  
      />
      <Title>Dev Feed</Title>
      <ToggleContainer>
        <Switch 
          checked={title === 'dark'} 
          onChange={toggleTheme}
          height={25}
          width={50}
          handleDiameter={25} 
          checkedIcon={<Sun size={25}/>}
          uncheckedIcon={<Moon size={25}/>}
        />
      </ToggleContainer>
    </Container>
  )
}