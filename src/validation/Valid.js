//email
const validEmail = (email) =>{
    return email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)


}
const validPass =(password)=>{
    return password.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
}
module.exports ={validEmail,validPass}