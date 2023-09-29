const GetInTouch =()=>{
    return (
        <div className=" md:p-10 flex flex-col justify-center items-center bg-[#d3d3d3]">
            <h1 className="my-[50px] font-bold text-5xl max-[768px]:text-xl max-[768px]:my-10">Get in touch with us</h1>
            <div className=" flex flex-col flex-1 p-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="Contact">
                    <label className=" block text-gray-700 text-sm font-bold mb-2" for="username">
                        Name:
                    </label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
                    <label className=" block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email:
                    </label>
                    <input class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Email"/>
                    <label className=" block text-gray-700 text-sm font-bold mb-2" for="username">
                        Message:
                    </label>
                    <textarea rows="4" cols="50" name="message" form="Contact" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        Message here...
                    </textarea>
                    <input type='Submit'/> 
                </form>
            </div>
        </div>
    )
}

export default GetInTouch;