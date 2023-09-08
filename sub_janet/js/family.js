//문서로딩이 완료되면, 변수가 트루일때, 패밀리버튼을 클릭하면, 패밀리리스트를 보여줘라.
$(function(){
 var sw=true;
 
 $('.familySite').click(function(){
  sw=!sw; //부정연산자(not)을 변수값 앞에 붙여서 클릭할때마다 true, false가 되게함.
  
  if(sw==true){
  $('.family .family_list').slideUp();
	  
  } else {
   $('.family .family_list').slideDown();
  }
 });
	
	
	
	
	
	
});