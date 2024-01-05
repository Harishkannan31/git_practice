var inputValue=document.getElementById("inp");
var button=document.getElementById("butn");
// this is to append list to ul
var ul=document.querySelector("ul");
// it listens to event when button is clicked and runs the function
// button.addEventListener("click",function(){
//     console.log(inputValue.value);
//     if(inputValue.value.length>0) {
//     var li=document.createElement("li");
// // appends the textnode 
//     li.appendChild(document.createTextNode(inputValue.value));
//     ul.appendChild(li);
//     // this line is to avoid multiple entries of same input,
//     // it makes placeholder empty once enter is clicked
//     inputValue.value=" ";
// };
// })
// // this is to take value when enter is clicked
// inputValue.addEventListener("keydown",function(event){
//     console.log(event.which);
//     console.log(inputValue.value);
//     if(inputValue.value.length>0 && event.which===13) {
//     var li=document.createElement("li");
// // appends the textnode 
//     li.appendChild(document.createTextNode(inputValue.value));
//     ul.appendChild(li);
//     // this line is to avoid multiple entries of same input,
//     // it makes placeholder empty once enter is clicked
//     inputValue.value=" ";
// };
// })


// the above code is having repetetive lines,to reduce it, repeating lines can be given under function so we can call it when needed
function inputlength(){
    return inputValue.value.length;
}
function createListElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(inputValue.value));
    ul.appendChild(li);
    inputValue.value="";
}
function enteringwhenclick(){
    if(inputlength()>0) {
        createListElement(); 
}
};
function enteringwhenkeypress(event){
    if(inputlength()>0 && event.which===13) {
        createListElement();
};
}
button.addEventListener("click",enteringwhenclick);
    // console.log(inputValue.value);
    // this is to take value when enter is clicked
inputValue.addEventListener("keydown",enteringwhenkeypress);
    // console.log(event.which);
    // console.log(inputValue.value);
