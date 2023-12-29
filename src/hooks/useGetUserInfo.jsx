export const useGetUserInfo =()=>{
    //to convert stringify obj into obj
    if(localStorage.getItem("auth")){
        const {name,profilePhoto,userID,isAuth} = JSON.parse(localStorage.getItem("auth"));
        return {name,profilePhoto,userID,isAuth};
    }
else 
{
    const isAuth = false;
    return {isAuth};
}
  
}