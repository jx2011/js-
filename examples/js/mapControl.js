/**
 * Created by zeng on 16-4-14.
 */
function $(id){
    return document.getElementById(id);
    }
function mapControlFn(mapClass,option){
    this.href = option.href||"02.html";
    this.scaleW = option.scaleW||0.08;
    this.scaleH = option.scaleH||0.04;
    this.left = option.left||"2%";
    this.top = option.top||"4.5%";
    this.class = mapClass;
    this.init = function(){
    var self = this;
    self.createMapElement();
    }
this.init();
}
mapControlFn.prototype.getRect=function(element) {
    var rect = element.getBoundingClientRect();
    var top = document.documentElement.clientTop;
    var left= document.documentElement.clientLeft;
    return{
    top:rect.top - top,
    bottom:rect.bottom - top,
    left:rect.left - left,
    right:rect.right - left
    }
}
mapControlFn.prototype.createMapElement = function(){
    var mapObj = document.getElementsByClassName(this.class);
    var elem = mapObj.length==0?document.createElement("a"):mapObj[0];
    elem.classList.add(this.class);
    elem.href = this.href;
    var w = $("bodyImg").offsetWidth*this.scaleW,
    h = $("bodyImg").offsetHeight*this.scaleH;
    this.setStyle(elem,{
    position:"absolute",
    width:w+"px",
    height:h+"px",
    left:this.left,
    top:this.top
    });
if(mapObj.length==0) document.body.appendChild(elem);
}
mapControlFn.prototype.setStyle = function(elem,option){
    for(var i in option){
    elem.style[i] = option[i];
    }
}