/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('otutorials', [])

.service('Otutorials', [function(){
    
    var otutorials_list = [
        {
          key: 'gāḏôl',
          termine: 'גָּדוֹל',
          senza: 'גדול',
          traslitterazione: 'gāḏôl',
          significato: 'grande, importante;',
          grammatica: 'agg.',
          altro: 'cstr. גְּדוֹל - s. f. גְּדוֹלָה -  pl. m. גְּדוֹלִים - pl. f. גְּדוֹלוֹת',
          id: '1'
        },
        {
            key: 'gālāh',
            termine: 'גָּלָה',
          senza: 'גדול',
            traslitterazione: 'gālāh',
            significato: 'scoprire, rimuovere;',
            grammatica: 'v.',
            altro: 'Qal, qatal, 3 ms, scoprì, rimosse, dislocò, partì, andò in esilio;',
            id: '2'
        }
       
        
        
      ];
      
      var otutorials_keys = {};

      for (var i=0;i<otutorials_list.length;i++){
        otutorials_keys[otutorials_list[i].key] = otutorials_list[i];
      }

    return {
        list: otutorials_list,
        keys: otutorials_keys
    }

}]);
