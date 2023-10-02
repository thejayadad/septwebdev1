
function generatepassword(){
    const length = 12;
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * letters.length)
        password += letters[randomIndex]
    }
    const passwordElement = document.getElementById('password')
    passwordElement.textContent = password;
}