var jsl=typeof jsl==='undefined'?{}:jsl;$.fn.caret=function(begin,end){if(this.length===0){return}if(typeof begin==='number'){end=(typeof end==='number')?end:begin;
return this.each(function(){if(this.setSelectionRange){this.focus();
this.setSelectionRange(begin,end)}else if(this.createTextRange){var range=this.createTextRange();
range.collapse(true);range.moveEnd('character',end);
range.moveStart('character',begin);
range.select()}})}else{if(this[0].setSelectionRange){begin=this[0].selectionStart;end=this[0].selectionEnd}else if(document.selection&&document.selection.createRange){var range=document.selection.createRange();
begin=-range.duplicate().moveStart('character',-100000);
end=begin+range.text.length}return{"begin":begin,"end":end}}};
jsl.interactions=(function(){var reformatParam,reformat,compress;
function getNthPos(searchStr,char,pos){var i,charCount=0,strArr=searchStr.split(char);
if(pos===0){return 0}for(i=0;i<pos;i++){if(i>=strArr.length){return-1}charCount+=strArr[i].length+char.length}return charCount}
function getURLParameter(name){param=(new RegExp(name+'=(.+?)(&|$)').exec(location.search)||['',null])[1];
if(param){return decodeURIComponent(param)}else{return null}}
function validate(){var lineNum,lineMatches,lineStart,lineEnd,jsonVal,result;jsonVal=$('#json_input').val();
try{result=jsl.parser.parse(jsonVal);
if(result){$('#results').show().removeClass('error').addClass('success');
$('div.linedwrap').removeClass('redBorder').addClass('greenBorder');
$('#results').text('Valid JSON');
if(reformat){$('#json_input').val(JSON.stringify(JSON.parse(jsonVal),null,"    "))}
if(compress){$('#json_input').val(JSON.stringify(JSON.parse(jsonVal),null,""))}}else{alert("An unknown error occurred. Please contact Arc90.")}}catch(parseException){try{if(reformat){jsonVal=jsl.format.formatJson($('#json_input').val());
$('#json_input').val(jsonVal);result=jsl.parser.parse($('#json_input').val())}}catch(e){parseException=e}lineMatches=parseException.message.match(/line ([0-9]*)/);
if(lineMatches&&typeof lineMatches==="object"&&lineMatches.length>1){lineNum=parseInt(lineMatches[1],10);
if(lineNum===1){lineStart=0}else{lineStart=getNthPos(jsonVal,"\n",lineNum-1)}lineEnd=jsonVal.indexOf("\n",lineStart);
if(lineEnd<0){lineEnd=jsonVal.length}$('#json_input').focus().caret(lineStart,lineEnd)}$('#results').text(parseException.message);
$('#results').show().removeClass('success').addClass('error');
$('div.linedwrap').removeClass('greenBorder').addClass('redBorder')}$('#loadSpinner').hide()}function init(){reformatParam=getURLParameter('reformat');
reformat=reformatParam!=='0'&&reformatParam!=='no';compress=reformatParam==='compress',jsonParam=getURLParameter('json');
if(compress){$('#headerText').html('JSONLint<span class="light">Compressor</span>')}if(!reformat){$('#headerText').html('JSONLint<span class="light">Lite</span>')}$('#validate').click(function(){$('#results_header, #loadSpinner').show();
var jsonVal=$.trim($('#json_input').val());
if(jsonVal.substring(0,4).toLowerCase()==="http"){$.post("proxy.php",{"url":jsonVal},function(responseObj){$('#json_input').val(responseObj.content);validate()},'json')}else{validate()}return false});
(function($){ $('#json_input').keyup(function(){$('div.linedwrap').removeClass('greenBorder').removeClass('redBorder')}).linedtextarea({selectedClass:'lineselect'}).focus()})(jQuery);
$('#reset').click(function(){$('#json_input').val('').focus()});
$('#faqButton').click(function(){$('#faq').slideToggle()});
if(jsonParam){$('#json_input').val(jsonParam);$('#validate').click()}}return{'init':init}}());$(function(){jsl.interactions.init()});