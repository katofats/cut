module.exports = function access(){
    var inner = document.getElementById("pwd").value;
    var inner2 = 123456;
    if(inner == inner2){
        location.href ="info.html";
    } else{
        location.href ="index.html";
    }
}
