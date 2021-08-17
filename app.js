var btntranslate=document.querySelector("#translate-btn");
var inputtranslate=document.querySelector("#translate-input");
var outputtranslate=document.querySelector("#translate-output");

var serverURL="https://api.funtranslations.com/translate/minion.json"



function getTranslationURL(text){
return serverURL+"?"+"text="+text
}
function errorHandler(error){
    console.log("error occured ",error);
    alert("something is wrong with server! Please try after some time");
}



function clickHandler(){
// outputtranslate.innerText="translated "+inputtranslate.value;

var inputtext=inputtranslate.value;
fetch(getTranslationURL(inputtext))
.then(Response=>Response.json())
.then(json=>{
    var outputtext=json.contents.translated;
    outputtranslate.innerText=outputtext;
 } )
.catch(errorHandler)
};

btntranslate.addEventListener("click" , clickHandler);