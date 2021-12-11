
import './App.css';
import Layout from './components/Layout';
import {Route} from 'react-router-dom';
import Login from './pages/login';
import './styles/style.css'
import Registro from './pages/registro';
import FraganceForm from './pages/FraganceForm';
import Fragances from './pages/Fragances';

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
      <Route path='/registroProductos'>
          <FraganceForm/>
      </Route>
      <Route path='/listaProductos'>
          <Fragances/>
      </Route>
    </Layout>
  );
}

export default App;
