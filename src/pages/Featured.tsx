import { Link } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";

function Featured() {
    const phrase = "Featured";
    const bgImage = 'https://www.thespectaclestore.com.au/images/DSI191015145527.jpg';
    return( 
    <div className="grow">
    <Thumbnail phrase={phrase} bgImage={bgImage}/>
    </div>
    );        
    }
    
    export default Featured;