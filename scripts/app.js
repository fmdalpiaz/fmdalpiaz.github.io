"use strict";var FIC=FIC||[];$(document).ready(function(){for(var e in FIC)"function"==typeof FIC[e].init&&FIC[e].init()}),FIC.Home={datasheetHandler:function(){var e=$(".datasheet");$(document).on("click",".datasheet-link",function(){e.addClass("open").one("touchend click",function(){$(this).removeClass("open")})})},init:function(){FIC.Home.datasheetHandler()}},FIC.Slides={currentSlide:1,totalSlides:0,$slides:void 0,showHideSlides:function(e,i){FIC.Slides.$slides.filter(e+", "+i).toggleClass("hide"),FIC.Slides.$slides.filter(i).data("gallery")?FIC.Slides.$slides.parent().addClass("section--gallery"):FIC.Slides.$slides.parent().removeClass("section--gallery")},controlSlidesHandler:function(){$(document).on("click",".slide__control--prev",function(){var e=FIC.Slides.currentSlide;1===FIC.Slides.currentSlide?FIC.Slides.currentSlide=FIC.Slides.totalSlides:FIC.Slides.currentSlide-=1,FIC.Slides.showHideSlides(".slide--"+e,".slide--"+FIC.Slides.currentSlide)}),$(document).on("click",".slide__control--next",function(){var e=FIC.Slides.currentSlide;FIC.Slides.currentSlide===FIC.Slides.totalSlides?FIC.Slides.currentSlide=1:FIC.Slides.currentSlide+=1,FIC.Slides.showHideSlides(".slide--"+e,".slide--"+FIC.Slides.currentSlide)})},swapInteractionHandler:function(){var e=$(".slide__interaction--swap");if(e.length){var s=e.find(".swap__btn");s.on("click",function(){var e=$(this),i=e.data("swap"),t=e.parents(".swap__actions").prev().find(".swap__figure"),n=t.data("src");s.removeClass("active"),e.addClass("active"),t.attr("src",n+i+".jpg")})}},setPortraitTops:function(e,i){var t=[];e.filter(".active").each(function(){t.push(this.getAttribute("data-swap"))}),-1!==t.indexOf("olhos")&&-1!==t.indexOf("oculos")&&t.pop(),i.attr("src",0===t.length?"./../img/retratos/autorretrato.jpg":"./../img/retratos/retrato/"+t.join("_")+".jpg")},portraitTopsHandler:function(){var e=$(".slide__interaction--portrait");if(e.length){var i=e.find(".portrait-tops__btn"),t=e.find(".portrait-figure");i.on("click",function(){$(this).toggleClass("active"),FIC.Slides.setPortraitTops(i,t)})}},modalsHandler:function(){$(document).on("touchend click",".slide__figure[data-modal]",function(){var e=$(this).data("modal");$(e).addClass("show")}).on("touchend click",".modal__close",function(){$(this).parents(".modal").removeClass("show")})},backPageHandler:function(){$(document).on("click",".logo",function(){history.back()})},showAnimation:function(){$(document).on("touchend click","img[data-animation]",function(){var e=$(this),i=e.data("animation");e.attr("src",i)})},init:function(){FIC.Slides.$slides=$(".slide"),FIC.Slides.totalSlides=FIC.Slides.$slides.length,0<FIC.Slides.totalSlides&&FIC.Slides.controlSlidesHandler(),FIC.Slides.swapInteractionHandler(),FIC.Slides.portraitTopsHandler(),FIC.Slides.modalsHandler(),FIC.Slides.backPageHandler(),FIC.Slides.showAnimation()}};