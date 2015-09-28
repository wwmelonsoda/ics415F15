//Create an example FAQ page that lists five different Frequently Asked Questions in a list.
// Each question should be clickable. When the user clicks on the question the answer should appear
// below the question. If they click on the question again the answer should hide.
// Use jQuery functions to implement this functionality. The user should be able to have multiple questions
// ‘opened’ at the same time. Change the questions to indicate that they are opened (-) or closed (+).

//Create another Bootstrap HTML page with an input form with a URL input field and a submit button. When the button is pressed it calls a jQuery function from myScript.js
// that gets the URL and counts the number of links in the page. Show the result below the the input form.

$(document).ready(function(){
    $('#faq1').click(function(){

        $('#panel1').slideToggle('slow');
        if($(this).text() == 'Click me to hide the answer')
        {
            $(this).text('Click me to reveal how tall Hello Kitty is!');
        }
        else
        {
            $(this).text('Click me to hide the answer');
        }
    });

    $('#faq2').click(function(){

        $('#panel2').slideToggle('slow');
        if($(this).text() == 'Click me to hide the answer')
        {
            $(this).text('Click me to reveal who is Hello Kitty boyfriend!');
        }
        else
        {
            $(this).text('Click me to hide the answer');
        }
    });

    $('#faq3').click(function(){

        $('#panel3').slideToggle('slow');
        if($(this).text() == 'Click me to hide the answer')
        {
            $(this).text('Click me to reveal Hello Kittys birthday');
        }
        else
        {
            $(this).text('Click me to hide the answer');
        }
    });

    $('#faq4').click(function(){

        $('#panel4').slideToggle('slow');
        if($(this).text() == 'Click me to hide the answer')
        {
            $(this).text('Click me to reveal Hello Kittys favourite word!');
        }
        else
        {
            $(this).text('Click me to hide the answer');
        }
    });

    $('#faq5').click(function(){

        $('#panel5').slideToggle('slow');
        if($(this).text() == 'Click me to hide the answer')
        {
            $(this).text('Click me to reveal how Hello Kitty looks!');
        }
        else
        {
            $(this).text('Click me to hide the answer');
        }
    });

    $("#submit").click(function(){
        $('#result').text('There are '+$.get('#url a').length+' <a> tags in the given website');
    });
});