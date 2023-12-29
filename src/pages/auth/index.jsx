import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate,Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./style.css";
import { useEffect } from "react";

export const Auth = () => {

    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo();
    const SignInWithGoogle = async () => {
        //results- everything about the user who just signed in     
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        }
        //authInfo->obj, stringify-> make it string.. now we can store it in local storage                                   
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/expense-tracker");
    };

    // useEffect(()=>{
  

    //     if(isAuth)
    //     {
    //         navigate("/expense-tracker");
    //     }
    // });

    if(isAuth)
    {
        return <Navigate to="/expense-tracker" />;
    }

    return (
        <div className="login-page">
            <p>
                Sign In with google to continue
            </p>
            <button className="login-with-google-btn" onClick={SignInWithGoogle}>Sign In With Google</button>
        </div>
    )
}
