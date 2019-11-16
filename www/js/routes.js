angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.dizionario', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/dizionario.html',
        controller: 'dizionarioCtrl'
      }
    }
  })

  .state('tabsController.sintassi', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sintassi.html',
        controller: 'sintassiCtrl'
      }
    }
  })

  .state('tabsController.lectio', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/lectio.html',
        controller: 'lectioCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.alephListaNomi', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/alephListaNomi.html',
        controller: 'alephListaNomiCtrl'
      }
    }
  })

  .state('tabsController.bethListaNomi', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/bethListaNomi.html',
        controller: 'bethListaNomiCtrl'
      }
    }
  })

  .state('tabsController.ghimelListaNomi', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/ghimelListaNomi.html',
        controller: 'ghimelListaNomiCtrl'
      }
    }
  })

  .state('tabsController.tListaNomi', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/tListaNomi.html',
        controller: 'tListaNomiCtrl'
      }
    }
  })

  .state('tabsController.fListaNomi', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/fListaNomi.html',
        controller: 'fListaNomiCtrl'
      }
    }
  })

  .state('tabsController.jListaNomi', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/jListaNomi.html',
        controller: 'jListaNomiCtrl'
      }
    }
  })

  .state('tabsController.wListaNomi', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/wListaNomi.html',
        controller: 'wListaNomiCtrl'
      }
    }
  })

  .state('tabsController.gListaNomi', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/gListaNomi.html',
        controller: 'gListaNomiCtrl'
      }
    }
  })

  .state('tabsController.zListaNomi', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/zListaNomi.html',
        controller: 'zListaNomiCtrl'
      }
    }
  })

  .state('tabsController.pListaNomi', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/pListaNomi.html',
        controller: 'pListaNomiCtrl'
      }
    }
  })

  .state('tabsController.yListaNomi', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/yListaNomi.html',
        controller: 'yListaNomiCtrl'
      }
    }
  })

  .state('tabsController.kListaNomi', {
    url: '/page27',
    views: {
      'tab1': {
        templateUrl: 'templates/kListaNomi.html',
        controller: 'kListaNomiCtrl'
      }
    }
  })

  .state('tabsController.sListaNomi', {
    url: '/page29',
    views: {
      'tab1': {
        templateUrl: 'templates/sListaNomi.html',
        controller: 'sListaNomiCtrl'
      }
    }
  })

  .state('tabsController.qListaNomi', {
    url: '/page231',
    views: {
      'tab1': {
        templateUrl: 'templates/qListaNomi.html',
        controller: 'qListaNomiCtrl'
      }
    }
  })

  .state('tabsController.rListaNomi', {
    url: '/page233',
    views: {
      'tab1': {
        templateUrl: 'templates/rListaNomi.html',
        controller: 'rListaNomiCtrl'
      }
    }
  })

  .state('tabsController.xListaNomi', {
    url: '/page235',
    views: {
      'tab1': {
        templateUrl: 'templates/xListaNomi.html',
        controller: 'xListaNomiCtrl'
      }
    }
  })

  .state('tabsController.mListaNomi', {
    url: '/page237',
    views: {
      'tab1': {
        templateUrl: 'templates/mListaNomi.html',
        controller: 'mListaNomiCtrl'
      }
    }
  })

  .state('tutorial', {
    url: '/page6',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/tutorial.html',
        controller: 'tutorialCtrl'
      }
    
  )

  .state('btutorial', {
    url: '/page8',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/btutorial.html',
        controller: 'btutorialCtrl'
      }
    
  )


  .state('ctutorial', {
    url: '/page10',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ctutorial.html',
        controller: 'ctutorialCtrl'
      }
    
  )

  .state('ttutorial', {
    url: '/page12',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ttutorial.html',
        controller: 'ttutorialCtrl'
      }
    
  )

  .state('ftutorial', {
    url: '/page14',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ftutorial.html',
        controller: 'ftutorialCtrl'
      }
  )


  .state('jtutorial', {
    url: '/page16',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/jtutorial.html',
        controller: 'jtutorialCtrl'
      }
  )

  .state('wtutorial', {
    url: '/page18',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/wtutorial.html',
        controller: 'wtutorialCtrl'
      }
  )

  .state('gtutorial', {
    url: '/page20',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/gtutorial.html',
        controller: 'gtutorialCtrl'
      }
  )

  .state('ztutorial', {
    url: '/page22',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ztutorial.html',
        controller: 'ztutorialCtrl'
      }
  )

  .state('ptutorial', {
    url: '/page24',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ptutorial.html',
        controller: 'ptutorialCtrl'
      }
  )

  .state('ytutorial', {
    url: '/page26',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ytutorial.html',
        controller: 'ytutorialCtrl'
      }
  )

  .state('ktutorial', {
    url: '/page28',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ktutorial.html',
        controller: 'ktutorialCtrl'
      }
  )

  .state('stutorial', {
    url: '/page30',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/stutorial.html',
        controller: 'stutorialCtrl'
      }
  )

  .state('qtutorial', {
    url: '/page232',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/qtutorial.html',
        controller: 'qtutorialCtrl'
      }
  )

  .state('rtutorial', {
    url: '/page234',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/rtutorial.html',
        controller: 'rtutorialCtrl'
      }
  )

  .state('xtutorial', {
    url: '/page236',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/xtutorial.html',
        controller: 'xtutorialCtrl'
      }
  )

  .state('mtutorial', {
    url: '/page238',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/mtutorial.html',
        controller: 'mtutorialCtrl'
      }
  )




$urlRouterProvider.otherwise('/page1/page2')


});