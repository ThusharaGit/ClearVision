import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="bg-base h-20 w-full p-2 flex flex-row">
            <div className="w-2/4">
                <Link to={'/'}><div style={{ backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/01/20/00/04/1000_F_120000449_kmt8dLwemYapRnM5Rcs8I2bFuJTCWhQ7.jpg)' }} className="h-10 w-24 bg-slate-600 inline-block m-auto bg-no-repeat bg-cover bg-center "></div></Link>
                <h1 className="absolute top-10 text-cyan-900 font-extrabold italic">CLEAR VISION</h1>
                <Link to={'/'}><button className=" hover:text-red-400 focus:text-red-700 w-28 h-8 m-4  ">Home</button></Link>
                <Link to={'/shop'}><button className=" hover:text-red-400  focus:text-red-700 w-28 h-8 m-4  ">Shop</button></Link>
                <Link to={'/featured'}><button className=" hover:text-red-400  focus:text-red-700 w-28 h-8 m-4  ">Featured</button></Link>
                <Link to={'/recomended'}><button className=" hover:text-red-400  focus:text-red-700  w-28 h-8 m-4  ">Recomended</button></Link>
            </div>
            <div className="w-1/4 flex justify-center p-4">
                <input className="text-center" type="text" name="search" id="search" placeholder="Search Product" />
                <button className="text-3xl ml-4  hover:text-red-400" ><ion-icon name="bag-outline"></ion-icon></button>
            </div>
            <div className="w-1/4">
                <Link to={'/signup'}><button className=" bg-red-200 hover:bg-red-400  hover:text-white w-28 h-11 m-2  ">Sign-up</button></Link>
                <Link to={'/signin'}><button className=" bg-gray-400 hover:bg-gray-700  hover:text-white w-28 h-11 m-2  ">Sign-in</button></Link>
            </div>
        </div>
    );
}

export default Nav;