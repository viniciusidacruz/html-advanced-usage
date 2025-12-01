import { graphqlFetch } from "@/shared/config";

export type Post = {
  id: string;
  publishedAt: string;
  title: string;
  slug: string;
  content: {
    html: string;
  };
  excerpt?: string | null;
  featured: boolean;
};

type PostsQueryData = {
  posts: Post[];
};

const POSTS_QUERY = `
  query GetPosts {
    posts(orderBy: publishedAt_ASC, stage: PUBLISHED) {
      id
      publishedAt
      title
      slug
      content {
        html
      }
      excerpt
      featured
    }
  }
`;

export async function getPosts(): Promise<Post[]> {
  const data = await graphqlFetch<PostsQueryData>(POSTS_QUERY);
  return data.posts;
}
