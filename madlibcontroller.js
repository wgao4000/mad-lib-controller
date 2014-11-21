//Author:Wei Gao
//Date:11/20/2014
/*
  The program allows the interaction between different view pages, so the users can have different views when they click
  on different buttons
*/
angular.module('myApp',['ngMessages'])
  .controller('myControl',function($scope){
     $scope.restore=function(){
	     $scope.showContent = false;
       $scope.words=true;
       /* It does not work when we check for required fields since these fields already have the default values
           $scope.name='Male/Female name';
           $scope.dirtyTask='Dirty task';
           $scope.obnoxiousCelebrity='Obnoxious celebrity';
           $scope.jobTitle='Job title'; 
           $scope.celebrity='Celebrity';
           $scope.tediousTask='Tedious task'; 
           $scope.uselessSkill='Useless skill';
           $scope.adjective='Adjective';    
        */  
       $scope.name=null;
       $scope.dirtyTask=null;
       $scope.obnoxiousCelebrity=null;
       $scope.jobTitle=null; 
       $scope.celebrity=null;
       $scope.tediousTask=null; 
       $scope.uselessSkill=null;
       $scope.adjective=null;
       $scope.genderApprop1="he/she";
       $scope.genderApprop2="him/her";
       $scope.genderApprop3="his/her";
       $scope.gender=null;
       $scope.hugeNumber=null;
     }  
     //set all the values to null initially
     $scope.restore();
     //Change certain adjetives based on the selection from the dropdown menu
     $scope.changeItem=function(item){
       if(item=="Male"){
         // cause a problem with the required field
         // $scope.name="Male name";
         $scope.genderApprop1="he";
         $scope.genderApprop2="him";
         $scope.genderApprop3="his";
       }
       if(item=="Female"){
          // cause a problem with the required field
          // $scope.name="Female name";
          $scope.genderApprop1="she";
          $scope.genderApprop2="her";
          $scope.genderApprop3="her";
       }
     /*  cause problems with the required fields
         if(item=="" && submit && !error){
         $scope.name="Male/Female name";
         $scope.genderapprop1="he/she";
         $scope.genderapprop2="him/her";
         $scope.genderapprop3="his/her";
       }*/
     }
     //Go to the second view page and all the values are subtituted
     $scope.changeUi=function(){
       $scope.words=false;
       $scope.showContent=true;
       return false; 
     }
     //Go back to the first view page and reset the all values to null
     $scope.changeBack=function(a3){
       $scope.restore(); 
       $scope.words=true;
       $scope.showContent=false;
       $scope.madlibForm.$submitted=false;    
     }
     // If all the input values are valid, call the function to go to the second view page
     $scope.validateInputs=function(isValid){
        if(isValid)
         $scope.changeUi();
     } 
   
});

