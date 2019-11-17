angular.module('app.controllers', [])
  
.controller('dizionarioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sintassiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('lectioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('alephListaNomiCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {
  
    $scope.narrowed_tutorials = Tutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_tutorials = Tutorials.list;
            return;
        }
        
        $scope.narrowed_tutorials = Tutorials.list.filter(function(tutorial){
          if (tutorial.termine.toLowerCase().indexOf(s) > -1 || tutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
  }])

  .controller('bethListaNomiCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {
  
    $scope.narrowed_btutorials = Btutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_btutorials = Btutorials.list;
            return;
        }
        
        $scope.narrowed_btutorials = Btutorials.list.filter(function(btutorial){
          if (btutorial.termine.toLowerCase().indexOf(s) > -1 || btutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
  }])

  .controller('ghimelListaNomiCtrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {
  
    $scope.narrowed_ctutorials = Ctutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_ctutorials = Ctutorials.list;
            return;
        }
        
        $scope.narrowed_ctutorials = Ctutorials.list.filter(function(ctutorial){
          if (ctutorial.termine.toLowerCase().indexOf(s) > -1 || ctutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
  }])

  .controller('dListaNomiCtrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {
  
    $scope.narrowed_dtutorials = Dtutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_dtutorials = Dtutorials.list;
            return;
        }
        
        $scope.narrowed_dtutorials = Dtutorials.list.filter(function(dtutorial){
          if (dtutorial.termine.toLowerCase().indexOf(s) > -1 || dtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
  }])

  .controller('eListaNomiCtrl', ['$scope', '$stateParams', 'Etutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Etutorials) {
  
    $scope.narrowed_etutorials = Etutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_etutorials = Etutorials.list;
            return;
        }
        
        $scope.narrowed_etutorials = Etutorials.list.filter(function(etutorial){
          if (etutorial.termine.toLowerCase().indexOf(s) > -1 || etutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
  }])
   
  .controller('tListaNomiCtrl', ['$scope', '$stateParams', 'Ttutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, Ttutorials) {
    
      $scope.narrowed_ttutorials = Ttutorials.list;
      $scope.data = {
          search: ''
      }
      
      $scope.search = function(){
          
          var s = $scope.data.search.toLowerCase();
          
          if (s == ''){
              $scope.narrowed_ttutorials = Ttutorials.list;
              return;
          }
          
          $scope.narrowed_ttutorials = Ttutorials.list.filter(function(ttutorial){
            if (ttutorial.termine.toLowerCase().indexOf(s) > -1 || ttutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
          });
      }
    
    }])

    .controller('fListaNomiCtrl', ['$scope', '$stateParams', 'Ftutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, Ftutorials) {
      
        $scope.narrowed_ftutorials = Ftutorials.list;
        $scope.data = {
            search: ''
        }
        
        $scope.search = function(){
            
            var s = $scope.data.search.toLowerCase();
            
            if (s == ''){
                $scope.narrowed_ftutorials = Ftutorials.list;
                return;
            }
            
            $scope.narrowed_ftutorials = Ftutorials.list.filter(function(ftutorial){
              if (ftutorial.termine.toLowerCase().indexOf(s) > -1 || ftutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                  return true;
              } 
              return false;
            });
        }
      
      }])

      .controller('gListaNomiCtrl', ['$scope', '$stateParams', 'Gtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, Gtutorials) {
        
          $scope.narrowed_gtutorials = Gtutorials.list;
          $scope.data = {
              search: ''
          }
          
          $scope.search = function(){
              
              var s = $scope.data.search.toLowerCase();
              
              if (s == ''){
                  $scope.narrowed_gtutorials = Gtutorials.list;
                  return;
              }
              
              $scope.narrowed_gtutorials = Gtutorials.list.filter(function(gtutorial){
                if (gtutorial.termine.toLowerCase().indexOf(s) > -1 || gtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                    return true;
                } 
                return false;
              });
          }
        
        }])

        .controller('hListaNomiCtrl', ['$scope', '$stateParams', 'Htutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, Htutorials) {
        
          $scope.narrowed_htutorials = Htutorials.list;
          $scope.data = {
              search: ''
          }
          
          $scope.search = function(){
              
              var s = $scope.data.search.toLowerCase();
              
              if (s == ''){
                  $scope.narrowed_htutorials = Htutorials.list;
                  return;
              }
              
              $scope.narrowed_htutorials = Htutorials.list.filter(function(htutorial){
                if (htutorial.termine.toLowerCase().indexOf(s) > -1 || htutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                    return true;
                } 
                return false;
              });
          }
        
        }])

      .controller('jListaNomiCtrl', ['$scope', '$stateParams', 'Jtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, Jtutorials) {
        
          $scope.narrowed_jtutorials = Jtutorials.list;
          $scope.data = {
              search: ''
          }
          
          $scope.search = function(){
              
              var s = $scope.data.search.toLowerCase();
              
              if (s == ''){
                  $scope.narrowed_jtutorials = Jtutorials.list;
                  return;
              }
              
              $scope.narrowed_jtutorials = Jtutorials.list.filter(function(jtutorial){
                if (jtutorial.termine.toLowerCase().indexOf(s) > -1 || jtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                    return true;
                } 
                return false;
              });
          }
        
        }])

        .controller('kListaNomiCtrl', ['$scope', '$stateParams', 'Ktutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Ktutorials) {
          
            $scope.narrowed_ktutorials = Ktutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_ktutorials = Ktutorials.list;
                    return;
                }
                
                $scope.narrowed_ktutorials = Ktutorials.list.filter(function(ktutorial){
                  if (ktutorial.termine.toLowerCase().indexOf(s) > -1 || ktutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                      return true;
                  } 
                  return false;
                });
            }
          
          }])

          .controller('mListaNomiCtrl', ['$scope', '$stateParams', 'Mtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Mtutorials) {
            
              $scope.narrowed_mtutorials = Mtutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_mtutorials = Mtutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_mtutorials = Mtutorials.list.filter(function(mtutorial){
                    if (mtutorial.termine.toLowerCase().indexOf(s) > -1 || mtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])

            .controller('nListaNomiCtrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, Ntutorials) {
              
                $scope.narrowed_ntutorials = Ntutorials.list;
                $scope.data = {
                    search: ''
                }
                
                $scope.search = function(){
                    
                    var s = $scope.data.search.toLowerCase();
                    
                    if (s == ''){
                        $scope.narrowed_ntutorials = Ntutorials.list;
                        return;
                    }
                    
                    $scope.narrowed_ntutorials = Ntutorials.list.filter(function(ntutorial){
                      if (ntutorial.termine.toLowerCase().indexOf(s) > -1 || ntutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                          return true;
                      } 
                      return false;
                    });
                }
              
              }])

        .controller('pListaNomiCtrl', ['$scope', '$stateParams', 'Ptutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Ptutorials) {
          
            $scope.narrowed_ptutorials = Ptutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_ptutorials = Ptutorials.list;
                    return;
                }
                
                $scope.narrowed_ptutorials = Ptutorials.list.filter(function(ptutorial){
                  if (ptutorial.termine.toLowerCase().indexOf(s) > -1 || ptutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                      return true;
                  } 
                  return false;
                });
            }
          
          }])

          .controller('qListaNomiCtrl', ['$scope', '$stateParams', 'Qtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Qtutorials) {
            
              $scope.narrowed_qtutorials = Qtutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_qtutorials = Qtutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_qtutorials = Qtutorials.list.filter(function(qtutorial){
                    if (qtutorial.termine.toLowerCase().indexOf(s) > -1 || qtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])

            .controller('rListaNomiCtrl', ['$scope', '$stateParams', 'Rtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, Rtutorials) {
              
                $scope.narrowed_rtutorials = Rtutorials.list;
                $scope.data = {
                    search: ''
                }
                
                $scope.search = function(){
                    
                    var s = $scope.data.search.toLowerCase();
                    
                    if (s == ''){
                        $scope.narrowed_rtutorials = Rtutorials.list;
                        return;
                    }
                    
                    $scope.narrowed_rtutorials = Rtutorials.list.filter(function(rtutorial){
                      if (rtutorial.termine.toLowerCase().indexOf(s) > -1 || rtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                          return true;
                      } 
                      return false;
                    });
                }
              
              }])
  

          .controller('sListaNomiCtrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Stutorials) {
            
              $scope.narrowed_stutorials = Stutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_stutorials = Stutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_stutorials = Stutorials.list.filter(function(stutorial){
                    if (stutorial.termine.toLowerCase().indexOf(s) > -1 || stutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])
  

        .controller('wListaNomiCtrl', ['$scope', '$stateParams', 'Wtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, Wtutorials) {
        
          $scope.narrowed_wtutorials = Wtutorials.list;
          $scope.data = {
              search: ''
          }
          
          $scope.search = function(){
              
              var s = $scope.data.search.toLowerCase();
              
              if (s == ''){
                  $scope.narrowed_wtutorials = Wtutorials.list;
                  return;
              }
              
              $scope.narrowed_wtutorials = Wtutorials.list.filter(function(wtutorial){
                if (wtutorial.termine.toLowerCase().indexOf(s) > -1 || wtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                    return true;
                } 
                return false;
              });
          }
        
        }])

        .controller('xListaNomiCtrl', ['$scope', '$stateParams', 'Xtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Xtutorials) {
          
            $scope.narrowed_xtutorials = Xtutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_xtutorials = Xtutorials.list;
                    return;
                }
                
                $scope.narrowed_xtutorials = Xtutorials.list.filter(function(xtutorial){
                  if (xtutorial.termine.toLowerCase().indexOf(s) > -1 || xtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                      return true;
                  } 
                  return false;
                });
            }
          
          }])

        .controller('yListaNomiCtrl', ['$scope', '$stateParams', 'Ytutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Ytutorials) {
          
            $scope.narrowed_ytutorials = Ytutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_ytutorials = Ytutorials.list;
                    return;
                }
                
                $scope.narrowed_ytutorials = Ytutorials.list.filter(function(ytutorial){
                  if (ytutorial.termine.toLowerCase().indexOf(s) > -1 || ytutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                      return true;
                  } 
                  return false;
                });
            }
          
          }])

        .controller('zListaNomiCtrl', ['$scope', '$stateParams', 'Ztutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Ztutorials) {
          
            $scope.narrowed_ztutorials = Ztutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_ztutorials = Ztutorials.list;
                    return;
                }
                
                $scope.narrowed_ztutorials = Ztutorials.list.filter(function(ztutorial){
                  if (ztutorial.termine.toLowerCase().indexOf(s) > -1 || ztutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                      return true;
                  } 
                  return false;
                });
            }
          
          }])

