import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (

    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col items-center justify-center h-[300px] px-4 bg-[hsla(0, 0%, 68%, 0.812)] shadow-md rounded-md max-w-[450px]">
      {/* Image Section */}
      <div className="absolute -top-12">
        <img
          src="path/to/your/image.jpg"
          alt="Profile Picture"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg border-4 border-white object-cover"
        />
      </div>
      
      {/* Bio and Links Section */}
      <div className="flex flex-col items-center mt-16 px-4">
        {/* Bio Text */}
        <div className="mb-4 text-center px-4">
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-justify pt-sans-regular">
            I am currently a Software Development Engineer at Werkix, working
            on exciting MERN and .NET projects. Happy to connect and refer!
          </p>
        </div>
      
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

  </div>
</div>  

    
  );
}
