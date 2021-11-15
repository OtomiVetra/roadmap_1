import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main";
import PostArticle from "../../components/posts/Article";
//const API_URL = "/api";
const API_URL = "http://localhost:3001";


const UserPage = () => {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const router = useRouter()
  const { post_id } = router.query
  useEffect(() => {
    if (!post_id) return false;
    fetch(`${API_URL}/posts/${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.item);
      });
    fetch(`${API_URL}/comments?postId=${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.items);
      });
  }, [post_id])
  useEffect(() => {
    if (!post) return false
    fetch(`${API_URL}/users/${post.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.item);
      })
  }, [post])
  return (
    <MainLayout>
      <div>
        {!!post && (
          <PostArticle post={post} user={user} />
        )}
      </div>
      <div className="items">
        {comments.map((comment) => {
          return (
            <div className="item" key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          )
        })}
      </div>
    </MainLayout>
  )
}

export default UserPage;