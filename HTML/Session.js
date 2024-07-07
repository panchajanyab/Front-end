
function verifySession(){
    let user = localStorage.getItem('USER') || "";
    if(user == ""){
        alert("Session Expired / Not logged in.. Please Login again");
        window.location.href = "./htmlttags.html";
    }
}
class UserSession{
    checkLogin(uName,pswd){
        if(uName == 'santhosh' && pswd == 'man'){
            localStorage.setItem('user',uName)
            window.location.href = './aboutus.html';
        }else{
            localStorage.removeItem('USER');
            alert('invalid Username/Password');
        }
    }
    verifySession(){
        let user = localStorage.getItem('USER') || "";
        if(user == ""){
            alert("session Expired / Not Logged in.. please Login again");
            window.location.href = "./htmlttags.html"
        }
    }
    
}
