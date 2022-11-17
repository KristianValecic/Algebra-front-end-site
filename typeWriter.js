$(document).ready(function(){
  let slovo = 0; //radi indeksiranja
  let index = 0;
  let texts = ["Budi izvrstan u onom što ", "vidiš! ", "voliš. ", "zaiskri", "."];//Budi izvrstan u onom, idiš, oliš, iskri
  let rijec = [];
  let zaiskri = false;
  let brzina = 200;
  let brisi = false;

  $.fn.pisacaMasina = function(){
    setTimeout(function() {
      if(index < texts.length){
        if (!zaiskri && index != texts.length-1){
          $("#PocetnaPoruka").text(rijec.join(''));
        }
        if (index === 3 && slovo < 0) { //zaiskri
          $('<br>').insertBefore('#CursorBlinker')
            $('<span id="PocetnaPoruka2"></span>').insertBefore('#CursorBlinker')
            zaiskri = true;
        }
        if (zaiskri && index != texts.length-1){
            $("#PocetnaPoruka2").append(texts[index][slovo]);
        }
        else if(zaiskri && index === texts.length-1){
          zaiskri = false;
          $('<p id="PocetnaPorukaTocka"></p>').insertBefore('#CursorBlinker')
          slovo++;
          $("#PocetnaPorukaTocka").append(texts[index][slovo]);
        }

        if (!brisi && slovo < texts[index].length) {
          if (!zaiskri) {
            rijec.push(texts[index][slovo]);
          }
          console.log(slovo);
          slovo++;
          if(index === 1 && slovo === texts[1].length){
            brisi = true;
          }
        }
        else if(slovo === texts[index].length){
          index++;
          slovo = -1;
        }

        if (brisi && slovo >= 0){
          slovo--;
          rijec.pop(texts[index][slovo]);
          console.log('brisi', slovo);
        }
        else if(brisi && slovo < 0){
          brisi = false;
          index++;
        }
      }
      $.fn.pisacaMasina();
  }, brzina);
}


  $(document).ready(function(){
      $.fn.pisacaMasina();
  });

});
