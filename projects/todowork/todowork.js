//onkeydown="return searchkeypress(event);" 
var typed = new Typed('.blink', {
    strings: ["Eter your Todo", "Enter"],
    typeSpeed: 0
  });






var add= document.getElementById('add');
var removeAll= document.getElementById('removeall');
var list = document.getElementById('list');

//remove all button
removeAll.onclick = function(){
    list.innerHTML='';
}

//adding list element

add.onclick =function(){
    addlis(list);
    document.getElementById('userinput').value ='';
    document.getElementById('userinput').focus();
}
function addlis(targetUl){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textnode= document.createTextNode(inputText+' ');
    var removebutton= document.createElement('button');
    if(inputText!==''){
        removebutton.className='btn btn-xs btn-danger';
        removebutton.innerHTML= '&times; ';
        removebutton.setAttribute('onclick','removeme(this)');


        li.appendChild(textnode);
        li.appendChild(removebutton);
        targetUl.appendChild(li);
   
    }else{
        alert("Please enter a todo");
    }
    
}
function removeme(item){
    var p= item.parentElement;
    p.parentElement.removeChild(p);
}