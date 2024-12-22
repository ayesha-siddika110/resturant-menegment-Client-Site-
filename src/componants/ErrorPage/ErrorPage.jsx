import Lottie from "lottie-react";
import errorImage from '../../assets/LottieImages/errorpage.json'

const ErrorPage = () => {
    return (
        <div>
            <Lottie className="h-[100vh]" animationData={errorImage} loop={true}></Lottie>
            
        </div>
    );
};

export default ErrorPage;