document.addEventListener("DOMContentLoaded",function(){

    let paragraph = document.createElement('p');
    let text = document.createTextNode('Turn up');
    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase";
    paragraph.className = "paragraph";
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click",function() {

        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode("I've been clicked!");
        h1.appendChild(h1Text);
        document.body.appendChild(h1);

    })

})

/*

Fundamentals of the DOM

The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure,
style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. 
The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page,
which can be modified with a scripting language such as JavaScript.


*/