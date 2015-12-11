
ua.factory('$uaLoader',()=> {
  var tpls = {};
  tpls.stroke = '<div class="uac-loader uac-loader-stroke" id="__id__"> \
	      <svg class="circular"> \
	        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/> \
	      </svg> \
	    </div>';
  tpls.liquidSquare = '<div class="uac-loader uac-loader-liquidsquare" id="__id__"> <div></div> <div></div> <div></div><div></div> </div>';

  tpls.fourdots = '<div class="uac-loader-fourdots"> \
    <div class="uac-loader-dot uac-loader-red"></div> \
    <div class="uac-loader-dot uac-loader-blue"></div> \
    <div class="uac-loader-dot uac-loader-green"></div> \
    <div class="uac-loader-dot uac-loader-yellow"></div> \
  </div>';

  tpls.bokeh = '<ul class="uac-loader uac-loader-bokeh"><li></li><li></li><li></li><li></li></ul>';

  tpls.kiri = '<div class="uac-loader uac-loader-kiri"><span></span><span></span><span></span></div>';

  tpls.sail = '<div class="uac-loader uac-loader-sail"><span></span><span></span><span></span><span></span></div>';
  
  tpls.breath = '<div class="uac-loader uac-loader-breath"><span></span><span></span></div>';

  tpls.flipDot = '<div class="uac-loader uac-loader-flipdot"> \
    <div class="semicircle upper-base"><div class="semicircle-inner"></div></div> \
    <div class="semicircle upper-move"><div class="semicircle-inner"></div></div> \
    <div class="semicircle lower-base"><div class="semicircle-inner"></div></div> \
    <div class="semicircle lower-move"><div class="semicircle-inner"></div></div> \
  </div>';
  tpls.squarePuls = '<div class="uac-loader uac-loader-squarepuls"><span></span><span></span><span></span></div>';
  tpls.wave = '<div class="uac-loader uac-loader-wave"><span></span><span></span><span></span><span></span><span></span><span></span></div>';
  tpls.orbit = '<div class="uac-loader uac-loader-orbit"><div class="uac-loader-dot"></div><div class="uac-loader-dot"></div><div class="uac-loader-dot"></div><div class="uac-loader-dot"></div><div class="uac-loader-dot"></div></div>';

  var count = 0;

  class Loader{
    constructor(option){
      this.elm = null;
      if(!option) var option = {
        theme:'stroke',
      };
      var $container = option.container || document.body;
      var tpl = tpls[ option.theme ] || tpls['stroke'];

      this.id = idGen();

      this.elm = angular.element( 
        tpl.replace('__id__',this.id)
        .replace('__className__',option.className || '') 
      )[0];
      $container.appendChild(this.elm);
    }

    hide() {
      this.elm.style.display = 'none';
    }
    show(){
      this.elm.style.display = 'block';
    }
    remove(delay){
      delay = delay || 0;
      setTimeout(function(){
        this.elm.remove();

      }.bind(this),delay);
    }

  }

   function idGen(){
    return 'uac-loader-elm-'+ (count++);
  }

  return (opt) => {
    return new Loader( opt );
  };

});


