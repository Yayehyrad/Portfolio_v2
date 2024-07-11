import bannerImg from "@/assets/images/bannerImgMain.png";
import Image from "next/image";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <motion.div
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1,
      }}
    >
      <Image
        className="lgl:w-[450px] lgl:h-[680px] z-10 "
        src={bannerImg}
        width={200}
        height={400}
        alt="bannerImg"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.1,
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne  flex justify-center items-center"
      ></motion.div>
    </motion.div>
  );
};

export default RightBanner;
