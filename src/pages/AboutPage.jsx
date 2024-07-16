

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            About Me
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
                    src="/path/to/your/photo.jpg"
                    alt="Your Name"
                    className="w-48 h-48 rounded-full object-cover"
                  />
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-lg text-gray-700">
                    Hi I am a passionate software developer and also a veteran. 
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Background</h2>
                  <p className="text-lg text-gray-700">
                    I have a Bachelor`s degree in Computer Science from Metro State University, Minnesota. During my studies, I gained a strong foundation in programming concepts and ever since has piqued my interest. 
                  </p>
                  <p className="text-lg text-gray-700 mt-4">
                    During my time at my university I enslisted into the Minnesota National Guard as an Intelligence Analyst. I served my full contract and was honorably discharged, but soon after found myself directionless. I took some jobs
                    unrelated to programming or Computer Science to pay bills. Those jobs helped me develop strong interpersonal and communication skills since I needed to help people daily that both served the best interest of them and the company I worked for.
                    Now I am trying to enter into the software engineering space, as I have felt that I have learned a lot from my other jobs, but I would like to learn more about programming and apply it. I am constantly learning and want to learn so I can be a better
                    programmer.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Skills</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>Git</li>
                    <li>SQL</li>
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

export default AboutPage;