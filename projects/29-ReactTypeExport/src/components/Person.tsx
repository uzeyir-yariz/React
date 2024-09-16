import { personType } from "../typeof/type"

const Person = (props: personType) => {

  const {firstName, lastName, age} = props;

  return (
    <div>
      <p>
        {firstName} {lastName} {age}
      </p>
    </div>
  )
}

export default Person
