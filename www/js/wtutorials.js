/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('wtutorials', [])

.service('Wtutorials', [function(){
    
    var wtutorials_list = [
        {
          key: 'Wú diàn',
          termine: '無玷',
          senza: 'גדול',
          traslitterazione: 'Wú diàn',
          significato: 'innocent',
          grammatica: '無玷祭品',
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
      
      var wtutorials_keys = {};

      for (var i=0;i<wtutorials_list.length;i++){
        wtutorials_keys[wtutorials_list[i].key] = wtutorials_list[i];
      }

    return {
        list: wtutorials_list,
        keys: wtutorials_keys
    }

}]);
