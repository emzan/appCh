/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('dtutorials', [])

.service('Dtutorials', [function(){
    
    var dtutorials_list = [
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
          key: 'Dì gěi',
          termine: '遞給',
          senza: 'גדול',
          traslitterazione: 'Dì gěi',
          significato: 'Deliver',
          grammatica: '前來把醋遞給他',
          altro: '',
          id: '3'
      },
        {
          key: 'Dīng',
          termine: '釘',
          senza: 'גדול',
          traslitterazione: 'Dīng',
          significato: 'inchiodare',
          grammatica: '耶穌被釘在十字架上時',
          altro: '',
          id: '4'
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
