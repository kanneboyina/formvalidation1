function Registration() {
    var Userid = document.getElementById('User_id')
    var Password = document.getElementById('Password')
    var Name = document.getElementById('Name')
    var Address = document.getElementById('Address')
    var Country = document.getElementById('Country')
    var ZipCode = document.getElementById('ZipCode')
    var Email = document.getElementById('Email')
    var Gender = document.getElementById('Male')
    var Gender = document.getElementById('Female')
    var Language = document.getElementById('English')
    var Language = document.getElementById('Non English')
    var  About = document.getElementById('About')
}
    
Form.addEventListener('submit',(e)=>{
   // console.log(e)
     e.preventDefault()
     ValidityState()

})
function validation(){
   let Userid = Userid.value.trim()
   let Password = Password.value.trim()
   let Name =Name.value.trim()
   let Address = Address.value.trim()
   let Country = Country.value.trim()
   let ZipCode = ZipCode.value.trim()
   let Email = Email.value.trim()
   let Gender = Male.value.trim()
   // let Gender = FeMale.value.trim()
   let Language = English.value.trim()
//    let Language = NoEnglish.value.trim()
   let About = About.value.trim()
 }
 if(usernamevalue ===''){
   SetError(username,'Username is required');
 }
 else{
   setSuccess(username);
 }
 if(Emailvalue ===''){
   SetError(email, 'Email is required');
 }
 else if (!isValidEmail(emailValue)){
   SetError(email,'provide a valid email address');
 }
 else{
   setSuccess(email);
 }
 if(Passwordvalue ===''){
   SetError(Password,'password is required');
 }
 else if (Passwordvalue.length < 8){
   SetError(Password,'password must be at least 8 character.')
 }
 else{
   setSuccess(Password);
 }
 if (Passwordvalue ===''){
   SetError(Password2, 'please confirm your password');
 }
 else if (Password2value !== Passwordvalue){
   SetError(Password2, 'passwords doesnt match');
 }