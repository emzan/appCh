/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ktutorials', [])

.service('Ktutorials', [function(){
    
    var ktutorials_list = [
        {
          key: 'Kuǎndài',
          termine: '款待',
          senza: 'גדול',
          traslitterazione: 'Kuǎndài',
          significato: 'Hospitality',
          grammatica: '喜悅地款待耶穌',
          altro: '',
          id: '1'
        },
        {
            key: '’êḵāh',
            termine: 'אֵיכָה',
          senza: 'גדול',
            traslitterazione: '’êḵāh',
            significato: 'come? come mai?;',
            grammatica: 'particella interrogativa',
            altro: '',
            id: '2'
        },
       
        
        {
            key: '’ên',
            termine: 'אֵין',
          senza: 'גדול',
            traslitterazione: '’ên',
            significato: 'non c’è, non ci sono, non esiste;',
            grammatica: 'particella di negazione',
            altro: '',
            id: '3'
        },
        {
            key: '’îš',
            termine: 'אִישׁ',
          senza: 'גדול',
            traslitterazione: '’îš',
            significato: 'uomo, marito, maschio;',
            grammatica: 'n. m.',
            altro: 'cstr. אִישׁ - pl. ass. אֲנָשִׁים - cstr. אַנְשֵׁי',
            id: '4'
        },
        {
            key: '’āḵal',
            termine: 'אָכַל',
          senza: 'גדול',
            traslitterazione: '’āḵal',
            significato: 'mangiare;',
            grammatica: 'v.',
            altro: 'Qal, qatal, 3 ms, mangiò; ptc. att. אֹכֵל;',
            id: '5'
        },
        {
            key: '’æmeṯ',
            termine: 'אֱמֶת',
          senza: 'גדול',
            traslitterazione: '’æmeṯ',
            significato: 'verità, affidabilità, correttezza, fedeltà, costanza;',
            grammatica: 'n. f.',
            altro: 'cstr. אֱמֶת',
            id: '6'
        }
        
       
        
      ];
      
      var ktutorials_keys = {};

      for (var i=0;i<ktutorials_list.length;i++){
        ktutorials_keys[ktutorials_list[i].key] = ktutorials_list[i];
      }

    return {
        list: ktutorials_list,
        keys: ktutorials_keys
    }

}]);
