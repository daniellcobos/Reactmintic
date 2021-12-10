
import './App.css';
import Layout from './components/Layout';
import {Route} from 'react-router-dom';
import Login from './pages/login';
import './styles/style.css'
import Registro from './pages/registro';

function App() {
  return (
    <Layout>
      <Route exact path='/'>
          <p> Principal</p>
      </Route>
      <Route path='/login'>
          <Login/>
      </Route>
      <Route path='/registro'>
          <Registro/>
      </Route>
    </Layout>
  );
}

export default App;
