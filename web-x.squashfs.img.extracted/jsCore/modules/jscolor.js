var jscolor={dir:"../image/",bindClass:"color_cnmd_xy",binding:!0,preloading:!0,install:function(){jscolor.addEvent(window,"load",jscolor.init)},init:function(){jscolor.binding&&jscolor.bind(),jscolor.preloading&&jscolor.preload()},getDir:function(){if(!jscolor.dir){var a=jscolor.detectDir();jscolor.dir=a!==!1?a:"jscolor/"}return jscolor.dir},detectDir:function(){for(var a=location.href,b=document.getElementsByTagName("base"),c=0;c<b.length;c+=1)b[c].href&&(a=b[c].href);for(var b=document.getElementsByTagName("script"),c=0;c<b.length;c+=1)if(b[c].src&&/(^|\/)jscolor\.js([?#].*)?$/i.test(b[c].src)){var d=new jscolor.URI(b[c].src),e=d.toAbsolute(a);return e.path=e.path.replace(/[^\/]+$/,""),e.query=null,e.fragment=null,e.toString()}return!1},bind:function(){for(var a=new RegExp("(^|\\s)("+jscolor.bindClass+")\\s*(\\{[^}]*\\})?","i"),b=document.getElementsByTagName("input"),c=0;c<b.length;c+=1){var d;if(!b[c].color&&b[c].className&&(d=b[c].className.match(a))){var e={};if(d[3])try{e=new Function("return ("+d[3]+")")()}catch(f){}b[c].color=new jscolor.color(b[c],e)}}},preload:function(){for(var a in jscolor.imgRequire)jscolor.imgRequire.hasOwnProperty(a)&&jscolor.loadImage(a)},images:{pad:[181,101],sld:[16,101],cross:[15,15],arrow:[7,11]},imgRequire:{},imgLoaded:{},requireImage:function(a){jscolor.imgRequire[a]=!0},loadImage:function(a){jscolor.imgLoaded[a]||(jscolor.imgLoaded[a]=new Image,jscolor.imgLoaded[a].src=jscolor.getDir()+a)},fetchElement:function(a){return"string"==typeof a?document.getElementById(a):a},addEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},fireEvent:function(a,b){if(a)if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0),a.dispatchEvent(c)}else if(document.createEventObject){var c=document.createEventObject();a.fireEvent("on"+b,c)}else a["on"+b]&&a["on"+b]()},getElementPos:function(a){var b=a,c=a,d=0,e=0;if(b.offsetParent)do d+=b.offsetLeft,e+=b.offsetTop;while(b=b.offsetParent);for(;(c=c.parentNode)&&"BODY"!==c.nodeName.toUpperCase();)d-=c.scrollLeft,e-=c.scrollTop;return[d,e]},getElementSize:function(a){return[a.offsetWidth,a.offsetHeight]},getRelMousePos:function(a){var b=0,c=0;return a||(a=window.event),"number"==typeof a.offsetX?(b=a.offsetX,c=a.offsetY):"number"==typeof a.layerX&&(b=a.layerX,c=a.layerY),{x:b,y:c}},getViewPos:function(){return"number"==typeof window.pageYOffset?[window.pageXOffset,window.pageYOffset]:document.body&&(document.body.scrollLeft||document.body.scrollTop)?[document.body.scrollLeft,document.body.scrollTop]:document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[0,0]},getViewSize:function(){return"number"==typeof window.innerWidth?[window.innerWidth,window.innerHeight]:document.body&&(document.body.clientWidth||document.body.clientHeight)?[document.body.clientWidth,document.body.clientHeight]:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?[document.documentElement.clientWidth,document.documentElement.clientHeight]:[0,0]},URI:function(a){function b(a){for(var b="";a;)if("../"===a.substr(0,3)||"./"===a.substr(0,2))a=a.replace(/^\.+/,"").substr(1);else if("/./"===a.substr(0,3)||"/."===a)a="/"+a.substr(3);else if("/../"===a.substr(0,4)||"/.."===a)a="/"+a.substr(4),b=b.replace(/\/?[^\/]*$/,"");else if("."===a||".."===a)a="";else{var c=a.match(/^\/?[^\/]*/)[0];a=a.substr(c.length),b+=c}return b}this.scheme=null,this.authority=null,this.path="",this.query=null,this.fragment=null,this.parse=function(a){var b=a.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);return this.scheme=b[3]?b[2]:null,this.authority=b[5]?b[6]:null,this.path=b[7],this.query=b[9]?b[10]:null,this.fragment=b[12]?b[13]:null,this},this.toString=function(){var a="";return null!==this.scheme&&(a=a+this.scheme+":"),null!==this.authority&&(a=a+"//"+this.authority),null!==this.path&&(a+=this.path),null!==this.query&&(a=a+"?"+this.query),null!==this.fragment&&(a=a+"#"+this.fragment),a},this.toAbsolute=function(a){var a=new jscolor.URI(a),c=this,d=new jscolor.URI;return null===a.scheme?!1:(null!==c.scheme&&c.scheme.toLowerCase()===a.scheme.toLowerCase()&&(c.scheme=null),null!==c.scheme?(d.scheme=c.scheme,d.authority=c.authority,d.path=b(c.path),d.query=c.query):(null!==c.authority?(d.authority=c.authority,d.path=b(c.path),d.query=c.query):(""===c.path?(d.path=a.path,d.query=null!==c.query?c.query:a.query):("/"===c.path.substr(0,1)?d.path=b(c.path):(d.path=null!==a.authority&&""===a.path?"/"+c.path:a.path.replace(/[^\/]+$/,"")+c.path,d.path=b(d.path)),d.query=c.query),d.authority=a.authority),d.scheme=a.scheme),d.fragment=c.fragment,d)},a&&this.parse(a)},color:function(a,b){function c(a,b,c){var d=Math.min(Math.min(a,b),c),e=Math.max(Math.max(a,b),c),f=e-d;if(0===f)return[null,0,e];var g=a===d?3+(c-b)/f:b===d?5+(a-c)/f:1+(b-a)/f;return[6===g?0:g,f/e,e]}function d(a,b,c){if(null===a)return[c,c,c];var d=Math.floor(a),e=d%2?a-d:1-(a-d),f=c*(1-b),g=c*(1-b*e);switch(d){case 6:case 0:return[c,g,f];case 1:return[g,c,f];case 2:return[f,c,g];case 3:return[f,g,c];case 4:return[g,f,c];case 5:return[c,f,g]}}function e(){delete jscolor.picker.owner,p.positionID?document.getElementById(p.positionID).removeChild(jscolor.picker.boxB):document.getElementsByTagName("body")[0].removeChild(jscolor.picker.boxB)}function f(b,c){function d(){var a=p.pickerInsetColor.split(/\s+/),b=a.length<2?a[0]:a[1]+" "+a[0]+" "+a[0]+" "+a[1];k.btn.style.borderColor=b}if(!jscolor.picker){jscolor.picker={box:document.createElement("div"),boxB:document.createElement("div"),pad:document.createElement("div"),padB:document.createElement("div"),padM:document.createElement("div"),sld:document.createElement("div"),sldB:document.createElement("div"),sldM:document.createElement("div"),btn:document.createElement("div"),btnS:document.createElement("span"),btnT:document.createTextNode(p.pickerCloseText)};for(var e=0,f=4;e<jscolor.images.sld[1];e+=f){var j=document.createElement("div");j.style.height=f+"px",j.style.fontSize="1px",j.style.lineHeight="0",jscolor.picker.sld.appendChild(j)}jscolor.picker.sldB.appendChild(jscolor.picker.sld),jscolor.picker.box.appendChild(jscolor.picker.sldB),jscolor.picker.box.appendChild(jscolor.picker.sldM),jscolor.picker.padB.appendChild(jscolor.picker.pad),jscolor.picker.box.appendChild(jscolor.picker.padB),jscolor.picker.box.appendChild(jscolor.picker.padM),jscolor.picker.btnS.appendChild(jscolor.picker.btnT),jscolor.picker.btn.appendChild(jscolor.picker.btnS),jscolor.picker.box.appendChild(jscolor.picker.btn),jscolor.picker.boxB.appendChild(jscolor.picker.box)}var k=jscolor.picker;k.box.onmouseup=k.box.onmouseout=function(){a.focus()},k.box.onmousedown=function(){r=!0},k.box.onmousemove=function(a){(u||v)&&(u&&l(a),v&&m(a),document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges(),n())},"ontouchstart"in window&&k.box.addEventListener("touchmove",function(a){var b={offsetX:a.touches[0].pageX-w.X,offsetY:a.touches[0].pageY-w.Y};(u||v)&&(u&&l(b),v&&m(b),n()),a.stopPropagation(),a.preventDefault()},!1),k.padM.onmouseup=k.padM.onmouseout=function(){u&&(u=!1,jscolor.fireEvent(s,"change"))},k.padM.onmousedown=function(a){switch(q){case 0:0===p.hsv[2]&&p.fromHSV(null,null,1);break;case 1:0===p.hsv[1]&&p.fromHSV(null,1,null)}v=!1,u=!0,l(a),n()},"ontouchstart"in window&&k.padM.addEventListener("touchstart",function(a){w={X:a.target.offsetParent.offsetLeft,Y:a.target.offsetParent.offsetTop},this.onmousedown({offsetX:a.touches[0].pageX-w.X,offsetY:a.touches[0].pageY-w.Y})}),k.sldM.onmouseup=k.sldM.onmouseout=function(){v&&(v=!1,jscolor.fireEvent(s,"change"))},k.sldM.onmousedown=function(a){u=!1,v=!0,m(a),n()},"ontouchstart"in window&&k.sldM.addEventListener("touchstart",function(a){w={X:a.target.offsetParent.offsetLeft,Y:a.target.offsetParent.offsetTop},this.onmousedown({offsetX:a.touches[0].pageX-w.X,offsetY:a.touches[0].pageY-w.Y})});var o=g(p);k.box.style.width=o[0]+"px",k.box.style.height=o[1]+"px",k.boxB.style.position="absolute",k.boxB.style.clear="both",k.boxB.style.left=b+"px",k.boxB.style.top=c+"px",p.positionNew&&(k.boxB.style.left=p.positionNew.left,k.boxB.style.top=p.positionNew.top),k.boxB.style.zIndex=p.pickerZIndex,k.boxB.style.border=p.pickerBorder+"px solid",k.boxB.style.borderColor=p.pickerBorderColor,k.boxB.style.background=p.pickerFaceColor,k.pad.style.width=jscolor.images.pad[0]+"px",k.pad.style.height=jscolor.images.pad[1]+"px",k.padB.style.position="absolute",k.padB.style.left=p.pickerFace+"px",k.padB.style.top=p.pickerFace+"px",k.padB.style.border=p.pickerInset+"px solid",k.padB.style.borderColor=p.pickerInsetColor,k.padM.style.position="absolute",k.padM.style.left="0",k.padM.style.top="0",k.padM.style.width=p.pickerFace+2*p.pickerInset+jscolor.images.pad[0]+jscolor.images.arrow[0]+"px",k.padM.style.height=k.box.style.height,k.padM.style.cursor="crosshair",k.sld.style.overflow="hidden",k.sld.style.width=jscolor.images.sld[0]+"px",k.sld.style.height=jscolor.images.sld[1]+"px",k.sldB.style.display=p.slider?"block":"none",k.sldB.style.position="absolute",k.sldB.style.right=p.pickerFace+"px",k.sldB.style.top=p.pickerFace+"px",k.sldB.style.border=p.pickerInset+"px solid",k.sldB.style.borderColor=p.pickerInsetColor,k.sldM.style.display=p.slider?"block":"none",k.sldM.style.position="absolute",k.sldM.style.right="0",k.sldM.style.top="0",k.sldM.style.width=jscolor.images.sld[0]+jscolor.images.arrow[0]+p.pickerFace+2*p.pickerInset+"px",k.sldM.style.height=k.box.style.height;try{k.sldM.style.cursor="pointer"}catch(t){k.sldM.style.cursor="hand"}k.btn.style.display=p.pickerClosable?"block":"none",k.btn.style.position="absolute",k.btn.style.left=p.pickerFace+"px",k.btn.style.bottom=p.pickerFace+"px",k.btn.style.padding="0 15px",k.btn.style.height="18px",k.btn.style.border=p.pickerInset+"px solid",d(),k.btn.style.color=p.pickerButtonColor,k.btn.style.font="12px sans-serif",k.btn.style.textAlign="center";try{k.btn.style.cursor="pointer"}catch(t){k.btn.style.cursor="hand"}switch(k.btn.onmousedown=function(){p.hidePicker()},k.btnS.style.lineHeight=k.btn.style.height,q){case 0:var x="hs.png";break;case 1:var x="hv.png"}k.padM.style.backgroundImage="url('"+jscolor.getDir()+"cross.gif')",k.padM.style.backgroundRepeat="no-repeat",k.sldM.style.backgroundImage="url('"+jscolor.getDir()+"arrow.gif')",k.sldM.style.backgroundRepeat="no-repeat",k.pad.style.backgroundImage="url('"+jscolor.getDir()+x+"')",k.pad.style.backgroundRepeat="no-repeat",k.pad.style.backgroundPosition="0 0",h(),i(),jscolor.picker.owner=p,p.positionID?document.getElementById(p.positionID).appendChild(k.boxB):document.getElementsByTagName("body")[0].appendChild(k.boxB)}function g(a){var b=[2*a.pickerInset+2*a.pickerFace+jscolor.images.pad[0]+(a.slider?2*a.pickerInset+2*jscolor.images.arrow[0]+jscolor.images.sld[0]:0),a.pickerClosable?4*a.pickerInset+3*a.pickerFace+jscolor.images.pad[1]+a.pickerButtonHeight:2*a.pickerInset+2*a.pickerFace+jscolor.images.pad[1]];return b}function h(){switch(q){case 0:var a=1;break;case 1:var a=2}var b=Math.round(p.hsv[0]/6*(jscolor.images.pad[0]-1)),c=Math.round((1-p.hsv[a])*(jscolor.images.pad[1]-1));jscolor.picker.padM.style.backgroundPosition=p.pickerFace+p.pickerInset+b-Math.floor(jscolor.images.cross[0]/2)+"px "+(p.pickerFace+p.pickerInset+c-Math.floor(jscolor.images.cross[1]/2))+"px";var e=jscolor.picker.sld.childNodes;switch(q){case 0:for(var f=d(p.hsv[0],p.hsv[1],1),g=0;g<e.length;g+=1)e[g].style.backgroundColor="rgb("+f[0]*(1-g/e.length)*100+"%,"+f[1]*(1-g/e.length)*100+"%,"+f[2]*(1-g/e.length)*100+"%)";break;case 1:var f,h,i=[p.hsv[2],0,0],g=Math.floor(p.hsv[0]),j=g%2?p.hsv[0]-g:1-(p.hsv[0]-g);switch(g){case 6:case 0:f=[0,1,2];break;case 1:f=[1,0,2];break;case 2:f=[2,0,1];break;case 3:f=[2,1,0];break;case 4:f=[1,2,0];break;case 5:f=[0,2,1]}for(var g=0;g<e.length;g+=1)h=1-1/(e.length-1)*g,i[1]=i[0]*(1-h*j),i[2]=i[0]*(1-h),e[g].style.backgroundColor="rgb("+100*i[f[0]]+"%,"+100*i[f[1]]+"%,"+100*i[f[2]]+"%)"}}function i(){switch(q){case 0:var a=2;break;case 1:var a=1}var b=Math.round((1-p.hsv[a])*(jscolor.images.sld[1]-1));jscolor.picker.sldM.style.backgroundPosition="0 "+(p.pickerFace+p.pickerInset+b-Math.floor(jscolor.images.arrow[1]/2))+"px"}function j(){return jscolor.picker&&jscolor.picker.owner===p}function k(){s!==a&&p.importColor()}function l(a){var b=jscolor.getRelMousePos(a),c=b.x-p.pickerFace-p.pickerInset,d=b.y-p.pickerFace-p.pickerInset;switch(q){case 0:p.fromHSV(c*(6/(jscolor.images.pad[0]-1)),1-d/(jscolor.images.pad[1]-1),null,A);break;case 1:p.fromHSV(c*(6/(jscolor.images.pad[0]-1)),null,1-d/(jscolor.images.pad[1]-1),A)}}function m(a){var b=jscolor.getRelMousePos(a),c=b.y-p.pickerFace-p.pickerInset;switch(q){case 0:p.fromHSV(null,null,1-c/(jscolor.images.sld[1]-1),z);break;case 1:p.fromHSV(null,1-c/(jscolor.images.sld[1]-1),null,z)}}function n(){if(p.onImmediateChange){var a;a="string"==typeof p.onImmediateChange?new Function(p.onImmediateChange):p.onImmediateChange,a.call(p)}}this.required=!0,this.adjust=!0,this.hash=!1,this.caps=!0,this.slider=!0,this.valueElement=a,this.styleElement=a,this.onImmediateChange=null,this.hsv=[0,0,1],this.rgb=[1,1,1],this.minH=0,this.maxH=6,this.minS=0,this.maxS=1,this.minV=0,this.maxV=1,this.pickerOnfocus=!0,this.pickerMode="HSV",this.pickerPosition="bottom",this.pickerSmartPosition=!0,this.pickerButtonHeight=20,this.pickerClosable=!1,this.pickerCloseText="Close",this.pickerButtonColor="ButtonText",this.pickerFace=10,this.pickerFaceColor="ThreeDFace",this.pickerBorder=1,this.pickerBorderColor="ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight",this.pickerInset=1,this.pickerInsetColor="ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow",this.pickerZIndex=1e4;for(var o in b)b.hasOwnProperty(o)&&(this[o]=b[o]);this.hidePicker=function(){j()&&e()},this.showPicker=function(){if(!j()){var b,c,d,e=jscolor.getElementPos(a),h=jscolor.getElementSize(a),i=jscolor.getViewPos(),k=jscolor.getViewSize(),l=g(this);switch(this.pickerPosition.toLowerCase()){case"left":b=1,c=0,d=-1;break;case"right":b=1,c=0,d=1;break;case"top":b=0,c=1,d=-1;break;default:b=0,c=1,d=1}var m=(h[c]+l[c])/2;if(this.pickerSmartPosition)var n=[-i[b]+e[b]+l[b]>k[b]&&-i[b]+e[b]+h[b]/2>k[b]/2&&e[b]+h[b]-l[b]>=0?e[b]+h[b]-l[b]:e[b],-i[c]+e[c]+h[c]+l[c]-m+m*d>k[c]?-i[c]+e[c]+h[c]/2>k[c]/2&&e[c]+h[c]-m-m*d>=0?e[c]+h[c]-m-m*d:e[c]+h[c]-m+m*d:e[c]+h[c]-m+m*d>=0?e[c]+h[c]-m+m*d:e[c]+h[c]-m-m*d];else var n=[e[b],e[c]+h[c]-m+m*d];f(n[b],n[c])}},this.importColor=function(){s?this.adjust?!this.required&&/^\s*$/.test(s.value)?(s.value="",t.style.backgroundImage=t.jscStyle.backgroundImage,t.style.backgroundColor=t.jscStyle.backgroundColor,t.style.color=t.jscStyle.color,this.exportColor(x|y)):this.fromString(s.value)||this.exportColor():this.fromString(s.value,x)||(t.style.backgroundImage=t.jscStyle.backgroundImage,t.style.backgroundColor=t.jscStyle.backgroundColor,t.style.color=t.jscStyle.color,this.exportColor(x|y)):this.exportColor()},this.exportColor=function(a){if(!(a&x)&&s){var b=this.toString();this.caps&&(b=b.toUpperCase()),this.hash&&(b="#"+b),s.value=b}a&y||!t||(t.style.backgroundImage="none",t.style.backgroundColor="#"+this.toString(),t.style.color=.213*this.rgb[0]+.715*this.rgb[1]+.072*this.rgb[2]<.5?"#FFF":"#000"),a&z||!j()||h(),a&A||!j()||i()},this.fromHSV=function(a,b,c,e){null!==a&&(a=Math.max(0,this.minH,Math.min(6,this.maxH,a))),null!==b&&(b=Math.max(0,this.minS,Math.min(1,this.maxS,b))),null!==c&&(c=Math.max(0,this.minV,Math.min(1,this.maxV,c))),this.rgb=d(null===a?this.hsv[0]:this.hsv[0]=a,null===b?this.hsv[1]:this.hsv[1]=b,null===c?this.hsv[2]:this.hsv[2]=c),this.exportColor(e)},this.fromRGB=function(a,b,e,f){null!==a&&(a=Math.max(0,Math.min(1,a))),null!==b&&(b=Math.max(0,Math.min(1,b))),null!==e&&(e=Math.max(0,Math.min(1,e)));var g=c(null===a?this.rgb[0]:a,null===b?this.rgb[1]:b,null===e?this.rgb[2]:e);null!==g[0]&&(this.hsv[0]=Math.max(0,this.minH,Math.min(6,this.maxH,g[0]))),0!==g[2]&&(this.hsv[1]=null===g[1]?null:Math.max(0,this.minS,Math.min(1,this.maxS,g[1]))),this.hsv[2]=null===g[2]?null:Math.max(0,this.minV,Math.min(1,this.maxV,g[2]));var h=d(this.hsv[0],this.hsv[1],this.hsv[2]);this.rgb[0]=h[0],this.rgb[1]=h[1],this.rgb[2]=h[2],this.exportColor(f)},this.fromString=function(a,b){var c=a.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);return c?(6===c[1].length?this.fromRGB(parseInt(c[1].substr(0,2),16)/255,parseInt(c[1].substr(2,2),16)/255,parseInt(c[1].substr(4,2),16)/255,b):this.fromRGB(parseInt(c[1].charAt(0)+c[1].charAt(0),16)/255,parseInt(c[1].charAt(1)+c[1].charAt(1),16)/255,parseInt(c[1].charAt(2)+c[1].charAt(2),16)/255,b),!0):!1},this.toString=function(){return(256|Math.round(255*this.rgb[0])).toString(16).substr(1)+(256|Math.round(255*this.rgb[1])).toString(16).substr(1)+(256|Math.round(255*this.rgb[2])).toString(16).substr(1)};var p=this,q="hvs"===this.pickerMode.toLowerCase()?1:0,r=!1,s=jscolor.fetchElement(this.valueElement),t=jscolor.fetchElement(this.styleElement),u=!1,v=!1,w={},x=1,y=2,z=4,A=8;if(jscolor.addEvent(a,"focus",function(){p.pickerOnfocus&&p.showPicker()}),jscolor.addEvent(a,"blur",function(){r=r?!1:!1}),s){var B=function(){p.fromString(s.value,x),n()};jscolor.addEvent(s,"keyup",B),jscolor.addEvent(s,"input",B),jscolor.addEvent(s,"blur",k),s.setAttribute("autocomplete","off")}switch(t&&(t.jscStyle={backgroundImage:t.style.backgroundImage,backgroundColor:t.style.backgroundColor,color:t.style.color}),q){case 0:jscolor.requireImage("hs.png");break;case 1:jscolor.requireImage("hv.png")}jscolor.requireImage("cross.gif"),jscolor.requireImage("arrow.gif"),this.importColor()}};jscolor.install();