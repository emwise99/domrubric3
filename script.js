// JavaScript Document

var question = prompt ("What continent contains the country Sudan?")

switch(question) {
    case "Africa":
    alert ("Correct!");
    break;

    default:
        alert ("That is incorrect")
} 

function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("funfact").innerHTML = myFunction(3.14159265359, 3.14159265359);


var	myDemo = document.getElementById ("demoparent");

	console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName ("li");

	console.log("Number of li links: "+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName("li");

	console.log ("Number of li items in menu: "+ linksInMenu.length);

var myComments = document.getElementById("commentaryhead");

	myComments.setAttribute("align", "center");
	
	myComments.setAttribute("style", "color: black")

var newItem = document.createElement("li");

var newText = document.createTextNode("Example Creation");

myDemo.appendChild(newItem);

newItem.appendChild(newText);