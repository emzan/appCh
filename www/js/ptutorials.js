/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ptutorials', [])

.service('Ptutorials', [function(){
    
    var ptutorials_list = [
        {
          key: 'Pān shàng',
          termine: '攀上',
          senza: 'גדול',
          traslitterazione: 'Pān shàng',
          significato: 'Climb up',
          grammatica: '攀上了一棵野桑樹',
          altro: '',
          id: '1'
        },
        {
            key: 'Péicháng',
            termine: '賠償',
          senza: 'גדול',
            traslitterazione: 'Péicháng',
            significato: 'Compensation',
            grammatica: '我就以四倍賠償',
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
      
      var ptutorials_keys = {};

      for (var i=0;i<ptutorials_list.length;i++){
        ptutorials_keys[ptutorials_list[i].key] = ptutorials_list[i];
      }

    return {
        list: ptutorials_list,
        keys: ptutorials_keys
    }

}]);
