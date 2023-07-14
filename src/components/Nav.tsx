import { Link } from "react-router-dom"

function Nav() {

    return (
        <div className="bg-base h-20 w-full p-2 flex flex-row">
            <div className="w-2/4">
                <Link to={'/'}><button className=" hover:text-red-400 focus:text-red-700 w-28 h-8 m-4 rounded-md ">Home</button></Link>
                <Link to={'/shop'}><button className=" hover:text-red-400  focus:text-red-700 w-28 h-8 m-4 rounded-md ">Shop</button></Link>
                <Link to={'/featured'}><button className=" hover:text-red-400  focus:text-red-700 w-28 h-8 m-4 rounded-md ">Featured</button></Link>
                <Link to={'/recomended'}><button className=" hover:text-red-400  focus:text-red-700  w-28 h-8 m-4 rounded-md ">Recomended</button></Link>
            </div>
            <div className="w-1/4 flex justify-center p-4">
                <input className="text-center" type="text" name="search" id="search" placeholder="Search Product" />
                <button className="text-3xl ml-4  hover:text-red-400" ><ion-icon name="bag-outline"></ion-icon></button>
            </div>
            <div className="w-1/4">
                <Link to={'/signup'}><button className=" bg-red-200 hover:bg-red-500  hover:text-white w-28 h-8 m-4 rounded-md ">Sign-up</button></Link>
                <Link to={'/signin'}><button className=" bg-gray-400 hover:bg-gray-700  hover:text-white w-28 h-8 m-4 rounded-md ">Sign-in</button></Link>
            </div>
        </div>
    )
}

export default Nav