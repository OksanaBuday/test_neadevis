var app = angular.module("myapp", []);
	app.controller("ListController", ['$scope', function($scope) {
	     $scope.personalDetails = [
        {
            'number':'2423543',
            'doc':'Cthnbasrfn',
            'reg':'Львів'
            'reg':'Стрий'
            'reg':'місто'
        }
       ];
	    
	        $scope.addNew = function(personalDetails){
	            $scope.personalDetails.push({ 
	                'number': personalDetails.number, 
	                'doc': personalDetails.doc,
	                'reg': personalDetails.reg, 
	                'reg': personalDetails.reg, 
	                'reg': personalDetails.reg,
	            });
	            $scope.PD = {};
	        };
	    
	        $scope.remove = function(){
	            var newDataList=[];
	            $scope.selectedAll = false;
	            angular.forEach($scope.personalDetails, function(selected){
	                if(!selected.selected){
	                    newDataList.push(selected);
	                }
	            }); 
	            $scope.personalDetails = newDataList;
	        };
	    
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