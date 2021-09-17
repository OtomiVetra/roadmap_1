import { useState, useEffect } from "react";
const API_URL = "http://localhost:3001";
const IndexPage = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
      });
  }, []);
  console.log(users);
  return (
    <div className="container">
      <div className="users">
        {users.map((user) => {
          return (
            <div key={user.id} className="user">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <a href={`/users/${user.id}`}>open</a>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default IndexPage;


