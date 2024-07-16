

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
                    Hi, I`m John Doe, a passionate software developer with expertise in web development. I love creating innovative solutions and bringing ideas to life through coding.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Background</h2>
                  <p className="text-lg text-gray-700">
                    I have a Bachelor`s degree in Computer Science from XYZ University. During my studies, I gained a strong foundation in programming concepts and developed a keen interest in web technologies.
                  </p>
                  <p className="text-lg text-gray-700 mt-4">
                    After graduation, I worked as a software developer at ABC Company, where I honed my skills in front-end and back-end development. I collaborated with cross-functional teams to deliver high-quality software solutions.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Skills</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>HTML5 &amp; CSS3</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Passion</h2>
                  <p className="text-lg text-gray-700">
                    I am passionate about staying up-to-date with the latest web technologies and trends. I enjoy exploring new frameworks, libraries, and tools to enhance my development skills and create cutting-edge applications.
                  </p>
                  <p className="text-lg text-gray-700 mt-4">
                    In my free time, I contribute to open-source projects and participate in coding challenges to further expand my knowledge and give back to the developer community.
                  </p>
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