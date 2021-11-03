import { useState, useEffect } from "react";
import Link from "next/link";
//const API_URL = "/api";
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
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-md-4 col-lg-3" key={user.id}>
              <div className="item">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <Link href={`/users/${user.id}`}><a>open</a></Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default IndexPage;


