import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p><FontAwesomeIcon icon={faEnvelope} className='mr-2'/>y.yangster1998@gmail.com</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutPage" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/ProjectsPage" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/ContactPage" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="text-center">
        <p className="text-sm">&copy; 2024 Yuepeng Yang. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer