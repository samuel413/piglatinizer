$( "document" ).ready(function() {
$(".submit").click(function(){
    var startPhrase = $(".text").val();
    var words = startPhrase.split(' ')
        words.forEach(function(word){
            firstLetter = word[0];
        }
});
});