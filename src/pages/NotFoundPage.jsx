import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
    <Link
      to="/"
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Go back to homepage
    </Link>
  </div>
  )
}

export default NotFoundPage