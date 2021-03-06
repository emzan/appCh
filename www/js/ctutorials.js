/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ctutorials', [])

.service('Ctutorials', [function(){
    
    var ctutorials_list = [
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
        },
        {
          key: 'Chīxiào',
          termine: '嗤笑',
          senza: 'גדול',
          traslitterazione: 'Chīxiào',
          significato: 'laugh',
          grammatica: '首領們嗤笑耶穌',
          altro: '',
          id: '3'
      }
       
        
        
      ];
      
      var ctutorials_keys = {};

      for (var i=0;i<ctutorials_list.length;i++){
        ctutorials_keys[ctutorials_list[i].key] = ctutorials_list[i];
      }

    return {
        list: ctutorials_list,
        keys: ctutorials_keys
    }

}]);
