import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


 export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">

<Link to ={`/blogs`} className="font-bold text-xl flex justify-center flex-col cursor-pointer ">
        TechieBlog
        </Link>
        <div> 
          <Link to= {`/publish`}>
          <button type="button" className="mr-4 text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New </button>
          </Link>
          <Avatar size="big" name ="Ankit Yadav "/>
           </div>
    </div>
  )
}

