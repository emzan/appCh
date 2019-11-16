/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('dtutorials', [])

.service('Dtutorials', [function(){
    
    var dtutorials_list = [
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
      
      var dtutorials_keys = {};

      for (var i=0;i<dtutorials_list.length;i++){
        dtutorials_keys[dtutorials_list[i].key] = dtutorials_list[i];
      }

    return {
        list: dtutorials_list,
        keys: dtutorials_keys
    }

}]);