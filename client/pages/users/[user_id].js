import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main";
import PostPreview from "../../components/posts/Preview";
import UserCard from "../../components/users/Card";
//const API_URL = "/api";
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
    <MainLayout>
      <div className="mb-5">
        {!!user && (
          <UserCard user={user} />
        )}
      </div>
      <div className="row">
        {posts.map((post) => {
          return <div className="col-md-6 col-lg-6">
            <PostPreview post={post} link={`/posts/${post.id}`} key={post.id} />
          </div>
        })}
      </div>
    </MainLayout>
  )
}

export default UserPage;