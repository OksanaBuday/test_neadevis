
 
 var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
    $scope.personalDetails = [
        {
            'number':'1234756557:12:32:3432',
            'reg':'Вінницька обл',
            'district':'Стрийський р-н', 
            'settlement':'Станків',
            'doc':'Свідоцтво про право власності № 123'
        },
      ];
    
        $scope.addNew = function(personalDetails){
            $scope.personalDetails.push({ 
                'number': personalDetails.number, 
                'reg': personalDetails.reg,
                'district': personalDetails.district,
                'settlement': personalDetails.settlement,
                'doc': personalDetails.doc,
            });
            $scope.PD = {};
        };
    
        // $scope.remove = function(){
        //     var newDataList=[];
        //     $scope.selectedAll = false;
        //     angular.forEach($scope.personalDetails, function(selected){
        //         if(!selected.selected){
        //             newDataList.push(selected);
        //         }
        //     }); 
        //     $scope.personalDetails = newDataList;
        // };
    
        // $scope.checkAll = function () {
        //     if (!$scope.selectedAll) {
        //         $scope.selectedAll = true;
        //     } else {
        //         $scope.selectedAll = false;
        //     }
        //     angular.forEach($scope.personalDetails, function (personalDetails) {
        //         personalDetails.selected = $scope.selectedAll;
        //     });
        // }; 
    
}]);