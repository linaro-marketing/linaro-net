---
layout: default
title: Form test page
---

This is a simple page used to test form options.

<STYLE TYPE='text/css'>
#loading{
display:none;
vertical-align:baseline;
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
z-index:1000;}
#loadingcontent{
position:fixed;
left:20%;
top:35%;
width:50%;
height:50%;}
#loadingspinner{
vertical-align:baseline;
width: 10%;
text-align: center;
font-size:larger;}
textarea { width: 100%; margin: 0; padding: 0; border-width: 1; }
.feedback-summary { width: 100%; margin: 0; padding: 0; border-width: 1; }
BODY, input, select, table {
font-size: 12px;font-family: Arial,Helvetica,FreeSans,'sans - serif';}
#captcha{margin-bottom:0;padding-bottom:0}#captcha .captcha-container{clear:none;margin:5px 0 0 0;min-height:0;overflow:hidden;padding:0} #captcha .captcha-container .captcha-image{float:left}#captcha .captcha-container .captcha-trigger{float:left} #captcha .captcha-container .captcha-trigger .content{margin:0;overflow:hidden;text-align:left;text-indent:-999em;width:0} #captcha .captcha-container .icon-reload{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEX///9wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAAAAAM3lI2AAAADnRSTlMAESIzRFVmiJmqu8zd7qUOxRYAAAB3SURBVHjaY2axe9y7PGDtDyZGg+zYTvZDDExMpvWpnZb/GZgYPb5tYPhpDxRhnMvAwPCBgYmZITMAyGJgYTyz5wMDMmAEk+7GKUwQbooAM5hxR14HKKLAwMAc/x/I2CHA4PVzH1AqqECgq+wzkLEj3GtqPyfcHAB0GR2Spl8/YwAAAABJRU5ErkJggg==")} </STYLE>
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.4/jquery.datetimepicker.css"> <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.4/build/jquery.datetimepicker.full.js'></script> <link rel="stylesheet" type="text/css" href="//aui-cdn.atlassian.com/aui-adg/5.4.3/css/aui.css"> <div id="loading">
<div id="loadingcontent">
<span id='loadingspinner' class='aui-icon aui-icon-wait'>Loading...</span>
</div>
</div>
<div id='feedback-main-div' style='font-size: 12px; font-family: Arial,Helvetica,FreeSans,sans-serif'>
<div id='feedback-error'></div>
<form class='aui' enctype='multipart/form-data' id='feedback-form' name='feedback-form' target='feedback-response' method='post' action='https://servicedesk.linaro.org/plugins/servlet/feedback/create'>
<input type='hidden' name='form-index' id='form-index' value='1'/>
<input type='hidden' name='feedback-from-url' id='feedback-from-url' value=''/>
<div><select id='feedback-priority' class='select' name='feedback-priority'>
<option value='' selected >Priority</option>
<option value='10200'>Severity 0 - Emergency</option>
<option value='10000'>Business Critical</option>
<option value='10201'>Severity 1 - Critical</option>
<option value='10001'>Degraded Service</option>
<option value='10202'>Severity 2 - High</option>
<option value='10002'>General Issue</option>
<option value='10203'>Severity 3 - Normal</option>
<option value='10100'>Blocker</option>
<option value='10101'>High</option>
<option value='10102'>Medium</option>
<option value='10103'>Low</option>
<option value='10104'>Minor</option>
<option value='10204'>Severity 4 - Feature Request</option>
</select>
</div>
<br> <div><input type='text' class='text long-field' id='feedback-summary' name='feedback-summary' class='feedback-summary' placeholder='Summary' value=''/></div>
<br> <div style='display:none;'><input type='text' class='text long-field' id='feedback-language' name='feedback-language' class='feedback-language' placeholder='Выберите язык (en/ru)' value='ru'/></div>
<div><TEXTAREA id='feedback-body' class='textarea long-field' name='feedback-body' ROWS='5' placeholder='You can specify the details ...'></TEXTAREA></div>
<br> <div><input type='text' class='text long-field' id='customfield_12401' name='customfield_12401' placeholder='Company' size='38' value=''/></div>
<br>
<div><input type='text' class='text long-field' id='customfield_10902' name='customfield_10902' placeholder='First name' size='38' value=''/></div>
<br>
<div><input type='text' class='text long-field' id='customfield_10903' name='customfield_10903' placeholder='Last name' size='38' value=''/></div>
<br>
<input type='text' class='text long-field' id='feedback-email' name='feedback-email' placeholder='E-mail' size='38' value=''/>
<br>
<div>
<input type='button' class='aui-button' value=' Submit ' onclick='addFeedback()'/>
</div>
</form></div>
<div id='feedback-back' class='aui' style='display: none'><input type='button' class='aui-button' onclick="jQuery('#feedback-main-div').show();jQuery('#feedback-response').hide();jQuery('#feedback-back').hide();" value='Back'/></div><iframe id='feedback-response' name='feedback-response' frameborder='no' style='display: none' width='500' height='250'></iframe><script type='text/javascript'>
JIRACaptcha = { setup: function() { jQuery("#captcha").delegate("span.captcha-reload", "click", function (e) { JIRACaptcha.refresh(); e.preventDefault(); }); }, refresh: function() { var img = jQuery(".captcha-image", "#captcha .captcha-container"), src = img.attr("src"); if (src.indexOf("__r") >= 0) { src = src.replace(/__r=([^&]+)/, "__r=" + Math.random()); } else { src = src.indexOf('?') >= 0 ? (src + "&__r=" + Math.random()) : (src + "?__r=" + Math.random()); } img.attr("src", src); jQuery("#captcha .captcha-response").focus(); } }; jQuery(window).load(function()
{
   jQuery('.datetimepicker').each(function() {
   jQuery(this).datetimepicker({
   timepicker:false,
   format:'d.m.Y'
   });
   });
   jQuery('.datetimepicker-time').each(function() {
   jQuery(this).datetimepicker({
   timepicker:true,
   format:'d.m.Y H:i'
   });
   });
   jQuery(JIRACaptcha.setup);
   jQuery('#feedback-main-div').show();
   jQuery('#feedback-new-issue-div').hide();
   jQuery('#feedback-response').hide();
   jQuery('#feedback-new-issue-button').click(function ()
   {
    jQuery('#feedback-form')[0].reset();
    jQuery('#feedback-main-div').show();
    jQuery('#feedback-new-issue-div').hide();
    jQuery('#feedback-response').hide();
   });
});

function isValidEmail(email ) {

var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)\*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
}
function addFeedback() {
    var message = '';
   var summary = jQuery('#feedback-summary').val();
   var email = jQuery('#feedback-email').val();
   if (summary == '' || email == '')
   {
    if (summary == '')
    {
     message = message + '<div>Enter the summary</div>';
    }
    if (email == '')
    {
     message = message + '<div>Enter E-mail</div>';
    }
    jQuery('#feedback-error').html(message);
    return false;
}
if (!isValidEmail(email )) {
    jQuery('#feedback-error').html('<div>E-mail address is in an Invalid format!</div>');
    return false;
}   jQuery('#feedback-error').html('');
   jQuery('#feedback-main-div').hide();
   jQuery('#loading').fadeIn();
   window.top.$('#feedback-response').attr('src','about:blank'); jQuery('#feedback-response').show();
jQuery('#feedback-back').show();
jQuery('#feedback-from-url').val(location.href);
jQuery('#feedback-form').submit();
jQuery('#feedback-response').on("load", function() {
jQuery('#feedback-new-issue-div').show();
jQuery('#loading').fadeOut();
});
return false;
}
</script>
