import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const API_URL = "http://localhost:3001";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter()
  const { user_id } = router.query
  useEffect(() => {
    if (!user_id) return false;
    fetch(`${API_URL}/users/${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.item);
      });
  }, [user_id])
  console.log(user_id, user);
  return (
    <div className="container">
      <div>
        {!!user && (
          <div className="user">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserPage;