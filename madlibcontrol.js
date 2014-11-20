angular.module('myApp',[])
  .controller('Mycontrol',function($scope){
	$scope.happy = false;
     $scope.name='Male/Female name';
     $scope.dirtytask='Dirty task';
     $scope.obnoxiouscelebrity='Obnoxious celebrity';
     $scope.jobtitle='Job title'; 
     $scope.celebrity='Celebrity';
     $scope.hugenumber='Huge number'; 
     $scope.tedioustask='Tedious task'; 
     $scope.uselessskill='Useless skill';
     $scope.Adjective='Adjective';
     $scope.gender='gender';
     $scope.genderapprop1="he/she";
     $scope.genderapprop2="him/her";
     $scope.genderapprop3="his/her";
     $scope.changeItem=function(item){
       if(item=="Male"){
          $scope.name="Male name";
          $scope.genderapprop1="he";
          $scope.genderapprop2="him";
          $scope.genderapprop3="his";
       }
       if(item=="Female"){
         $scope.name="Female name";
         $scope.genderapprop1="she";
         $scope.genderapprop2="her";
         $scope.genderapprop3="her";
       }
       if(item==""){
         $scope.name="Male/Female name";
         $scope.genderapprop1="he/she";
         $scope.genderapprop2="him/her";
         $scope.genderapprop3="his/her";
       }
     }
});

