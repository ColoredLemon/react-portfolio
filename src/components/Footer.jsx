
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p>Email: john@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-2">Subscribe</h3>
          <form className="flex">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="text-center">
        <p className="text-sm">&copy; 2023 My Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer