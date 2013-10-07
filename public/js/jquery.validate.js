(function(a){a.fn.validationEngineLanguage=function(){};a.validationEngineLanguage={newLang:function(){a.validationEngineLanguage.allRules={required:{regex:"none",alertText:"* Este campo Ã© obrigatÃ³rio",alertTextCheckboxMultiple:"* Favor selecionar uma opÃ§Ã£o",alertTextCheckboxe:"* Este checkbox Ã© obrigatÃ³rio",alertTextDateRange:"* Ambas as datas do intervalo sÃ£o obrigatÃ³rias"},requiredInFunction:{func:function(d,e,c,b){return(d.val()=="test")?true:false},alertText:"* Field must equal test"},dateRange:{regex:"none",alertText:"* Intervalo de datas invÃ¡lido"},dateTimeRange:{regex:"none",alertText:"* Intervalo de data e hora invÃ¡lido"},minSize:{regex:"none",alertText:"* Permitido o mÃ­nimo de ",alertText2:" caractere(s)"},maxSize:{regex:"none",alertText:"* Permitido o mÃ¡ximo de ",alertText2:" caractere(s)"},groupRequired:{regex:"none",alertText:"* VocÃª deve preencher um dos seguintes campos"},min:{regex:"none",alertText:"* Valor mÃ­nimo Ã© "},max:{regex:"none",alertText:"* Valor mÃ¡ximo Ã© "},past:{regex:"none",alertText:"* Data anterior a "},future:{regex:"none",alertText:"* Data posterior a "},maxCheckbox:{regex:"none",alertText:"* MÃ¡ximo de ",alertText2:" opÃ§Ãµes permitidas"},minCheckbox:{regex:"none",alertText:"* Favor selecionar ",alertText2:" opÃ§Ã£o(Ãµes)"},equals:{regex:"none",alertText:"* Os campos nÃ£o correspondem"},creditCard:{regex:"none",alertText:"* NÃºmero de cartÃ£o de crÃ©dito invÃ¡lido"},phone:{regex:/^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,alertText:"* NÃºmero de telefone invÃ¡lido"},email:{regex:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,alertText:"* EndereÃ§o de email invÃ¡lido"},integer:{regex:/^[\-\+]?\d+$/,alertText:"* NÃºmero inteiro invÃ¡lido"},number:{regex:/^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,alertText:"* NÃºmero decimal invÃ¡lido"},date:{regex:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,alertText:"* Data invÃ¡lida, deve ser no formato AAAA-MM-DD"},ipv4:{regex:/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,alertText:"* EndereÃ§o IP invÃ¡lido"},url:{regex:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,alertText:"* URL invÃ¡lida"},onlyNumberSp:{regex:/^[0-9\ ]+$/,alertText:"* Apenas nÃºmeros"},onlyLetterSp:{regex:/^[a-zA-Z\ \']+$/,alertText:"* Apenas letras"},onlyLetterNumber:{regex:/^[0-9a-zA-Z]+$/,alertText:"* NÃ£o sÃ£o permitidos caracteres especiais"},real:{regex:/^([1-9]{1}[\d]{0,2}(\.[\d]{3})*(\,[\d]{0,2})?|[1-9]{1}[\d]{0,}(\,[\d]{0,2})?|0(\,[\d]{0,2})?|(\,[\d]{1,2})?)$/,alertText:"* NÃºmero decimal invÃ¡lido"}}}};a.validationEngineLanguage.newLang()})(jQuery);(function(b){var a={init:function(c){var d=this;if(!d.data("jqv")||d.data("jqv")==null){c=a._saveOptions(d,c);b(document).on("click",".formError",function(){b(this).fadeOut(150,function(){b(this).parent(".formErrorOuter").remove();b(this).remove()})})}return this},attach:function(e){if(!b(this).is("form")){alert("Sorry, jqv.attach() only applies to a form");return this}var d=this;var c;if(e){c=a._saveOptions(d,e)}else{c=d.data("jqv")}c.validateAttribute=(d.find("[data-validation-engine*=validate]").length)?"data-validation-engine":"class";if(c.binded){d.find("["+c.validateAttribute+"*=validate]").not("[type=checkbox]").not("[type=radio]").not(".datepicker").bind(c.validationEventTrigger,a._onFieldEvent);d.find("["+c.validateAttribute+"*=validate][type=checkbox],["+c.validateAttribute+"*=validate][type=radio]").bind("click",a._onFieldEvent);d.find("["+c.validateAttribute+"*=validate][class*=datepicker]").bind(c.validationEventTrigger,{delay:300},a._onFieldEvent)}if(c.autoPositionUpdate){b(window).bind("resize",{noAnimation:true,formElem:d},a.updatePromptsPosition)}d.bind("submit",a._onSubmitEvent);return this},detach:function(){if(!b(this).is("form")){alert("Sorry, jqv.detach() only applies to a form");return this}var d=this;var c=d.data("jqv");d.find("["+c.validateAttribute+"*=validate]").not("[type=checkbox]").unbind(c.validationEventTrigger,a._onFieldEvent);d.find("["+c.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").unbind("click",a._onFieldEvent);d.unbind("submit",a.onAjaxFormComplete);d.find("["+c.validateAttribute+"*=validate]").not("[type=checkbox]").die(c.validationEventTrigger,a._onFieldEvent);d.find("["+c.validateAttribute+"*=validate][type=checkbox]").die("click",a._onFieldEvent);d.die("submit",a.onAjaxFormComplete);d.removeData("jqv");if(c.autoPositionUpdate){b(window).unbind("resize",a.updatePromptsPosition)}return this},validate:function(){var d=b(this);var f=null;if(d.is("form")&&!d.hasClass("validating")){d.addClass("validating");var c=d.data("jqv");f=a._validateFields(this);setTimeout(function(){d.removeClass("validating")},100);if(f&&c.onFormSuccess){c.onFormSuccess()}else{if(!f&&c.onFormFailure){c.onFormFailure()}}}else{if(d.is("form")){d.removeClass("validating")}else{var e=d.closest("form");var c=e.data("jqv");f=a._validateField(d,c);if(f&&c.onFieldSuccess){c.onFieldSuccess()}else{if(c.onFieldFailure&&c.InvalidFields.length>0){c.onFieldFailure()}}}}return f},updatePromptsPosition:function(f){if(f&&this==window){var e=f.data.formElem;var c=f.data.noAnimation}else{var e=b(this.closest("form"))}var d=e.data("jqv");e.find("["+d.validateAttribute+"*=validate]").not(":disabled").each(function(){var i=b(this);if(d.prettySelect&&i.is(":hidden")){i=e.find("#"+d.usePrefix+i.attr("id")+d.useSuffix)}var g=a._getPrompt(i);var h=b(g).find(".formErrorContent").html();if(g){a._updatePrompt(i,b(g),h,undefined,false,d,c)}});return this},showPrompt:function(d,f,h,e){var g=this.closest("form");var c=g.data("jqv");if(!c){c=a._saveOptions(this,c)}if(h){c.promptPosition=h}c.showArrow=e==true;a._showPrompt(this,d,f,false,c);return this},hide:function(){var f=b(this).closest("form");var d=f.data("jqv");var e=(d&&d.fadeDuration)?d.fadeDuration:0.3;var c;if(b(this).is("form")){c="parentForm"+a._getClassName(b(this).attr("id"))}else{c=a._getClassName(b(this).attr("id"))+"formError"}b("."+c).fadeTo(e,0.3,function(){b(this).parent(".formErrorOuter").remove();b(this).remove()});return this},hideAll:function(){var d=this;var c=d.data("jqv");var e=c?c.fadeDuration:0.3;b(".formError").fadeTo(e,0.3,function(){b(this).parent(".formErrorOuter").remove();b(this).remove()});return this},_onFieldEvent:function(e){var f=b(this);var d=f.closest("form");var c=d.data("jqv");c.eventTrigger="field";window.setTimeout(function(){a._validateField(f,c);if(c.InvalidFields.length==0&&c.onFieldSuccess){c.onFieldSuccess()}else{if(c.InvalidFields.length>0&&c.onFieldFailure){c.onFieldFailure()}}},(e.data)?e.data.delay:0)},_onSubmitEvent:function(){var e=b(this);var c=e.data("jqv");c.eventTrigger="submit";var d=a._validateFields(e);if(d&&c.ajaxFormValidation){a._validateFormWithAjax(e,c);return false}if(c.onValidationComplete){return !!c.onValidationComplete(e,d)}return d},_checkAjaxStatus:function(d){var c=true;b.each(d.ajaxValidCache,function(e,f){if(!f){c=false;return false}});return c},_checkAjaxFieldStatus:function(c,d){return d.ajaxValidCache[c]==true},_validateFields:function(e){var m=e.data("jqv");var f=false;e.trigger("jqv.form.validating");var n=null;e.find("["+m.validateAttribute+"*=validate]").not(":disabled").each(function(){var p=b(this);var o=[];if(b.inArray(p.attr("name"),o)<0){f|=a._validateField(p,m);if(f&&n==null){if(p.is(":hidden")&&m.prettySelect){n=p=e.find("#"+m.usePrefix+a._jqSelector(p.attr("id"))+m.useSuffix)}else{n=p}}if(m.doNotShowAllErrosOnSubmit){return false}o.push(p.attr("name"));if(m.showOneMessage==true&&f){return false}}});e.trigger("jqv.form.result",[f]);if(f){if(m.scroll){var l=n.offset().top;var h=n.offset().left;var j=m.promptPosition;if(typeof(j)=="string"&&j.indexOf(":")!=-1){j=j.substring(0,j.indexOf(":"))}if(j!="bottomRight"&&j!="bottomLeft"){var i=a._getPrompt(n);if(i){l=i.offset().top}}if(m.isOverflown){var c=b(m.overflownDIV);if(!c.length){return false}var d=c.scrollTop();var g=-parseInt(c.offset().top);l+=d+g-5;var k=b(m.overflownDIV+":not(:animated)");k.animate({scrollTop:l},1100,function(){if(m.focusFirstField){n.focus()}})}else{b("body,html").stop().animate({scrollTop:l,scrollLeft:h},1100,function(){if(m.focusFirstField){n.focus()}})}}else{if(m.focusFirstField){n.focus()}}return false}return true},_validateFormWithAjax:function(g,e){var h=g.serialize();var f=(e.ajaxmethod)?e.ajaxmethod:"GET";var d=(e.ajaxFormValidationURL)?e.ajaxFormValidationURL:g.attr("action");var c=(e.dataType)?e.dataType:"json";b.ajax({type:f,url:d,cache:false,dataType:c,data:h,form:g,methods:a,options:e,beforeSend:function(){return e.onBeforeAjaxFormValidation(g,e)},error:function(i,j){a._ajaxError(i,j)},success:function(n){if((c=="json")&&(n!==true)){var l=false;for(var m=0;m<n.length;m++){var o=n[m];var q=o[0];var k=b(b("#"+q)[0]);if(k.length==1){var p=o[2];if(o[1]==true){if(p==""||!p){a._closePrompt(k)}else{if(e.allrules[p]){var j=e.allrules[p].alertTextOk;if(j){p=j}}a._showPrompt(k,p,"pass",false,e,true)}}else{l|=true;if(e.allrules[p]){var j=e.allrules[p].alertText;if(j){p=j}}a._showPrompt(k,p,"",false,e,true)}}}e.onAjaxFormComplete(!l,g,n,e)}else{e.onAjaxFormComplete(true,g,n,e)}}})},_validateField:function(c,k,r){if(!c.attr("id")){c.attr("id","form-validation-field-"+b.validationEngine.fieldIdCounter);++b.validationEngine.fieldIdCounter}if(c.is(":hidden")&&!k.prettySelect||c.parent().is(":hidden")){return false}var t=c.attr(k.validateAttribute);var y=/validate\[(.*)\]/.exec(t);if(!y){return false}var u=y[1];var q=u.split(/\[|,|\]/);var n=false;var h=c.attr("name");var g="";var x="";var s=false;var z=false;k.isError=false;k.showArrow=true;if(k.maxErrorsPerField>0){z=true}var d=b(c.closest("form"));for(var w in q){q[w]=q[w].replace(" ","");if(q[w]===""){delete q[w]}}for(var w=0,m=0;w<q.length;w++){if(z&&m>=k.maxErrorsPerField){if(!s){var j=b.inArray("required",q);s=(j!=-1&&j>=w)}break}var f=undefined;switch(q[w]){case"required":s=true;f=a._getErrorMessage(d,c,q[w],q,w,k,a._required);break;case"custom":f=a._getErrorMessage(d,c,q[w],q,w,k,a._custom);break;case"groupRequired":var v="["+k.validateAttribute+"*="+q[w+1]+"]";var e=d.find(v).eq(0);if(e[0]!=c[0]){a._validateField(e,k,r);k.showArrow=true;continue}f=a._getErrorMessage(d,c,q[w],q,w,k,a._groupRequired);if(f){s=true}k.showArrow=false;break;case"ajax":f=a._ajax(c,q,w,k);if(f){x="load"}break;case"minSize":f=a._getErrorMessage(d,c,q[w],q,w,k,a._minSize);break;case"maxSize":f=a._getErrorMessage(d,c,q[w],q,w,k,a._maxSize);break;case"min":f=a._getErrorMessage(d,c,q[w],q,w,k,a._min);break;case"max":f=a._getErrorMessage(d,c,q[w],q,w,k,a._max);break;case"past":f=a._getErrorMessage(d,c,q[w],q,w,k,a._past);break;case"future":f=a._getErrorMessage(d,c,q[w],q,w,k,a._future);break;case"dateRange":var v="["+k.validateAttribute+"*="+q[w+1]+"]";k.firstOfGroup=d.find(v).eq(0);k.secondOfGroup=d.find(v).eq(1);if(k.firstOfGroup[0].value||k.secondOfGroup[0].value){f=a._getErrorMessage(d,c,q[w],q,w,k,a._dateRange)}if(f){s=true}k.showArrow=false;break;case"dateTimeRange":var v="["+k.validateAttribute+"*="+q[w+1]+"]";k.firstOfGroup=d.find(v).eq(0);k.secondOfGroup=d.find(v).eq(1);if(k.firstOfGroup[0].value||k.secondOfGroup[0].value){f=a._getErrorMessage(d,c,q[w],q,w,k,a._dateTimeRange)}if(f){s=true}k.showArrow=false;break;case"maxCheckbox":c=b(d.find("input[name='"+h+"']"));f=a._getErrorMessage(d,c,q[w],q,w,k,a._maxCheckbox);break;case"minCheckbox":c=b(d.find("input[name='"+h+"']"));f=a._getErrorMessage(d,c,q[w],q,w,k,a._minCheckbox);break;case"equals":f=a._getErrorMessage(d,c,q[w],q,w,k,a._equals);break;case"funcCall":f=a._getErrorMessage(d,c,q[w],q,w,k,a._funcCall);break;case"creditCard":f=a._getErrorMessage(d,c,q[w],q,w,k,a._creditCard);break;case"condRequired":f=a._getErrorMessage(d,c,q[w],q,w,k,a._condRequired);if(f!==undefined){s=true}break;default:}var l=false;if(typeof f=="object"){switch(f.status){case"_break":l=true;break;case"_error":f=f.message;break;case"_error_no_prompt":return true;break;default:break}}if(l){break}if(typeof f=="string"){g+=f+"<br/>";k.isError=true;m++}}if(!s&&c.val().length<1){k.isError=false}var o=c.prop("type");if((o=="radio"||o=="checkbox")&&d.find("input[name='"+h+"']").size()>1){c=b(d.find("input[name='"+h+"'][type!=hidden]:first"));k.showArrow=false}if(c.is(":hidden")&&k.prettySelect){c=d.find("#"+k.usePrefix+a._jqSelector(c.attr("id"))+k.useSuffix)}if(k.isError){a._showPrompt(c,g,x,false,k)}else{if(!n){a._closePrompt(c)}}if(!n){c.trigger("jqv.field.result",[c,k.isError,g])}var p=b.inArray(c[0],k.InvalidFields);if(p==-1){if(k.isError){k.InvalidFields.push(c[0])}}else{if(!k.isError){k.InvalidFields.splice(p,1)}}a._handleStatusCssClasses(c,k);return k.isError},_handleStatusCssClasses:function(d,c){if(c.addSuccessCssClassToField){d.removeClass(c.addSuccessCssClassToField)}if(c.addFailureCssClassToField){d.removeClass(c.addFailureCssClassToField)}if(c.addSuccessCssClassToField&&!c.isError){d.addClass(c.addSuccessCssClassToField)}if(c.addFailureCssClassToField&&c.isError){d.addClass(c.addFailureCssClassToField)}},_getErrorMessage:function(c,n,l,p,g,q,m){var k=l;if(l=="custom"){var d=jQuery.inArray(l,p)+1;var o=p[d];l="custom["+o+"]"}var e=(n.attr("data-validation-engine"))?n.attr("data-validation-engine"):n.attr("class");var h=e.split(" ");var j;if(l=="future"||l=="past"||l=="maxCheckbox"||l=="minCheckbox"){j=m(c,n,p,g,q)}else{j=m(n,p,g,q)}if(j!=undefined){var f=a._getCustomErrorMessage(b(n),h,k,q);if(f){j=f}}return j},_getCustomErrorMessage:function(j,e,h,l){var f=false;var d=a._validityProp[h];if(d!=undefined){f=j.attr("data-errormessage-"+d);if(f!=undefined){return f}}f=j.attr("data-errormessage");if(f!=undefined){return f}var c="#"+j.attr("id");if(typeof l.custom_error_messages[c]!="undefined"&&typeof l.custom_error_messages[c][h]!="undefined"){f=l.custom_error_messages[c][h]["message"]}else{if(e.length>0){for(var g=0;g<e.length&&e.length>0;g++){var k="."+e[g];if(typeof l.custom_error_messages[k]!="undefined"&&typeof l.custom_error_messages[k][h]!="undefined"){f=l.custom_error_messages[k][h]["message"];break}}}}if(!f&&typeof l.custom_error_messages[h]!="undefined"&&typeof l.custom_error_messages[h]["message"]!="undefined"){f=l.custom_error_messages[h]["message"]}return f},_validityProp:{required:"value-missing",custom:"custom-error",groupRequired:"value-missing",ajax:"custom-error",minSize:"range-underflow",maxSize:"range-overflow",min:"range-underflow",max:"range-overflow",past:"type-mismatch",future:"type-mismatch",dateRange:"type-mismatch",dateTimeRange:"type-mismatch",maxCheckbox:"range-overflow",minCheckbox:"range-underflow",equals:"pattern-mismatch",funcCall:"custom-error",creditCard:"pattern-mismatch",condRequired:"value-missing"},_required:function(g,h,e,d){switch(g.prop("type")){case"text":case"password":case"textarea":case"file":case"select-one":case"select-multiple":default:if(!b.trim(g.val())||g.val()==g.attr("data-validation-placeholder")||g.val()==g.attr("placeholder")){return d.allrules[h[e]].alertText}break;case"radio":case"checkbox":var f=g.closest("form");var c=g.attr("name");if(f.find("input[name='"+c+"']:checked").size()==0){if(f.find("input[name='"+c+"']:visible").size()==1){return d.allrules[h[e]].alertTextCheckboxe}else{return d.allrules[h[e]].alertTextCheckboxMultiple}}break}},_groupRequired:function(f,h,d,c){var g="["+c.validateAttribute+"*="+h[d+1]+"]";var e=false;f.closest("form").find(g).each(function(){if(!a._required(b(this),h,d,c)){e=true;return false}});if(!e){return c.allrules[h[d]].alertText}},_custom:function(j,k,d,l){var c=k[d+1];var g=l.allrules[c];var h;if(!g){alert("jqv:custom rule not found - "+c);return}if(g.regex){var f=g.regex;if(!f){alert("jqv:custom regex not found - "+c);return}var e=new RegExp(f);if(!e.test(j.val())){return l.allrules[c].alertText}}else{if(g.func){h=g.func;if(typeof(h)!=="function"){alert("jqv:custom parameter 'function' is no function - "+c);return}if(!h(j,k,d,l)){return l.allrules[c].alertText}}else{alert("jqv:custom type not allowed "+c);return}}},_funcCall:function(j,k,d,c){var h=k[d+1];var f;if(h.indexOf(".")>-1){var g=h.split(".");var e=window;while(g.length){e=e[g.shift()]}f=e}else{f=window[h]||c.customFunctions[h]}if(typeof(f)=="function"){return f(j,k,d,c)}},_equals:function(f,g,e,d){var c=g[e+1];if(f.val()!=b("#"+c).val()){return d.allrules.equals.alertText}},_maxSize:function(h,j,f,e){var d=j[f+1];var c=h.val().length;if(c>d){var g=e.allrules.maxSize;return g.alertText+d+g.alertText2}},_minSize:function(h,j,f,d){var e=j[f+1];var c=h.val().length;if(c<e){var g=d.allrules.minSize;return g.alertText+e+g.alertText2}},_min:function(h,j,f,d){var e=parseFloat(j[f+1]);var c=parseFloat(h.val());if(c<e){var g=d.allrules.min;if(g.alertText2){return g.alertText+e+g.alertText2}return g.alertText+e}},_max:function(h,j,f,e){var d=parseFloat(j[f+1]);var c=parseFloat(h.val());if(c>d){var g=e.allrules.max;if(g.alertText2){return g.alertText+d+g.alertText2}return g.alertText+d}},_past:function(d,j,k,e,m){var c=k[e+1];var g=b(d.find("input[name='"+c.replace(/^#+/,"")+"']"));var f;if(c.toLowerCase()=="now"){f=new Date()}else{if(undefined!=g.val()){if(g.is(":disabled")){return}f=a._parseDate(g.val())}else{f=a._parseDate(c)}}var l=a._parseDate(j.val());if(l>f){var h=m.allrules.past;if(h.alertText2){return h.alertText+a._dateToString(f)+h.alertText2}return h.alertText+a._dateToString(f)}},_future:function(d,j,k,e,m){var c=k[e+1];var g=b(d.find("input[name='"+c.replace(/^#+/,"")+"']"));var f;if(c.toLowerCase()=="now"){f=new Date()}else{if(undefined!=g.val()){if(g.is(":disabled")){return}f=a._parseDate(g.val())}else{f=a._parseDate(c)}}var l=a._parseDate(j.val());if(l<f){var h=m.allrules.future;if(h.alertText2){return h.alertText+a._dateToString(f)+h.alertText2}return h.alertText+a._dateToString(f)}},_isDate:function(d){var c=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);return c.test(d)},_isDateTime:function(d){var c=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);return c.test(d)},_dateCompare:function(d,c){return(new Date(d.toString())<new Date(c.toString()))},_dateRange:function(e,f,d,c){if((!c.firstOfGroup[0].value&&c.secondOfGroup[0].value)||(c.firstOfGroup[0].value&&!c.secondOfGroup[0].value)){return c.allrules[f[d]].alertText+c.allrules[f[d]].alertText2}if(!a._isDate(c.firstOfGroup[0].value)||!a._isDate(c.secondOfGroup[0].value)){return c.allrules[f[d]].alertText+c.allrules[f[d]].alertText2}if(!a._dateCompare(c.firstOfGroup[0].value,c.secondOfGroup[0].value)){return c.allrules[f[d]].alertText+c.allrules[f[d]].alertText2}},_dateTimeRange:function(e,f,d,c){if((!c.firstOfGroup[0].value&&c.secondOfGroup[0].value)||(c.firstOfGroup[0].value&&!c.secondOfGroup[0].value)){return c.allrules[f[d]].alertText+c.allrules[f[d]].alertText2}if(!a._isDateTime(c.firstOfGroup[0].value)||!a._isDateTime(c.secondOfGroup[0].value)){return c.allrules[f[d]].alertText+c.allrules[f[d]].alertText2}if(!a._dateCompare(c.firstOfGroup[0].value,c.secondOfGroup[0].value)){return c.allrules[f[d]].alertText+c.allrules[f[d]].alertText2}},_maxCheckbox:function(h,j,k,g,f){var d=k[g+1];var e=j.attr("name");var c=h.find("input[name='"+e+"']:checked").size();if(c>d){f.showArrow=false;if(f.allrules.maxCheckbox.alertText2){return f.allrules.maxCheckbox.alertText+" "+d+" "+f.allrules.maxCheckbox.alertText2}return f.allrules.maxCheckbox.alertText}},_minCheckbox:function(h,j,k,g,f){var d=k[g+1];var e=j.attr("name");var c=h.find("input[name='"+e+"']:checked").size();if(c<d){f.showArrow=false;return f.allrules.minCheckbox.alertText+" "+d+" "+f.allrules.minCheckbox.alertText2}},_creditCard:function(k,l,f,n){var d=false,m=k.val().replace(/ +/g,"").replace(/-+/g,"");var c=m.length;if(c>=14&&c<=16&&parseInt(m)>0){var g=0,f=c-1,j=1,h,e=new String();do{h=parseInt(m.charAt(f));e+=(j++%2==0)?h*2:h}while(--f>=0);for(f=0;f<e.length;f++){g+=parseInt(e.charAt(f))}d=g%10==0}if(!d){return n.allrules.creditCard.alertText}},_ajax:function(o,r,j,s){var q=r[j+1];var n=s.allrules[q];var e=n.extraData;var l=n.extraDataDynamic;var h={fieldId:o.attr("id"),fieldValue:o.val()};if(typeof e==="object"){b.extend(h,e)}else{if(typeof e==="string"){var k=e.split("&");for(var j=0;j<k.length;j++){var p=k[j].split("=");if(p[0]&&p[0]){h[p[0]]=p[1]}}}}if(l){var g=[];var m=String(l).split(",");for(var j=0;j<m.length;j++){var c=m[j];if(b(c).length){var d=o.closest("form").find(c).val();var f=c.replace("#","")+"="+escape(d);h[c.replace("#","")]=d}}}if(s.eventTrigger=="field"){delete (s.ajaxValidCache[o.attr("id")])}if(!s.isError&&!a._checkAjaxFieldStatus(o.attr("id"),s)){b.ajax({type:s.ajaxFormValidationMethod,url:n.url,cache:false,dataType:"json",data:h,field:o,rule:n,methods:a,options:s,beforeSend:function(){},error:function(i,t){a._ajaxError(i,t)},success:function(v){var x=v[0];var u=b("#"+x+"']").eq(0);if(u.length==1){var t=v[1];var w=v[2];if(!t){s.ajaxValidCache[x]=false;s.isError=true;if(w){if(s.allrules[w]){var i=s.allrules[w].alertText;if(i){w=i}}}else{w=n.alertText}a._showPrompt(u,w,"",true,s)}else{s.ajaxValidCache[x]=true;if(w){if(s.allrules[w]){var i=s.allrules[w].alertTextOk;if(i){w=i}}}else{w=n.alertTextOk}if(w){a._showPrompt(u,w,"pass",true,s)}else{a._closePrompt(u)}if(s.eventTrigger=="submit"){o.closest("form").submit()}}}u.trigger("jqv.field.result",[u,s.isError,w])}});return n.alertTextLoad}},_ajaxError:function(c,d){if(c.status==0&&d==null){alert("The page is not served from a server! ajax call failed")}else{if(typeof console!="undefined"){console.log("Ajax error: "+c.status+" "+d)}}},_dateToString:function(c){return c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate()},_parseDate:function(e){var c=e.split("-");if(c==e){c=e.split("/")}return new Date(c[0],(c[1]-1),c[2])},_showPrompt:function(i,g,h,f,e,d){var c=a._getPrompt(i);if(d){c=false}if(c){a._updatePrompt(i,c,g,h,f,e)}else{a._buildPrompt(i,g,h,f,e)}},_buildPrompt:function(h,c,f,j,k){var d=b("<div>");d.addClass(a._getClassName(h.attr("id"))+"formError");d.addClass("parentForm"+a._getClassName(h.parents("form").attr("id")));d.addClass("formError");switch(f){case"pass":d.addClass("greenPopup");break;case"load":d.addClass("blackPopup");break;default:}if(j){d.addClass("ajaxed")}var l=b("<div>").addClass("formErrorContent").html(c).appendTo(d);if(k.showArrow){var i=b("<div>").addClass("formErrorArrow");var e=h.data("promptPosition")||k.promptPosition;if(typeof(e)=="string"){var g=e.indexOf(":");if(g!=-1){e=e.substring(0,g)}}switch(e){case"bottomLeft":case"bottomRight":d.find(".formErrorContent").before(i);i.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');break;case"topLeft":case"topRight":i.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');d.append(i);break}}if(h.closest(".ui-dialog").length){d.addClass("formErrorInsideDialog")}d.css({opacity:0,position:"absolute"});h.before(d);var g=a._calculatePosition(h,d,k);d.css({top:g.callerTopPosition,left:g.callerleftPosition,marginTop:g.marginTopSize,opacity:0}).data("callerField",h);if(k.autoHidePrompt){setTimeout(function(){d.animate({opacity:0},function(){d.closest(".formErrorOuter").remove();d.remove()})},k.autoHideDelay)}return d.animate({opacity:0.87})},_updatePrompt:function(i,d,c,g,j,k,e){if(d){if(typeof g!=="undefined"){if(g=="pass"){d.addClass("greenPopup")}else{d.removeClass("greenPopup")}if(g=="load"){d.addClass("blackPopup")}else{d.removeClass("blackPopup")}}if(j){d.addClass("ajaxed")}else{d.removeClass("ajaxed")}d.find(".formErrorContent").html(c);var h=a._calculatePosition(i,d,k);var f={top:h.callerTopPosition,left:h.callerleftPosition,marginTop:h.marginTopSize};if(e){d.css(f)}else{d.animate(f)}}},_closePrompt:function(d){var c=a._getPrompt(d);if(c){c.fadeTo("fast",0,function(){c.parent(".formErrorOuter").remove();c.remove()})}},closePrompt:function(c){return a._closePrompt(c)},_getPrompt:function(e){var f=b(e).closest("form").attr("id");var d=a._getClassName(e.attr("id"))+"formError";var c=b("."+a._escapeExpression(d)+".parentForm"+f)[0];if(c){return b(c)}},_escapeExpression:function(c){return c.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},_calculatePosition:function(m,f,r){var e,n,k;var g=m.width();var c=m.position().left;var p=m.position().top;var d=m.height();var q=f.height();e=n=0;k=-q;var j=m.data("promptPosition")||r.promptPosition;var i="";var h="";var o=0;var l=0;if(typeof(j)=="string"){if(j.indexOf(":")!=-1){i=j.substring(j.indexOf(":")+1);j=j.substring(0,j.indexOf(":"));if(i.indexOf(",")!=-1){h=i.substring(i.indexOf(",")+1);i=i.substring(0,i.indexOf(","));l=parseInt(h);if(isNaN(l)){l=0}}o=parseInt(i);if(isNaN(i)){i=0}}}switch(j){default:case"topRight":n+=c+g-30;e+=p;break;case"topLeft":e+=p;n+=c;break;case"centerRight":e=p+4;k=0;n=c+m.outerWidth(true)+5;break;case"centerLeft":n=c-(f.width()+2);e=p+4;k=0;break;case"bottomLeft":e=p+m.height()+5;k=0;n=c;break;case"bottomRight":n=c+g-30;e=p+m.height()+5;k=0}n+=o;e+=l;return{callerTopPosition:e+"px",callerleftPosition:n+"px",marginTopSize:k+"px"}},_saveOptions:function(e,d){if(b.validationEngineLanguage){var c=b.validationEngineLanguage.allRules}else{b.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page")}b.validationEngine.defaults.allrules=c;var f=b.extend(true,{},b.validationEngine.defaults,d);e.data("jqv",f);return f},_getClassName:function(c){if(c){return c.replace(/:/g,"_").replace(/\./g,"_")}},_jqSelector:function(c){return c.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1")},_condRequired:function(g,h,e,d){var c,f;for(c=(e+1);c<h.length;c++){f=jQuery("#"+h[c]).first();if(f.length&&a._required(f,["required"],0,d)==undefined){return a._required(g,["required"],0,d)}}}};b.fn.validationEngine=function(d){var c=b(this);if(!c[0]){return c}if(typeof(d)=="string"&&d.charAt(0)!="_"&&a[d]){if(d!="showPrompt"&&d!="hide"&&d!="hideAll"){a.init.apply(c)}return a[d].apply(c,Array.prototype.slice.call(arguments,1))}else{if(typeof d=="object"||!d){a.init.apply(c,arguments);return a.attach.apply(c)}else{b.error("Method "+d+" does not exist in jQuery.validationEngine")}}};b.validationEngine={fieldIdCounter:0,defaults:{validationEventTrigger:"blur",scroll:true,focusFirstField:true,promptPosition:"bottomLeft",bindMethod:"bind",inlineAjax:false,ajaxFormValidation:false,ajaxFormValidationURL:false,ajaxFormValidationMethod:"get",onAjaxFormComplete:b.noop,onBeforeAjaxFormValidation:b.noop,onValidationComplete:false,doNotShowAllErrosOnSubmit:false,custom_error_messages:{},binded:true,showArrow:true,isError:false,maxErrorsPerField:false,ajaxValidCache:{},autoPositionUpdate:false,InvalidFields:[],onFieldSuccess:false,onFieldFailure:false,onFormSuccess:false,onFormFailure:false,addSuccessCssClassToField:false,addFailureCssClassToField:false,autoHidePrompt:false,autoHideDelay:10000,fadeDuration:0.3,prettySelect:false,usePrefix:"",useSuffix:"",showOneMessage:false}};b(function(){b.validationEngine.defaults.promptPosition="bottomLeft"})})(jQuery);