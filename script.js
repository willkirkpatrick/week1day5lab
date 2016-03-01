
$(document).ready (function () {
    $("#keyboard-upper-container").hide();  
    $(document).keydown(function(e) {
        if(e.which === 16){
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
            
        }
    });
    $(document).keyup(function(e) {
        if(e.which === 16){
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
            
        }
    });
     var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

        
     $(document).keypress(function(e) {
            var s = 0;
            var l = 0;
            $('#words').html(sentences[s]); 
            var x = String(e.which);
            $('#' + x).css("background-color", "#00ffff");
            $('#block').animate({left: '+=15px'},'fast');
            $('#words').charAt(i);
            if ()
            $(document).keyup(function(e) {
                $('#' + x).css("background-color", "white");
            });
      });
    
    
      
    
    
    
        
        /*for (var i = 0; i < sentences[s].length; i ++) {
            var l = sentences[s].charAt(i);
            var cc = ("'" + l + "'").charCodeAt(i);
            console.log('var cc = ', cc);
           
        }*/
    
});  //end of document ready//

    
   
