$( "document" ).ready(function() {
$(".submit").click(function(){
    var vowels = ['a','e','i','o','u']
    var finalString = ''
    var startPhrase = $(".text").val();
    var words = startPhrase.split(' ')
    words.forEach(function(word){
        var firstLetter = word[0];
            var restofword = word.split(1);
        if( $.inArray(firstLetter, vowels) != -1){
            finalString.append(word+'way'+' ')
        } else {
            finalString.append(restofword+firstLetter+'ay'+' ')
        };
    });
    $('.result').text(finalString)
});
});