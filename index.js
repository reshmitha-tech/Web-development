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