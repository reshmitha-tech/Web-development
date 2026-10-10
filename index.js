var user=[
    {
        name:"John Doe",
        gender:"male",
        image:"john.png"
    },
    {
        name:"JaneDoe",
        gender:"female",
        image:"jane.png"
    }
]
var index=0;

function toggled()
{
    if(index==0)
        index=1;
    else
        index=0;
    document.getElementById("username").innerText=user[index].name;
    document.getElementById("gender").innerText=user[index].gender;
    document.getElementById("image").src=user[index].image;
}


function randomuser()
{
    
    fetch("https://randomuser.me/api/")
    .then(function (rawData){
        return rawData.json();
    })
    .then(function(jsonData){
        var users=jsonData.results[0];
        var gender=users.gender;
        var fullname=users.name.title+" "+users.name.first+" "+users.name.last;
        var image=users.picture.large;
        document.getElementById("username").innerText=fullname;
        document.getElementById("gender").innerText=gender;
        document.getElementById("image").src=image;

    })
}