.controller('tutorialCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {

    $scope.video = Tutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}


])

.controller('btutorialCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {

    $scope.video = Btutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}


])
 
.controller('ctutorialCtrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {

    $scope.video = Ctutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('dtutorialCtrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {

    $scope.video = Dtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('etutorialCtrl', ['$scope', '$stateParams', 'Etutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Etutorials) {

    $scope.video = Etutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('ttutorialCtrl', ['$scope', '$stateParams', 'Ttutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ttutorials) {

    $scope.video = Ttutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('ftutorialCtrl', ['$scope', '$stateParams', 'Ftutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ftutorials) {

    $scope.video = Ftutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('gtutorialCtrl', ['$scope', '$stateParams', 'Gtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Gtutorials) {

    $scope.video = Gtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('htutorialCtrl', ['$scope', '$stateParams', 'Htutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Htutorials) {

    $scope.video = Htutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])



.controller('jtutorialCtrl', ['$scope', '$stateParams', 'Jtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Jtutorials) {

    $scope.video = Jtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ktutorialCtrl', ['$scope', '$stateParams', 'Ktutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ktutorials) {

    $scope.video = Ktutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('mtutorialCtrl', ['$scope', '$stateParams', 'Mtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Mtutorials) {

    $scope.video = Mtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ntutorialCtrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ntutorials) {

    $scope.video = Ntutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ptutorialCtrl', ['$scope', '$stateParams', 'Ptutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ptutorials) {

    $scope.video = Ptutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('qtutorialCtrl', ['$scope', '$stateParams', 'Qtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Qtutorials) {

    $scope.video = Qtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('rtutorialCtrl', ['$scope', '$stateParams', 'Rtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Rtutorials) {

    $scope.video = Rtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('stutorialCtrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Stutorials) {

    $scope.video = Stutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('wtutorialCtrl', ['$scope', '$stateParams', 'Wtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Wtutorials) {

    $scope.video = Wtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('xtutorialCtrl', ['$scope', '$stateParams', 'Xtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Xtutorials) {

    $scope.video = Xtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])


.controller('ytutorialCtrl', ['$scope', '$stateParams', 'Ytutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ytutorials) {

    $scope.video = Ytutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ztutorialCtrl', ['$scope', '$stateParams', 'Ztutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ztutorials) {

    $scope.video = Ztutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])