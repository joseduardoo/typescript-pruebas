
import {User} from '../types';

interface Props {
  users: Array<User>
}

const List = ({users}: Props) => {
  return (
    <ul>
      {
        users.map(user => {
          return (
            <li key={user.name}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Country: {user.country}</p>
              <p>No. employee: {user.numberEmployee}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List