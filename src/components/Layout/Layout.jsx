import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <AppBar />
      {children}
    </Container>
  );
};
