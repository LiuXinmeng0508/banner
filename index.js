$(function(){
	var html = ''
     + '<div class="slider" id="slider">'
     +'<div class="slide"><img src="img/b5.png" alt=""></div>'
     +'<div class="slide"><img src="img/b1.png" alt=""></div>'
     +'<div class="slide"><img src="img/b2.png" alt=""></div>'
     +'<div class="slide"><img src="img/b3.png" alt=""></div>'
     +'<div class="slide"><img src="img/b4.png" alt=""></div>'
     +'<div class="slide"><img src="img/b5.png" alt=""></div>'
     +'<div class="slide"><img src="img/b1.png" alt=""></div>'
     +'</div>'
     +'<span id="left"><</span>'
     +'<span id="right">></span>'
     +'<ul class="nav" id="navs">';
     +'<li class="active">1</li>'
     +'<li>2</li>'
     +'<li>3</li>'
     +'<li>4</li>'
     +'<li>5</li>'
     +'</ul>';
     var box=$('#box');
     box.html(html);
			 
	 var slider = $('#slider');
	 var left = $('#left');
     var right = $('#right');
     var oNavlist = $('#navs').contents();
	 var index = 1;
     var timer;
     var isMoving = false;
			
    box.mouseover(function(){
        left.css('opacity','50%');
        right.css('opacity','50%');
        clearInterval(timer);
     })
	box.mouseout(function(){
        left.css('opacity','0');
        right.css('opacity','0');
        timer=setInterval(next,3000);
	})
    slider.mouseout();
    
    function next(){
        if(isMoving){
            return;
        }
        isMoving = true;
        index++;
        move();        
    }

    left.click(function(){
        index--;
        move();	
    });
    right.click(function(){
        index++;
        move();	
    });
	
	function move(){
		var width=-1200*index;
		slider.animate({
			'left':width+'px'
		},1000)
		if(index == 5){
			slider.animate({'left':'-1200px'},0);   
			index = 1;
		}
		else if(index == 1){
			slider.animate({'left':'-6000px'},0);
			index = 5;
		}
		for(var i=0;i<oNavlist.length;i++){
            $(oNavlist[i]).attr('class','');
        }
        $(oNavlist[index-1]).addClass('active');
	}
	oNavlist.click(function(event){
		var obj=obj.event;
		index=$(obj).index()+1;
		move();
    });
    

})
