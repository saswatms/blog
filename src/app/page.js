import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostCard from "../components/PostCard";

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...data,
      content,
      slug: filename.replace(/\.md$/, ""),
    };
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </main>
  );
}
