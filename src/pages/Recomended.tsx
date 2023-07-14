import Thumbnail from "../components/Thumbnail";

function Recomended() {
    const phrase = "Recomended Products";
    const bgImage = 'https://images.squarespace-cdn.com/content/v1/5e4484568fb6f75685b0ff2c/1632430406345-41R1N06FC5BZEADMUNM0/lindberg-r-yjackie-k229-u9-u9-a.jpg?format=1000w';

    return (
        <div className="grow">
            <Thumbnail phrase={phrase} bgImage={bgImage} isVisible={false} />
        </div>
    );
}

export default Recomended;