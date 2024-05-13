import { useEffect, useState } from "react"
import axios from "axios";
import Box from "../components/Box";

export default function Person() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }, [])

  // console.log(users);

  return (
    <div>
      {users.map(user =>
        <div key={user.id}>
          <Box name={user.name} title={user.company.name} location={user.address.city} />
        </div>
      )}
    </div>
  )
}
