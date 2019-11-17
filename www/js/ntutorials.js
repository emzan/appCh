/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ntutorials', [])

.service('Ntutorials', [function(){
    
    var ntutorials_list = [
        {
          key: 'gāḏôl',
          termine: 'גָּדוֹל',
          traslitterazione: 'gāḏôl',
          significato: 'grande, importante;',
          grammatica: 'agg.',
          altro: 'cstr. גְּדוֹל - s. f. גְּדוֹלָה -  pl. m. גְּדוֹלִים - pl. f. גְּדוֹלוֹת',
          id: '1'
        },
        {
            key: 'gālāh',
            termine: 'גָּלָה',
            traslitterazione: 'gālāh',
            significato: 'scoprire, rimuovere;',
            grammatica: 'v.',
            altro: 'Qal, qatal, 3 ms, scoprì, rimosse, dislocò, partì, andò in esilio;',
            id: '2'
        }
       
        
        
      ];
      
      var ntutorials_keys = {};

      for (var i=0;i<ntutorials_list.length;i++){
        ntutorials_keys[ntutorials_list[i].key] = ntutorials_list[i];
      }

    return {
        list: ntutorials_list,
        keys: ntutorials_keys
    }

}]);