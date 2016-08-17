
( function() {
	//-- controllers
	app.controller( 'IndexCtrl', [ '$scope', '$rootScope', 'contactFactory', function( $scope, $rootScope, contactFactory ) {
		
		$scope.pageHeader = "All Contacts";
		$rootScope.navPath = "partials/nav.html";

		$scope.contacts = contactFactory.get();
		
		$scope.templateName = $rootScope.navPath;
		
		$scope.searchText = $rootScope.searchText;
		
		$scope.$watch(function() {
		  return $rootScope.searchText;
		}, function() {
		  $scope.searchText = $rootScope.searchText;
		}, true);


	} ] );

	app.controller( 'AddCtrl', [ '$scope', '$rootScope', function( $scope, $rootScope ) {
		
		$scope.pageHeader = "Add Contacts";
		$scope.templateName = $rootScope.navPath;

	} ] );

	app.controller( 'ContactCtrl', [ '$scope', '$rootScope', '$routeParams', function( $scope, $rootScope, $routeParams ) {
		
		$scope.pageHeader = "View Contacts";
		$scope.templateName = $rootScope.navPath;
		
		console.log( $routeParams );
		console.log( "The user id is " + $routeParams.id );
	} ] );

	app.controller( 'GravtarCtrl', [ '$scope', '$rootScope', '$routeParams', 'contactFactory', function( $scope, $rootScope, $routeParams, contactFactory ) {
		
		$scope.pageHeader = "Gravtar";
		$scope.templateName = $rootScope.navPath;

		$scope.user = contactFactory.find( $routeParams.id );

	} ] );


	app.controller( 'NavigationCtrl', [ '$scope', '$rootScope', '$location', function( $scope, $rootScope, $location ) {
		$scope.templateName = "partials/nav.html";
		$scope.startSearch = function( text ) {
			$location.path( '/' );
			 
			  				$rootScope.searchText = text;
	


		};
		$scope.pageClass = function(path){
			return (path == $location.path()) ? 'active' : '';
		};
		
		

		
		console.log( "included :: ",$scope.templateName );
	} ] );
}() );

	