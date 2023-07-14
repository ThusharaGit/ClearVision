interface iProps {
    phrase: string,
    bgImage: string
}

function Thumbnail({ phrase, bgImage }: iProps) {
    return (
        <div className="h-96 w-11/12 bg-slate-100 mx-auto flex flex-row-reverse">
            <div style={{backgroundImage:`url(${bgImage})`}} className="h-full w-1/2 bg-no-repeat bg-cover bg-center " ></div>
            <h1>{phrase}</h1>
        </div>
    );
}

export default Thumbnail;