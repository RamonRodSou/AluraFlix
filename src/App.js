import { Container } from '@mui/material';
import './App.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <>
      <Container maxWidth='xl'>
         <Cabecalho/>
      </Container>
        <Banner/>
    </>
    
);
}

export default App;
