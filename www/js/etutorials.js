/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('etutorials', [])

.service('Etutorials', [function(){
    
    var etutorials_list = [
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
      
      var etutorials_keys = {};

      for (var i=0;i<etutorials_list.length;i++){
        etutorials_keys[etutorials_list[i].key] = etutorials_list[i];
      }

    return {
        list: etutorials_list,
        keys: etutorials_keys
    }

}]);