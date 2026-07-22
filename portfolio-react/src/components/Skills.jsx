import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Machine Learning",
    "Git & GitHub"
  ];


  return (

    <motion.section

      id="skills"

      className="
        min-h-screen
        bg-gray-100
        p-10
      "

      initial={{
        opacity: 0
      }}

      whileInView={{
        opacity: 1
      }}

      transition={{
        duration: 0.8
      }}

      viewport={{
        once: true
      }}

    >


      <h1
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
          text-gray-800
          mb-10
        "
      >
        My Skills
      </h1>



      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
        "
      >


        {skills.map((skill, index) => (


          <motion.div

            key={index}

            className="
              bg-white
              rounded-xl
              shadow-lg
              p-6
              text-center
              font-semibold
              text-gray-700
              hover:shadow-2xl
            "

            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: index * 0.1
            }}

            viewport={{
              once: true
            }}

          >

            {skill}


          </motion.div>


        ))}


      </div>


    </motion.section>

  );

}


export default Skills;