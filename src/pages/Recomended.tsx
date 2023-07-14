import { Link } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";

function Recomended() {
    const phrase = "Recomended";
    const bgImage = 'https://t3.ftcdn.net/jpg/05/59/57/64/360_F_559576463_IUADuxjqr3OwLHvYHgB8BYDmstJkwOJs.webp';
    return( 
    <div className="grow">
   <Thumbnail phrase={phrase} bgImage={bgImage}/>
    </div>
    );        
    }
    
    export default Recomended;