import { motion } from "framer-motion";

function About() {

  return (

    <motion.section
      id="about"
      className="
        min-h-screen
        bg-white
        flex
        items-center
        justify-center
        p-10
      "

      initial={{
        opacity: 0,
        y: 50
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.8
      }}

      viewport={{
        once: true
      }}

    >

      <div className="max-w-3xl text-center">


        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-800
            mb-6
          "
        >
          About Me
        </h1>


        <p
          className="
            text-gray-600
            text-lg
            leading-8
          "
        >
          I am Vishnupriya, a Computer Science and IT student
          passionate about Full Stack Development and Artificial
          Intelligence.

          <br /><br />

          I enjoy building responsive web applications using
          React, Node.js, Express.js and MongoDB. I am also
          improving my skills in Data Science and Machine Learning.

          <br /><br />

          My goal is to become a skilled software developer and
          create real-world solutions using technology.
        </p>


      </div>


    </motion.section>

  );

}

export default About;