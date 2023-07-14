interface iProps {
    phrase: string,
    bgImage: string,
    isVisible: boolean
}

function Thumbnail({ phrase, bgImage, isVisible }: iProps) {
    return (
        <div className="h-96 w-11/12 bg-slate-100 mx-auto flex flex-row-reverse ">
            <div style={{ backgroundImage: `url(${bgImage})` }} className="h-full w-1/2 bg-no-repeat bg-cover bg-center " ></div>
            <div className="flex flex-col align-center justify-center gap-10 w-1/2 items-center" >
                <h1 className="text-5xl text-slate-700">{phrase}</h1>
                {isVisible &&
                    <>
                        <div className="text-xl" >
                            <h1>Buying eyewear should leave you happy and good-looking. </h1>
                            <h1>With money in your pocket.</h1>
                            <h1>Glasses, Sunglasses and contact lenses.</h1>
                            <h1> We got your eyes covered.</h1>
                        </div>
                        <button className="text-white w-36 h-14 m-4 bg-slate-700 ">Shop Now <ion-icon name="arrow-redo-outline"></ion-icon></button>
                    </>
                }
            </div>
        </div>
    );
}

export default Thumbnail;