import { getPosts } from "@/shared/queries";

import { BlogHeader, FeaturedPosts, PostsList } from "./components";

const BLOG_TITLE = "Blog";
const BLOG_DESCRIPTION =
  "Artigos sobre desenvolvimento frontend, boas práticas e muito mais.";

export default async function Blog() {
  const posts = await getPosts();

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);
  const totalPosts = posts.length;

  return (
    <div className="w-full px-6 py-12">
      <BlogHeader title={BLOG_TITLE} description={BLOG_DESCRIPTION} />

      <FeaturedPosts posts={featuredPosts} />

      <PostsList posts={regularPosts} totalCount={totalPosts} />
    </div>
  );
}
