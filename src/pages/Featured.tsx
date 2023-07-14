import Thumbnail from "../components/Thumbnail";

function Featured() {
    const phrase = "Featured Products";
    const bgImage = 'https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjItMTY2LWt3YW4tYjYtMjAuanBn.jpg?s=aFVMtX6tOwldjLfoLQGazV6Bwmue5v2Wq0L9Ylg_gW4';

    return (
        <div className="grow">
            <Thumbnail phrase={phrase} bgImage={bgImage} isVisible={false} />
        </div>
    );
}

export default Featured;