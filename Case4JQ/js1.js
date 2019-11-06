   function compile()
    {
        var h=document.getElementById('html');
        var c=document.getElementById('css');
        var j=document.getElementById('js');
        var code=document.getElementById('frame').contentWindow.document;
        document.body.onkeyup=function()
        {
           code.open();
           code.writeln(h.value+"<style>"+c.value+"</Style>"+"<script>"+j.value+"</script>");
           code.close();
        };
    };
compile();