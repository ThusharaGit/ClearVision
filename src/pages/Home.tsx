import Thumbnail from "../components/Thumbnail";
import { useState } from 'react';

function Home() {
    const phrase = "Home";
    const bgImage = 'https://media.istockphoto.com/id/675997560/photo/beautiful-surprised-young-woman-in-glasses-standing-in-front-of-wonderful-blue-background.jpg?s=612x612&w=0&k=20&c=JC2sC1tWqFxGXi-aWaFaP6QYCBSYPlF-AKNnvNcM0po=';

    return (< div className='grow'>
        <Thumbnail phrase={phrase} bgImage={bgImage} />
    </div>
    );
}

export default Home;