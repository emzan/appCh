/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('htutorials', [])

.service('Htutorials', [function(){
    
    var htutorials_list = [
        {
            key: 'Gòng róng',
            termine: '共融',
            traslitterazione: 'Gòng róng',
            significato: 'Communion',
            grammatica: '求你藉這共融聖事',
            altro: '',
            id: '1'
        },
       
        {
          key: 'Guīyú',
          termine: '歸於',
          traslitterazione: 'Guīyú',
          significato: 'Attribution',
          grammatica: '歸於自己權下',
          altro: '',
          id: '2'
        },
       
       
        
        {
            key: '’ên',
            termine: 'אֵין',
            traslitterazione: '’ên',
            significato: 'non c’è, non ci sono, non esiste;',
            grammatica: 'particella di negazione',
            altro: '',
            id: '3'
        },
        {
            key: '’îš',
            termine: 'אִישׁ',
            traslitterazione: '’îš',
            significato: 'uomo, marito, maschio;',
            grammatica: 'n. m.',
            altro: 'cstr. אִישׁ - pl. ass. אֲנָשִׁים - cstr. אַנְשֵׁי',
            id: '4'
        },
        {
            key: '’āḵal',
            termine: 'אָכַל',
            traslitterazione: '’āḵal',
            significato: 'mangiare;',
            grammatica: 'v.',
            altro: 'Qal, qatal, 3 ms, mangiò; ptc. att. אֹכֵל;',
            id: '5'
        },
        {
            key: '’æmeṯ',
            termine: 'אֱמֶת',
            traslitterazione: '’æmeṯ',
            significato: 'verità, affidabilità, correttezza, fedeltà, costanza;',
            grammatica: 'n. f.',
            altro: 'cstr. אֱמֶת',
            id: '6'
        }
        
       
        
      ];
      
      var htutorials_keys = {};

      for (var i=0;i<htutorials_list.length;i++){
        htutorials_keys[htutorials_list[i].key] = htutorials_list[i];
      }

    return {
        list: htutorials_list,
        keys: htutorials_keys
    }

}]);