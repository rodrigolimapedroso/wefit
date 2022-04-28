import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import main from './styles/themes/colors';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={main}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
