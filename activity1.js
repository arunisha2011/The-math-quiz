x=0;

function update_score(){
    x=x +1;
    document.getElementById("points").innerHTML="Score: "+x;
}
function save_score(){
    localStorage.setItem("score",x)
}
function next_page(){
    window.location.replace("activity_2.html")
}