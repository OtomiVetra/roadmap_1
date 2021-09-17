import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PostCard from "../../components/posts/Card";
const API_URL = "http://localhost:3001";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const router = useRouter()
  const { user_id } = router.query
  useEffect(() => {
    if (!user_id) return false;
    fetch(`${API_URL}/users/${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.item);
      });
    fetch(`${API_URL}/posts?userId=${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items);
      });
  }, [user_id])
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
      <div className="items">
        {posts.map((post) => {
          return <PostCard post={post} link={`/posts/${post.id}`} key={post.id} />
        })}

      </div>
    </div>
  )
}

export default UserPage;