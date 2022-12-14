$(document).ready(function(){
    $('#vul').css('color','#e6c719');
    $('#end').css('color','#f4120b');

    $('#vul').css('text-decoration','underline');
    $('#end').css('text-decoration','underline');

    $('#vs').css('color','#e6c719');
    $('#es').css('color','#f4120b');

    $("#vulnerable tr:even").css("background-color","#A69207");
    $("#vulnerable tr:odd").css("background-color","#F8E34E");

    $("#endangered tr:even").css("background-color","#E68870");
    $("#endangered tr:odd").css("background-color","#E45530");

    $("#endangered td").css("padding","2%");
    $("#vulnerable td").css("padding","2%");

    $("#endangered").css("font-size","1.25rem");
    $("#vulnerable").css("font-size","1.25rem");
})