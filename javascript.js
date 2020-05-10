
var click =[0,0];
var art=[0,0];

var chance=1;

var photo =[];
var artt =[];




function n(){

	return Math.floor(Math.random()*143 +1);
}

function cha(){
	return Math.floor(Math.random()*7 +1);
}




function a(){
var p1 =n();
var p2 =n();
click[0]=p1;
click[1]=p2;

}

function img(){
	a();
	while(click[0]===click[1]){
		a();
	}
	return click;
}

document.querySelector('#i1').addEventListener('click',function(){
	chance=cha();

	if(chance===1||chance===3||chance===5||chance===7){
					
					var imggg=img();
					console.log(imggg);



					var temp=photo[imggg[0]];
					if(temp==undefined){
						photo[imggg[0]]=0;
					}
					else{
						photo[imggg[0]]+=1;
					}
			


					var navi=document.querySelector("#i1").src="img"+imggg[0]+".jpg";
					var navi=document.querySelector("#i2").src="img"+imggg[1]+".jpg";

	}

	else{

					var imggg=img();
					console.log(imggg);

					var temp=artt[imggg[0]];
					if(temp==undefined){
						artt[imggg[0]]=0;
					}
					else{
						artt[imggg[0]]+=1;
					}
					


					var navi=document.querySelector("#i1").src="img"+imggg[0]+".jpg";
					var navi=document.querySelector("#i2").src="img"+imggg[1]+".jpg";


	}
});


document.querySelector("#i2").addEventListener("click",function(){
chance=cha();

if(chance===1||chance===3||chance===5||chance===7){
					
					var imggg=img();
					console.log(imggg);
					
					var temp=photo[imggg[1]];
					if(temp==undefined){
						photo[imggg[1]]=0;
					}
					else{
						photo[imggg[1]]+=1;
					}
					


					var navi=document.querySelector("#i1").src="img"+imggg[0]+".jpg";
					var navi=document.querySelector("#i2").src="img"+imggg[1]+".jpg";

	}

	else{

					var imggg=img();
					console.log(imggg);
					
					var temp=artt[imggg[1]];
					if(temp==undefined){
						artt[imggg[1]]=0;
					}
					else{
						artt[imggg[1]]+=1;
					}
			


					var navi=document.querySelector("#i1").src="img"+imggg[0]+".jpg";
					var navi=document.querySelector("#i2").src="img"+imggg[1]+".jpg";


	}

});



