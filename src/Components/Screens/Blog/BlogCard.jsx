import { GoArrowRight } from "react-icons/go";

function Blogcard({ Image, author,dateCreated, blogTitle, body, handleClick}) {
  return (
    <div className=" lg:w-[600px] bg-white border border-gray-300 mb-5">
        <img alt="Blog theme" src={Image} loading="lazy" className=" lg:w-[600px] w-full object-cover lg:h-[50%]"/>
        <div className=" p-2">
            <h3 className=" text-sm font-light">By {author} |  {dateCreated}</h3>
            <h1 className=" font-semibold text-xl my-2">
                {blogTitle}
            </h1>
            <p className=" font-sans text-sm line-clamp-4">{body}</p>
            <div onClick={handleClick} className=" my-10 flex items-center hover:cursor-pointer"> 
                <h2 className=" text-orange-300 font-semibold mr-5">Read more</h2>
                <GoArrowRight color="orange" size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Blogcard