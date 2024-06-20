import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" flex justify-center bg-gradient-to-br from-[#00aaFF] to-[#008CFF] hover:from-[#008CFF] hover:to-[#008CFF] text-white text-sm text-center py-2 px-8">
      <Link
        href={"https://github.com/alimazhar4/text-to-qr-converter"}
        target="_blank"
        rel="nofollow"
        className="font-semibold flex flex-row gap-2 flex-wrap justify-center items-center"
      >
        <FaGithub size={30} color="#ffffff" />
        <span>Click Here To View Source Code at Github</span>
      </Link>
    </div>
  );
};

export default Header;
