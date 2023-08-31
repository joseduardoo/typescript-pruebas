
import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Forms';
import {User} from './types';

const initial_state = [
  {
    name: "Megan",
    country: "Australia",
    numberEmployee: 3578,
    age: 30
  },
  {
    name: "Noah",
    country: "Canada",
    numberEmployee: 3657
  }
]


interface AppState {
  users: Array<User>
}

function App() {
  const [users, setUsers] = useState<AppState["users"]>([])

  useEffect(() => {
    setUsers(initial_state)
  }, [])

  const handleNewUser = (newUser: User): void => {
    setUsers(users => [...users, newUser])
  }

  return (
    <div className="App">
      <h1>Employees list</h1>
      <List users={users} />
      <Form onNewUser={handleNewUser}/>
    </div>
  );
}

export default App;
