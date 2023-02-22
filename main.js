var SpeechRecognition=window.webkitSpeechRecognition;
var Recgonition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    Recgonition.start();


}
Recgonition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
}