/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('jtutorials', [])

.service('Jtutorials', [function(){
    
    var jtutorials_list = [
        {
          key: 'Jìtán',
          termine: '祭壇',
          senza: 'גדול',
          traslitterazione: 'Jìtán',
          significato: 'altar',
          grammatica: '他在十字架祭壇上',
          altro: '',
          id: '1'
        },
        {
            key: 'Jí zhè',
            termine: '藉這',
          senza: 'גדול',
            traslitterazione: 'Jí zhè',
            significato: 'By this',
            grammatica: '求你藉這共融聖事',
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
      
      var jtutorials_keys = {};

      for (var i=0;i<jtutorials_list.length;i++){
        jtutorials_keys[jtutorials_list[i].key] = jtutorials_list[i];
      }

    return {
        list: jtutorials_list,
        keys: jtutorials_keys
    }

}]);
