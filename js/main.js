//When the document is ready perform the function//
$(document).ready(() => {
    //This is to toggle the button
    /*$("#button").click(function(){
        $("#form").css("height", "12rem");
        $("#main").slideToggle("slow");
        $("#list").fadeIn(2000);
    }); 
       
    //This is to add the input and select from user input//
    /*$("#show").click(function(){
        var input = $('input').val();
        var input1 = $('#points').val();
        var input2 = $('#select').val();
        $('ul').append("<li>" ,input + '  ' + input1 +  '  ' + input2 , "</li>")
    });*/

    $('#button').on('click', () => {
        $('#main').slideToggle();
        $('#form').css({
            height: '12rem'
        });
    });
    $('#show').on('click', () => {
        const $list = $("#list")
        const $listFade = $list.fadeIn(1000);
        $listFade;
        var input = $('input').val();
        var input1 = $('#points').val();
        var input2 = $('#select').val();
        $('ul').append("<li>" ,input + '  ' + input1 +  '  ' + input2 , "</li>")
        $('#form').css({
            height: '4rem'
        });
        $('#main').hide();
    });
});
