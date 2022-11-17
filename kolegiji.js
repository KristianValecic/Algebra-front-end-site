const url = 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan';

let pojediniURL = 'http://www.fulek.com/VUA/supit/GetKolegij/';

$(document).ready(function(){
  var id;
  let index = 0;
  let ects = 0;
  let sati = 0;

$.fn.DisplaySum = function(){
  $("#ECTSContainer").text(ects);
  $("#SatiContainer").text(sati);
}

  $.getJSON(url, function(result){

    $( "#searchbar input[type=text]" ).autocomplete({
      source: result,
      focus: function( event, ui ) {
        $( "#searchbar input[type=text]" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#searchbar input[type=text]" ).val( ui.item.label );
        id = ui.item.value;
        return false;
      }
    });               //-------------------------Mozda makni da moras 2 puta enter stisnut popravi dizajn--------------------------------------
      $(document).keypress(function(e){
        if(e.charCode == 13 ){
            $.getJSON(pojediniURL+id, function(resultID){
              ects += resultID.ects;
              sati += resultID.sati;
              $("#tableHeadPlan").after("<tr class='tableData'>"+
              "<td>"+  resultID.kolegij + "</td>" +
              "<td id='ects"+index+"'>" + resultID.ects  + "</td>" +
              "<td id='sati"+index+"'>" + resultID.sati  + "</td>" +
              "<td>" + resultID.predavanja  + "</td>" +
              "<td>" + resultID.vjezbe  + "</td>" +
              "<td>" + resultID.tip  + "</td>" +
              "<td><button id='obrisi"+index+"'>Obriši</button></td></tr>");
              $("#tablicaKolegija tr").css("display", "block");
              $.fn.DisplaySum();
            });
            index++;
          }
        });
      $("#tablicaKolegija").on("click", "button", function(e){
        let str = e.target.id.split("")
        ects -= parseInt($("#ects"+str[str.length-1]).text());
        sati -= parseInt($("#sati"+str[str.length-1]).text());

        $.fn.DisplaySum();

        $("#"+e.target.id).parent().parent().remove();

        if ($("#tablicaKolegija").find(".tableData").length == 0){
          $("#tablicaKolegija tr").css("display", "none");
        }
      });
  });
});
