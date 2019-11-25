/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('gtutorials', [])

.service('Gtutorials', [function(){
    
    var gtutorials_list = [
        {
            key: 'Gòng róng',
            termine: '共融',
          senza: 'גדול',
            traslitterazione: 'Gòng róng',
            significato: 'Communion',
            grammatica: '求你藉這共融聖事',
            altro: '',
            id: '1'
        },
          
        {
            key: 'Guānwàng',
            termine: '觀望',
          senza: 'גדול',
            traslitterazione: 'Guānwàng',
            significato: 'Fermarsi a osservare',
            grammatica: '民眾站著觀望;',
            altro: '',
            id: '2'
        },
       
        {
          key: 'Guīyú',
          termine: '歸於',
          senza: 'גדול',
          traslitterazione: 'Guīyú',
          significato: 'Attribution',
          grammatica: '歸於自己權下',
          altro: '',
          id: '3'
        }
        
       
        
      ];
      
      var gtutorials_keys = {};

      for (var i=0;i<gtutorials_list.length;i++){
        gtutorials_keys[gtutorials_list[i].key] = gtutorials_list[i];
      }

    return {
        list: gtutorials_list,
        keys: gtutorials_keys
    }

}]);
