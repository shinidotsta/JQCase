

$(document).ready(function()
{
  var len=  $("#list").find('li').length;
  $("#count").val(len);

    $("#adbtn").click(function()
    {
        var len=  $("#list").find('li').length;
        $("#count").val(++len);

        var adl=document.createElement('li');
        var gttext=document.createTextNode($("#adTxt").val());
        adl.appendChild(gttext);
        var position=document.getElementsByTagName('ul')[0];
        position.appendChild(adl);
        $("#list").click(function(e)
        { 
        
            $(e.target).remove();
            var len=  $("#list").find('li').length;
            $("#count").val(len--);
        });
    });
    
});
   
