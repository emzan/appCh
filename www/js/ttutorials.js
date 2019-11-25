/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ttutorials', [])

.service('Ttutorials', [function(){
    
    var ttutorials_list = [
       
        {
            key: 'Táitóu',
            termine: '抬頭',
          senza: 'גדול',
            traslitterazione: 'Táitóu',
            significato: 'look up',
            grammatica: '抬頭一看',
            altro: '',
            id: '1'
        },
       
        {
            key: 'Tiān jūn',
            termine: '天軍',
          senza: 'גדול',
            traslitterazione: 'Tiān jūn',
            significato: 'heavenly army',
            grammatica: '宰制者和全體天軍',
            altro: '',
            id: '2'
          },
        {
            key: 'Tóusù',
            termine: '投宿',
          senza: 'גדול',
            traslitterazione: 'Tóusù',
            significato: 'Staying',
            grammatica: '他竟到有罪的人那裏投宿',
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
      
      var ttutorials_keys = {};

      for (var i=0;i<ttutorials_list.length;i++){
        ttutorials_keys[ttutorials_list[i].key] = ttutorials_list[i];
      }

    return {
        list: ttutorials_list,
        keys: ttutorials_keys
    }

}]);
