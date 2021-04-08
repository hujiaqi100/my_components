import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Tags from './components/Tags/Tags';
import TodoList from './components/TodoList/Todolist'
import Dropdown from './components/Dropdown/Dropdown'
import Home from './Home'
const App: React.FC<{}> = () => {
  return (
    <div>
      <div style={{ width: '10vw', height: '100vh', float: 'left',background:'rgb(220, 183, 203)'}}>
        <Home />
      </div>
      <div style={{ width: '89.9999vw', height: '100vh', background: 'rgb(206, 178, 202)', float: 'right', padding: '2%' }}>
        <div style={{ background: '#fff', width: '100%', height: '100%' }}>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={TodoList} />
              <Route path='/tags' component={Tags} />
              <Route path = '/drop' component = {Dropdown}/>
            </Switch>
          </HashRouter>
        </div>
      </div>
    </div>
  )
}
export default App;