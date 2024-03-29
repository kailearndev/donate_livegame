import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import vcb from"../assets/vcb.jpg"
import momo  from"../assets/momo.jpg"

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

// import ModalCustom from "../components/Modal";
import toast, { Toaster } from "react-hot-toast";

const ServiceCard = ({ index, title, icon, link, bankAccount }) => {
  const notify = () =>
    toast(` ${title} \n${bankAccount}`, {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  return (
    <Tilt className="xs:w-[250px] w-full cursor-pointer">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          {link.includes("https") ? (
            <a
              className="text-white text-[20px] font-bold text-center"
              href={link}
              target="_blank"
            >
              {title}
            </a>
          ) : (
            <Popup
              modal ={true}
             contentStyle={{
              width: '300px',
              borderRadius: 8
             }}
             closeOnDocumentClick
              trigger={<button className="text-white text-[20px] font-bold text-center"> {title}</button>}
              position="center center"
              lockScroll
              
            >
              <div className="" >
                <img   src= {title ==="Vietcombank" ? vcb : title ==="Momo" ? momo :'' }/>
              </div>
            </Popup>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mạng Xã Hội</p>
        <h2 className={styles.sectionHeadText}> Donate 🚀 </h2>
        <h4 className={styles.heroSubText}>Ấn vào link bên dưới</h4>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            onClick={() => setVisible(true)}
            {...service}
          />
        ))}
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default SectionWrapper(About, "about");
