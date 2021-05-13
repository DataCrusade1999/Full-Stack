document.addEventListener("DOMContentLoaded",function(){

    let paragraph = document.createElement('p');

    let text = document.createTextNode('Turn up');

    paragraph.style.color = "red";

    paragraph.style.textTransform = "uppercase";

    paragraph.className = "paragraph";

    paragraph.appendChild(text);

    document.body.appendChild(paragraph);

})
