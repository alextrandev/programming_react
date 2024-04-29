export default function LogInButton({ loginHandler, isLoggedIn, user }) {
  return (
    <button className="px-8 py-2 m-2 bg-blue-500 text-white rounded shadow" onClick={() => loginHandler(user)}>
      {isLoggedIn ? "Logout" : `Login as ${user}`}
    </button>
  )
}
