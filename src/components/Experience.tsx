import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../contants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
      <p className={styles.sectionSubText}>What i have done so far </p>
        <h2 className={styles.heroHeadText}>Work Experience.</h2>
      </motion.div>
    </>
  );
};

export default Experience;
