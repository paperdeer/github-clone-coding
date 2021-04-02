function starclick(index) {
    console.log(index);
    if(document.getElementsByClassName("staronoff")[index].innerHTML == "Unstar"){
        document.getElementsByClassName("starbtnimg")[index].src="star.jpg"
        document.getElementsByClassName("staronoff")[index].innerHTML="star"
    }else{
        document.getElementsByClassName("starbtnimg")[index].src="staron.jpg"
        document.getElementsByClassName("staronoff")[index].innerHTML="Unstar"
    }
}
let data=localStorage.data;
for(let i=1;i<3;i++){
document.getElementById("upload").innerHTML+=`
    <div class="eachbox"> 
        <div id="postinfo">
            <div class="boxtitle"><a href="https://github.com/eungyeole"><img id = "user" src="https://avatars.githubusercontent.com/u/66717787?s=64&v=4    "></a>
                <p class="postp"><a class="nickname" href="https://github.com/eungyeole">&nbsp;eungyeole </a></p><p class="postthin">&nbsp;starred</p><a class="nickname" href="https://github.com/smoothbear/DSM-Auth-Gradle-Library"><p class="postp">&nbsp;smoothbear/DSM-Auth-Gradle-Library</p></a> <h3 class="dayinfo">15 hours ago</h3></p></div>
                <div id="content">
                    <div id="box">
                        <div id="title">smoothbear/DSM-Auth-Gradle-Library
                            <button id="starbtn" class="starbtn"><img class="starbtnimg" src="starbtn.jpg"><p class="staronoff">star</p></button></div>
                        <div class="sinfo"><h3><a class = "sinfolink"href="https://github.com/smoothbear/DSM-Auth-Gradle-Library">DSM-Auth Gradle library</a></h3></div>
                        <div class="bottom">
                            <div class="type">
                                <div class="type_icon"></div>
                                java
                            </div>
                            <div class="star">
                                <img class = "starimg" src="star.jpg">
                                <div class="number"></div>
                                2
                            </div>
                            <div class="Update">
                                <div class="day"></div>
                                Updated Mar 21
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
    `
}
const contents=document.getElementsByClassName("starbtn");
console.log(contents)
for(let i = 0;i<contents.length;i++){
    contents[i].addEventListener("click", ()=>starclick(i))
}   