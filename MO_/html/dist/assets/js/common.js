"use strict";var gb={wW:window.innerWidth,wH:window.innerHeight,html:document.querySelector("html"),meta:document.querySelector("meta[name=theme-color]"),body:document.querySelector("body"),layout:document.getElementById("layout"),main:document.querySelector(".main"),header:document.getElementById("gnb"),buttonActiveDropDown:document.querySelectorAll(".button-active-dropDown"),btnActiveModal:document.querySelectorAll(".button-active-modal"),btnCloseModal:document.querySelectorAll(".button-close-modal"),dropDown:document.querySelectorAll(".dropDown"),isMob:window.innerWidth<=821,isFocus:!1};function setCookie(e,t,n){var o=new Date;o.setDate(o.getDate()+n),e=e+"="+escape(t)+"; path=/ ",void 0!==n&&(e+=";expires="+o.toGMTString()+";"),document.cookie=e}function getCookie(e){e+="=";var t=document.cookie,n=t.indexOf(e),o="";return-1!=n&&(n+=e.length,-1==(e=t.indexOf(";",n))&&(e=t.length),o=t.substring(n,e)),unescape(o)}window.addEventListener("load",function(){gb.CommonFunction.init()}),gb.CommonFunction=function(){function n(){document.querySelectorAll(".text-wrap textarea").forEach(function(e){e.oninput=function(e){this.nextElementSibling;for(var t,n=e.target,o=20,i=0,l=n.value,c=0,r=0;r<l.length;r++)t=l.charAt(r),4<escape(t).length?i+=2:i++,i<=o&&(c=r+1,n.nextElementSibling.children[1].firstElementChild.innerHTML=i);o<i&&(alert(222),n.value=l.substring(0,c))}})}return{init:function(){var e,t;gb.btnActiveModal.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();e=this.getAttribute("data-modal-name");document.querySelector(".modal#modal_".concat(e)).classList.add("zoomIn"),gb.body.style.height="100vh",gb.body.style.overflowY="hidden"})}),gb.btnCloseModal.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();e=this.getAttribute("data-modal-name");document.querySelector(".modal#modal_".concat(e)).classList.remove("zoomIn"),gb.body.style.height="auto",gb.body.style.overflowY="visible"})}),e=document.querySelectorAll(".chkList input[type=checkbox][name^=allChk]"),t=document.querySelectorAll(".chkList input[type=checkbox]:not([name^=allChk])"),e.forEach(function(t){t.addEventListener("change",function(){var e=t.getAttribute("name").split("_")[1],e=document.querySelectorAll("input[type=checkbox][name^=".concat(e,"]"));t.checked&&e.forEach(function(e){e.checked=!1})})}),t.forEach(function(t){t.addEventListener("change",function(){var e=t.getAttribute("name").split("_")[0],e=document.querySelectorAll("input[type=checkbox][name^=allChk_".concat(e,"]"));t.checked&&e.forEach(function(e){e.checked=!1})})}),e=document.querySelectorAll(".text-wrap input"),t=document.querySelectorAll(".button-reset"),e.forEach(function(e){e.oninput=function(e){0<e.target.value.length?this.classList.add("txt-input"):this.classList.remove("txt-input")},e.onfocus=function(){0<this.value.length&&this.classList.add("txt-input")}}),t.forEach(function(e){e.onclick=function(){this.previousElementSibling.value="",this.previousElementSibling.classList.remove("txt-input"),this.previousElementSibling.focus()}}),n(),gb.buttonActiveDropDown.forEach(function(e){e.parentElement.classList.contains("current")&&(e.parentElement.classList.add("on"),e.nextElementSibling.style.display="block"),e.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),this.parentElement.classList.contains("on")?(this.parentElement.classList.remove("on"),$(this.nextElementSibling).stop().slideUp(300)):(this.parentElement.classList.add("on"),$(this.nextElementSibling).stop().slideDown(300))})}),gb._listSwiper=gb._listSwiper||[],gb.listSwiper=document.querySelectorAll(".list-swiper"),gb.listSwiper.forEach(function(e,t){void 0!==gb._listSwiper[t]&&(gb._vdSwiper[t].destroy(),gb._vdSwiper[t]=void 0),gb._listSwiper[t]=new Swiper(e,{loop:!0,centeredSlides:!1,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})}}}();