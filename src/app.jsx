import './styles/app.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import { ThemeProvider } from './providers/ThemePovider';
import Main from './components/Main';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
