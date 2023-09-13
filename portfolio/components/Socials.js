import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Socials = () => {
  return <div className="flex gap-x-3 items-center justify-center text-lg" >
    <Link href={" "} className="hover:text-red-600 transition-all duration-300">
      <FaYoutube />
    </Link>
    <Link href={" "} className="hover:text-red-600 transition-all duration-300">
      <FaInstagram />
    </Link>
    <Link href={" "}  className="hover:text-red-600 transition-all duration-300">
      <FaTwitter />
    </Link>
    <Link href={" "}  className="hover:text-red-600 transition-all duration-300">
      <FaFacebook />
    </Link>
  </div>;
};

export default Socials;
