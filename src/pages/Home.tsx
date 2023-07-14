import Thumbnail from "../components/Thumbnail";

function Home() {
    const phrase = "See everything with Clarity";
    const bgImage = 'https://www.sea2see.org/cdn/shop/collections/Diseno_sin_titulo_2_1200x1200.png?v=1619782333';

    return (< div className='grow'>
        <Thumbnail phrase={phrase} bgImage={bgImage} isVisible={true} />
    </div>
    );
}

export default Home;