/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ztutorials', [])

.service('Ztutorials', [function(){
    
    var ztutorials_list = [
        {
          key: 'Zǎi zhì',
          termine: '宰制',
          senza: 'גדול',
          traslitterazione: 'Zǎi zhì',
          significato: 'Slaughter',
          grammatica: '宰制者和全體天軍',
          altro: '',
          id: '1'
        },
        {
            key: 'Zuìzhuàng pái',
            termine: '罪狀牌',
          senza: 'גדול',
            traslitterazione: 'Zuìzhuàng pái',
            significato: 'Guilty card',
            grammatica: '寫的罪狀牌',
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
      
      var ztutorials_keys = {};

      for (var i=0;i<ztutorials_list.length;i++){
        ztutorials_keys[ztutorials_list[i].key] = ztutorials_list[i];
      }

    return {
        list: ztutorials_list,
        keys: ztutorials_keys
    }

}]);
