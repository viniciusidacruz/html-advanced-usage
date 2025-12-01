interface PostContentProps {
  html: string;
}

export const PostContent = ({ html }: PostContentProps) => (
  <article className="prose-custom max-w-none overflow-x-hidden">
    <div
      className="overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </article>
);
