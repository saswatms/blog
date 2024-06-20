import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="post-card">
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <Link href={`/blog/${post.slug}`}>Read More</Link>
  </div>
);

export default PostCard;
