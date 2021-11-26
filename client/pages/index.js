import { useState, useEffect } from "react";
import MainLayout from "../components/layouts/main";
import UserCard from "../components/users/Card";
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
    <MainLayout>
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-md-6 col-lg-4" key={user.id}>
              <UserCard user={user} link={`/users/${user.id}`} />
            </div>
          );
        })}
      </div>
    </MainLayout>
  )
}

export default IndexPage;


