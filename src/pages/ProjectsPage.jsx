import ProjectPic from '../img/ProjectPic.jpg'

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Projects:
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-center mb-8">
                  <img
                    src={ProjectPic}
                    alt="Project Stock Photo"
                    className="w-48 h-48 rounded-full object-cover"
                  />
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Projects:</h2>
                  <p className="text-lg text-gray-700">
                    For now I only have one, maybe two projects and I would say that it is this portfolio website and maybe my capstone project from 
                    my final year at University. 
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Portfolio Website</h2>
                  <p className="text-lg text-gray-700">
                    So the technologies that I used are React, NodeJS, TailwindCSS, and Git/Github. I also used AI to help answer questions and generate code 
                    to help with production. I deployed my website on Netlify after I purchased a domain name. 
                  </p>
                  <p className="text-lg text-gray-700 mt-4">
                    I would not say that this website is finished but it has been some time since I attempted at creating something using code and deploying it
                    on the web. This project alone taught me a lot about React, Tailwind, NodeJS, and Git. Just setting up the environment and making sure everything worked
                    took me half a day. I followed a tutorial for a base and then I branched out with the most basic looking portfolio, version 1.0, a minimum-viable-product. 
                    In the future I want to add a form for users, one where they can submit their queries to my email. I also want to fix the UI and UX of my website since
                    it looks so plain and has just the necessary function to be called a portfolio website. I want to add a database of future projects, and I want it to be
                    searchable. I still have accessibility, mobile/dynamic viewing, and performance that I need to worry about.This portfolio website is far from done, but it has served it purpose of teaching me.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Future Project Ideas:</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Stock and Stock News Screener</li>
                    <li>Mod Manager</li>
                    <li>Database website for spices and their complementary combinations</li>
                    <li>A Video Game</li>
                    <li>Video Game Price Screener</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;