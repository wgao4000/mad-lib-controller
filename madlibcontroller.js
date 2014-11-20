angular.module('myApp',['ngMessages'])
  .controller('Mycontrol',function($scope){
     $scope.restore=function(){
	     $scope.showcontent = false;
       $scope.words=true;
       $scope.name='Male/Female name';
       $scope.dirtytask='Dirty task';
       $scope.obnoxiouscelebrity='Obnoxious celebrity';
       $scope.jobtitle='Job title'; 
       $scope.celebrity='Celebrity';
       $scope.tedioustask='Tedious task'; 
       $scope.uselessskill='Useless skill';
       $scope.Adjective='Adjective';
       $scope.genderapprop1="he/she";
       $scope.genderapprop2="him/her";
       $scope.genderapprop3="his/her";
       $scope.name=null;
       $scope.dirtytask=null;
       $scope.obnoxiouscelebrity=null;
       $scope.jobtitle=null; 
       $scope.celebrity=null;
       $scope.tedioustask=null; 
       $scope.uselessskill=null;
       $scope.Adjective=null;
       $scope.genderapprop1="he/she";
       $scope.genderapprop2="him/her";
       $scope.genderapprop3="his/her";
       $scope.gender=null;
       $scope.hugenumber=null;
     }  
     $scope.restore();
     $scope.changeItem=function(item){
       if(item=="Male"){
         // $scope.name="Male name";
          $scope.genderapprop1="he";
          $scope.genderapprop2="him";
          $scope.genderapprop3="his";
       }
       if(item=="Female"){
       //  $scope.name="Female name";
         $scope.genderapprop1="she";
         $scope.genderapprop2="her";
         $scope.genderapprop3="her";
       }
     /*  if(item=="" && submit && !error){
         $scope.name="Male/Female name";
         $scope.genderapprop1="he/she";
         $scope.genderapprop2="him/her";
         $scope.genderapprop3="his/her";
       }*/
     }
     $scope.changeui=function(){
         $scope.words=false;
         $scope.showcontent=true;
         return false; 
     }
     $scope.changeback=function(a3){
         $scope.restore(); 
         $scope.words=true;
         $scope.showcontent=false;
         $scope.submitted=false;
      //   alert(a3);
     }
     $scope.validateinputs=function(isValid,issubmitte){
      //   alert("haha"+isValid);
      //   alert(issubmitte);
         if(isValid)
           $scope.changeui();
    } 
    $scope.test=function(a1,a2){
      //   alert(JSON.stringify(a1));
       //  alert(!(a1));
       //  alert("klklllll"+a2);
    }
});

