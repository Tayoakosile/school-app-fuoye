export const handleIsUserAuthenticated = (user:any,res:any)=>{
    if(user)return true;
    res.status(300)
    return res.redirect('http://localhost:3001/login')
}