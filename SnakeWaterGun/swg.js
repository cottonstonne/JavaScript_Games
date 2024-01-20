function fun(userstr){
    let ob=document.getElementsByClassName("cnt")[0];
    let arr=["snake","water","gun"];
    let compstr=arr[Math.floor(Math.random() * 3)];

    ob.children[0].innerText=`computer choose :${compstr}`;
    ob.children[1].innerText=`you choose :${userstr}`;

    if (compstr == userstr) {
      ob.children[2].innerText = `Winner is : draw`;
    } 
    else if(compstr == "gun"){
        if (userstr == "water") {
          ob.children[2].innerText = `Winner is : You!!`;
        } 
        else {
          ob.children[2].innerText = `Winner is : Computer!!`;
        }
    }
    else if(compstr == "water"){
        if (userstr == "snake") {
          ob.children[2].innerText = `Winner is : You!!`;
        } 
        else {
          ob.children[2].innerText = `Winner is : Computer!!`;
        }
    }
    else if(compstr == "snake"){
        if (userstr == "gun") {
          ob.children[2].innerText = `Winner is : You!!`;
        } 
        else {
          ob.children[2].innerText = `Winner is : Computer!!`;
        }
    }
}