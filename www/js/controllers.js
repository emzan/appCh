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
          if (tutorial.termine.toLowerCase().indexOf(s) > -1 || tutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || tutorial.key.toLowerCase().indexOf(s) > -1 || tutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
          if (btutorial.termine.toLowerCase().indexOf(s) > -1 || btutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || btutorial.key.toLowerCase().indexOf(s) > -1 || btutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
          if (ctutorial.termine.toLowerCase().indexOf(s) > -1 || ctutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ctutorial.key.toLowerCase().indexOf(s) > -1 || ctutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
          if (dtutorial.termine.toLowerCase().indexOf(s) > -1 || dtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || dtutorial.key.toLowerCase().indexOf(s) > -1 || dtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
          if (etutorial.termine.toLowerCase().indexOf(s) > -1 || etutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || etutorial.senza.toLowerCase().indexOf(s) > -1 || etutorial.key.toLowerCase().indexOf(s) > -1){
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
            if (ttutorial.termine.toLowerCase().indexOf(s) > -1 || ttutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ttutorial.key.toLowerCase().indexOf(s) > -1 || ttutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
              if (ftutorial.termine.toLowerCase().indexOf(s) > -1 || ftutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ftutorial.key.toLowerCase().indexOf(s) > -1 || ftutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                if (gtutorial.termine.toLowerCase().indexOf(s) > -1 || gtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || gtutorial.key.toLowerCase().indexOf(s) > -1 || gtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                if (htutorial.termine.toLowerCase().indexOf(s) > -1 || htutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || htutorial.key.toLowerCase().indexOf(s) > -1 || htutorial.senza.toLowerCase().indexOf(s) > -1 ){
                    return true;
                } 
                return false;
              });
          }
        
        }])

        .controller('iListaNomiCtrl', ['$scope', '$stateParams', 'Itutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Itutorials) {
          
            $scope.narrowed_itutorials = Itutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_itutorials = Itutorials.list;
                    return;
                }
                
                $scope.narrowed_itutorials = Itutorials.list.filter(function(itutorial){
                  if (itutorial.termine.toLowerCase().indexOf(s) > -1 || itutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || itutorial.key.toLowerCase().indexOf(s) > -1 || itutorial.senza.toLowerCase().indexOf(s) > -1 ){
                      return true;
                  } 
                  return false;
                });
            }
          
          }])

          .controller('lListaNomiCtrl', ['$scope', '$stateParams', 'Ltutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Ltutorials) {
            
              $scope.narrowed_ltutorials = Ltutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_ltutorials = Ltutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_ltutorials = Ltutorials.list.filter(function(ltutorial){
                    if (ltutorial.termine.toLowerCase().indexOf(s) > -1 || ltutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ltutorial.key.toLowerCase().indexOf(s) > -1 || ltutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                if (jtutorial.termine.toLowerCase().indexOf(s) > -1 || jtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || jtutorial.key.toLowerCase().indexOf(s) > -1 || jtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                  if (ktutorial.termine.toLowerCase().indexOf(s) > -1 || ktutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ktutorial.key.toLowerCase().indexOf(s) > -1 || ktutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                    if (mtutorial.termine.toLowerCase().indexOf(s) > -1 || mtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || mtutorial.key.toLowerCase().indexOf(s) > -1 || mtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                      if (ntutorial.termine.toLowerCase().indexOf(s) > -1 || ntutorial.traslitterazione.toLowerCase().indexOf(s) > -1 ||  ntutorial.key.toLowerCase().indexOf(s) > -1 || ntutorial.senza.toLowerCase().indexOf(s) > -1 ){
                          return true;
                      } 
                      return false;
                    });
                }
              
              }])

              .controller('oListaNomiCtrl', ['$scope', '$stateParams', 'Otutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
              // You can include any angular dependencies as parameters for this function
              // TIP: Access Route Parameters for your page via $stateParams.parameterName
              function ($scope, $stateParams, Otutorials) {
                
                  $scope.narrowed_otutorials = Otutorials.list;
                  $scope.data = {
                      search: ''
                  }
                  
                  $scope.search = function(){
                      
                      var s = $scope.data.search.toLowerCase();
                      
                      if (s == ''){
                          $scope.narrowed_otutorials = Otutorials.list;
                          return;
                      }
                      
                      $scope.narrowed_otutorials = Otutorials.list.filter(function(otutorial){
                        if (otutorial.termine.toLowerCase().indexOf(s) > -1 || otutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || otutorial.key.toLowerCase().indexOf(s) > -1 || otutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                  if (ptutorial.termine.toLowerCase().indexOf(s) > -1 || ptutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ptutorial.key.toLowerCase().indexOf(s) > -1 || ptutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                    if (qtutorial.termine.toLowerCase().indexOf(s) > -1 || qtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || qtutorial.key.toLowerCase().indexOf(s) > -1 || qtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                      if (rtutorial.termine.toLowerCase().indexOf(s) > -1 || rtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || rtutorial.key.toLowerCase().indexOf(s) > -1 || rtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                    if (stutorial.termine.toLowerCase().indexOf(s) > -1 || stutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || stutorial.key.toLowerCase().indexOf(s) > -1 || stutorial.senza.toLowerCase().indexOf(s) > -1 ){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])

            .controller('uListaNomiCtrl', ['$scope', '$stateParams', 'Ututorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, Ututorials) {
              
                $scope.narrowed_ututorials = Ututorials.list;
                $scope.data = {
                    search: ''
                }
                
                $scope.search = function(){
                    
                    var s = $scope.data.search.toLowerCase();
                    
                    if (s == ''){
                        $scope.narrowed_ututorials = Ututorials.list;
                        return;
                    }
                    
                    $scope.narrowed_ututorials = Ututorials.list.filter(function(ututorial){
                      if (ututorial.termine.toLowerCase().indexOf(s) > -1 || ututorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ututorial.key.toLowerCase().indexOf(s) > -1 || ututorial.senza.toLowerCase().indexOf(s) > -1 ){
                          return true;
                      } 
                      return false;
                    });
                }
              
              }])

              .controller('vListaNomiCtrl', ['$scope', '$stateParams', 'Vtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
              // You can include any angular dependencies as parameters for this function
              // TIP: Access Route Parameters for your page via $stateParams.parameterName
              function ($scope, $stateParams, Vtutorials) {
                
                  $scope.narrowed_vtutorials = Vtutorials.list;
                  $scope.data = {
                      search: ''
                  }
                  
                  $scope.search = function(){
                      
                      var s = $scope.data.search.toLowerCase();
                      
                      if (s == ''){
                          $scope.narrowed_vtutorials = Vtutorials.list;
                          return;
                      }
                      
                      $scope.narrowed_vtutorials = Vtutorials.list.filter(function(vtutorial){
                        if (vtutorial.termine.toLowerCase().indexOf(s) > -1 || vtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || vtutorial.key.toLowerCase().indexOf(s) > -1 || vtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                if (wtutorial.termine.toLowerCase().indexOf(s) > -1 || wtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || wtutorial.key.toLowerCase().indexOf(s) > -1 || wtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                  if (xtutorial.termine.toLowerCase().indexOf(s) > -1 || xtutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || xtutorial.key.toLowerCase().indexOf(s) > -1 || xtutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                  if (ytutorial.termine.toLowerCase().indexOf(s) > -1 || ytutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ytutorial.key.toLowerCase().indexOf(s) > -1 || ytutorial.senza.toLowerCase().indexOf(s) > -1 ){
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
                  if (ztutorial.termine.toLowerCase().indexOf(s) > -1 || ztutorial.traslitterazione.toLowerCase().indexOf(s) > -1 || ztutorial.key.toLowerCase().indexOf(s) > -1 || ztutorial.senza.toLowerCase().indexOf(s) > -1 ){
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

.controller('itutorialCtrl', ['$scope', '$stateParams', 'Itutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Itutorials) {

    $scope.video = Itutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('ltutorialCtrl', ['$scope', '$stateParams', 'Ltutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ltutorials) {

    $scope.video = Ltutorials.keys[$stateParams.videokey];
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

.controller('otutorialCtrl', ['$scope', '$stateParams', 'Otutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Otutorials) {

    $scope.video = Otutorials.keys[$stateParams.videokey];
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

.controller('ututorialCtrl', ['$scope', '$stateParams', 'Ututorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ututorials) {

    $scope.video = Ututorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('vtutorialCtrl', ['$scope', '$stateParams', 'Vtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Vtutorials) {

    $scope.video = Vtutorials.keys[$stateParams.videokey];
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
