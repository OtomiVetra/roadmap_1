import Link from "next/link";
const PostArticle = (props) => {
  const { post, user } = props
  const { title, body } = post
  return (
    <article className="blog-post">
      <div>
        <img src={`https://picsum.photos/id/${post.id + 400}/600/300`} className="w-100" />
      </div>
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-meta">
        January 1, 2021 by {!!user && <Link href={`/users/${user.id}`}><a>{user.name}</a></Link>}
      </p>
      <p>
        {body}
      </p>
      <hr />
    </article>
  )
}

export default PostArticle;