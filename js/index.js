var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
	$scope.personalDetails = [{
		'number': '1234756557:12:32:3432',
		'reg': 'Вінницька обл',
		'district': 'Стрийський р-н',
		'settlement': 'Станків',
		'doc': 'Свідоцтво про право власності № 1254'
	}, ];

	$scope.addNew = function(personalDetails) {
		$scope.personalDetails.push({
			'number': personalDetails.number,
			'reg': personalDetails.reg,
			'district': personalDetails.district,
			'settlement': personalDetails.settlement,
			'doc': personalDetails.doc,
		});
		$scope.PD = {};
	};
}]);

function shorten(text, maxLength, delimiter, overflow) {
	delimiter = delimiter || "&hellip;";
	overflow = overflow || false;
	var ret = text;
	if (ret.length > maxLength) {
		var breakpoint = overflow ? maxLength + ret.substr(maxLength).indexOf(" ") : ret.substr(0, maxLength).lastIndexOf(" ");
		ret = ret.substr(0, breakpoint) + delimiter;
	}
	return ret;
}

$(document).ready(function() {
	var $editedText = $(".edited_text");
	var text = $editedText.text();
	$editedText.text(shorten(text, 40, "...", false));
});
