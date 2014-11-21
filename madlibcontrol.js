angular.module('myApp',[])
  .controller('myControl',function($scope){
    $scope.happy = false;
    $scope.name='Male/Female name';
    $scope.dirtyTask='Dirty task';
    $scope.obnoxiousCelebrity='Obnoxious celebrity';
    $scope.jobTitle='Job title'; 
    $scope.celebrity='Celebrity';
    $scope.hugeNumber='Huge number'; 
    $scope.tediousTask='Tedious task'; 
    $scope.uselessSkill='Useless skill';
    $scope.Adjective='Adjective';
    $scope.gender='gender';
    $scope.genderApprop1="he/she";
    $scope.genderApprop2="him/her";
    $scope.genderApprop3="his/her";
    $scope.changeItem=function(item){
       if(item=="Male"){
          $scope.name="Male name";
          $scope.genderApprop1="he";
          $scope.genderApprop2="him";
          $scope.genderApprop3="his";
       }
       if(item=="Female"){
         $scope.name="Female name";
         $scope.genderApprop1="she";
         $scope.genderApprop2="her";
         $scope.genderApprop3="her";
       }
       if(item==""){
         $scope.name="Male/Female name";
         $scope.genderApprop1="he/she";
         $scope.genderApprop2="him/her";
         $scope.genderApprop3="his/her";
       }
     }
});

