import {Container} from './components/styles/Container.styled'
import Header from './components/Header';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global';
import Content from './content';
import Card from './components/Card';
import Footer from './components/Footer';


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px'
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
    <Container>
      {Content.map((item, index) => (
        <Card key={index} item={item}></Card>
      ))}
    </Container>
    <Footer></Footer>
    </>
    </ThemeProvider>
  );
}

export default App;
