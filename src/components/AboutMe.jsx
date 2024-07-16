import Selfie from '../img/Selfie.jpg'

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <header className="">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          My Portfolio
        </h1>
      </div>
    </header>
    <main>
    <div className="flex items-center justify-center mb-8">
            <img
              src={Selfie}
              alt="Profile Photo"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className='text-lg text-gray-700'>
            Hi, my name is Yuepeng Yang, I am a software developer with a focus on Python, Java and Javascript. I am eager to learn and apply
            why I have learned. 
          </p>
        </section>
      </div>
    </main>
  </div>
  )
}

export default AboutMe