
import './App.css';
import Layout from './components/Layout';
import {Route} from 'react-router-dom';
import Login from './pages/login';
import './styles/style.css'
import Registro from './pages/registro';
import FraganceForm from './pages/FraganceForm';
import Fragances from './pages/Fragances';
import UserList from './pages/UserList';
import UserAdmin from './pages/UserAdmin';
import {useState} from "react";
import UserProfile from './pages/UserProfile';

function App() {

  const [id,setId] = useState(0)
  const getId = (id) =>{setId(id) ;console.log(id)}
  return (
    <Layout userId={id}>
      <Route exact path='/'>
          <p> Principal</p>
      </Route>
      <Route path='/login'>
          <Login getId={(id) => {getId(id)}}/>
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
      <Route path='/listaUsuarios'>
          <UserList/>
      </Route>
      <Route path='/AdminUsuarios'>
          <UserAdmin/>
      </Route>
      <Route path='/usuario/:userId'>
        <UserProfile/>
      </Route>
    </Layout>
  );
}

export default App;
