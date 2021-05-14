
$('.click-me').click(function(){

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("I've been clicked!");
    h1.appendChild(h1Text);
    document.body.appendChild(h1);

});


function addListItems() {

    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'Milk and Bread';
    list.appendChild(item);
    
}


$('#button-id').click(function(){

    let item = '<li class="red">Apple and Orange</li>';
    $('#grocery-list').append(item);

});

$('#style-me').click(function(){
    $('.red').css('color', 'red');

});

$('#animate').click(function(){

    $('div').fadeOut(1000,function(){
        $(this).fadeIn();
    });

});


$(document).ready(function(){

    $("<div></div>").css({
        'background-color':'red',
        'height':'100px',
        'width':'100px'
    }).insertAfter('#grocery-list');

});