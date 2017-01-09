function myNode(type, name, value){
	this.type = type || null;
	this.name = name || null;
	this.value = value || null;
}

//Return node properties in the form of an object
function getNodeProperties(node){
	
	var newNode = new myNode();

	newNode.type = node.nodeType;
	newNode.name = node.nodeName;

	if(newNode.type==3){ newNode.value = node.nodeValue; }
	if(newNode.type==1){ newNode.value = node.innerHTML; }

	return newNode;
}

var header = document.getElementById("title")
var paragraph = document.getElementById("node-p");
var paragraph = document.getElementById("node-p");
var props = getNodeProperties(paragraph);
var props2 = getNodeProperties(header);
console.log(props);
console.log(props2);