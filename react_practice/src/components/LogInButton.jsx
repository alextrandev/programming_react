export default function LogInButton({ loginHandler, isLoggedIn }) {
  return (
    <button className="px-8 py-2 bg-blue-500 text-white rounded shadow" onClick={loginHandler}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  )
}
