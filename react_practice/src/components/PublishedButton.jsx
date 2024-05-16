export default function PublishedButton({ post, handleClick }) {
  return (
    <button
      className="bg-white p-3 rounded shadow"
      onClick={() => handleClick(post.id, post.published)}
    >
      <span>Published: </span>
      <span>{post.published ? "Yes" : "No"}</span>
    </button>
  )
}
