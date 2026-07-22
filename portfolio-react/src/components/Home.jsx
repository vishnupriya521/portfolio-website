import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";


function Home() {

  return (

    <motion.section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-900
        text-white
        p-10
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="text-center">


        <motion.img
          src={profile}
          alt="Profile"
          className="
            w-40
            h-40
            rounded-full
            mx-auto
            mb-6
            object-cover
          "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />



        <motion.h1
          className="
            text-5xl
            font-bold
            mb-4
          "
          initial={{ y:-50, opacity:0 }}
          animate={{ y:0, opacity:1 }}
          transition={{ duration:0.8 }}
        >
          Hi, I'm Vishnupriya
        </motion.h1>



        <motion.h2
          className="
            text-2xl
            text-gray-300
            mb-6
          "
          initial={{ x:-50, opacity:0 }}
          animate={{ x:0, opacity:1 }}
          transition={{ duration:0.8 }}
        >
          Computer Science Student | Full Stack Developer
        </motion.h2>



        <motion.p
          className="
            max-w-xl
            mx-auto
            text-gray-400
            mb-8
          "
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.5}}
        >
          I build modern web applications using React,
          Node.js, MongoDB and explore Artificial Intelligence
          technologies.
        </motion.p>



        <motion.div

          className="
            flex
            justify-center
            gap-4
            flex-wrap
          "

          initial={{y:50,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:0.7}}

        >


          <a
            href="#projects"
            className="
              bg-blue-600
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            View Projects
          </a>



          <a
            href="#contact"
            className="
              border
              px-6
              py-3
              rounded-lg
              hover:bg-white
              hover:text-black
            "
          >
            Contact Me
          </a>



          <a
            href="/resume/resume.pdf"
            download
            className="
              bg-green-600
              px-6
              py-3
              rounded-lg
              hover:bg-green-700
            "
          >
            Download Resume
          </a>


        </motion.div>




        <motion.div

          className="mt-8 space-x-6"

          initial={{opacity:0}}

          animate={{opacity:1}}

          transition={{delay:1}}

        >


          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            GitHub
          </a>



          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            LinkedIn
          </a>


        </motion.div>


      </div>


    </motion.section>

  );

}


export default Home;