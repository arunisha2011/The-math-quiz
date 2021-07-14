function back(){
    window.location.replace("activity_1.html")
}
function getScore(){
var score=localStorage.getItem("score")
document.getElementById("update").innerHTML="<h1>score: "+score+"</h1>"
}