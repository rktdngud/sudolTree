import image from './assets/images/sudol.e.png';
import { GlobalStyle } from './common/style';
import Main from './routes/Main';
import styled from 'styled-components';

const Content = styled.div`
  width: 375px;
  height: 812px;
`

function App() {
  return (
    <Content>
      <GlobalStyle />
      <Main />
    </Content>
  );
}

export default App;
