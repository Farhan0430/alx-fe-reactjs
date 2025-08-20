import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>This is dynamic content for post #{id}.</p>
    </div>
  );
}
