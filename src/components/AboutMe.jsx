
const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          My Portfolio
        </h1>
      </div>
    </header>
    <main>
    <div className="flex items-center justify-center mb-8">
            <img
              src=""
              alt="Profile Photo Template"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>
            Hi, I am John Doe.  I am a web developer with experience in React and Tailwind CSS. This is my first ever project using react and tailwindcss.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc pl-6">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
      </div>
    </main>
  </div>
  )
}

export default AboutMe