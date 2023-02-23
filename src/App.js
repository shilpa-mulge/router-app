import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import AllQuotes from './pages/AllQuotes';
import NewQoute from './pages/NewQoute';
import SingleQuote from './pages/SingleQuote';
import Layout from './Layoutes/Layout';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact><AllQuotes /></Route>
        <Route path='/quotes/:qouteId'><SingleQuote /></Route>
        <Route path='/new-quote'><NewQoute /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
