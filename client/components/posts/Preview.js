import Link from "next/link";
const PostPreview = (props) => {
  const { post, link } = props;
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary">World</strong>
        <h3 className="mb-0">{post.title.substr(0, 25)}...</h3>
        <div className="mb-1 text-muted">Nov 12</div>
        <p className="card-text mb-auto">
          {post.body}
        </p>
        <Link href={link}><a>Continue reading</a></Link>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img src={`https://picsum.photos/id/${post.id + 400}/200/250`} className="bd-placeholder-img" />
      </div>
    </div>
  )
}

export default PostPreview;