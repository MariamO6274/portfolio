import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";



const ServiceCard = ({index, title, icon}) => {
  return (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      // this will come up as lines for cards
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        // this will make a cards look like cards
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}


const About = () => {
  return (
    <>
      {/* textvariant to animate */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Results driven UI frontend developer, with 8 years of full-lifecycle
        software development projects, specializing in UI/UX design and
        implementation. Adept at understanding business goals and translating
        them into intuitive and visually appealing user interfaces. I enjoy
        turning complex problems into beautiful, simple and effective software
        solutions and building out user friendly efficient websites.
        {/* I'm a skilled software developer with experience in TypeScript and JavaScript,
        and expertise in frameworks like React, Node.js, and Three.js. I'm a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life! */}
      </motion.p>
      {/* we can spread all properties comming from server, define service cards and use props */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
// using hoc
export default SectionWrapper(About, "about");
