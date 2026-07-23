import { CiHeart } from "react-icons/ci";
import { MdOutlineShare, } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
export default function LeftSidebar() {
    return (
   <div className="py-10 flex flex-col  items-center gap-5">
    <CiHeart className="border bg-white p-2 text-4xl rounded-full" />

    <MdOutlineShare className="border p-2 bg-white text-4xl rounded-full" />

    <div className="border p-2 w-10 bg-white h-10 rounded-full flex items-center justify-center">
        <FaRegBookmark className="text-xl" />
    </div>

    <div className="h-28 border-l border-gray-500"></div>

    <p className="text-gray-600">8 MIN READ</p>
</div>
    )
}