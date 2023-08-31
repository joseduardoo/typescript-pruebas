
import { useState } from "react"
import {User} from '../types';

interface FormState {
  inputValues: User
}
 
interface FormProps {
  onNewUser: (newUser: User) => void
}

const Form = ({onNewUser}: FormProps) => {

  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    name: "", 
    country: "",
    numberEmployee: 0
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewUser(inputValues)
  }

  //el tipo del evento se obtuvo remplazando "handleSubmit" del elemento input por el contenido de
  // dicha funcion, estanto dentro del elemento input, el elemento "e" (event) sabe, por el contexto,
  // de que tipo es. 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,[e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.name} type="text" name="name" placeholder="Name"/>
        <input onChange={handleChange} value={inputValues.country} type="text" name="country" placeholder="Country"/>
        <input onChange={handleChange} value={inputValues.numberEmployee} type="number" name="numberEmployee" placeholder="Number employee"/>
        <input onChange={handleChange} value={inputValues.age} type="number" name="age" placeholder="Age (optional)"/>
        <button>Save a new employee</button>     
      </form>
    </div>
  )
}

export default Form
