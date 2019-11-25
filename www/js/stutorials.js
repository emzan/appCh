/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('stutorials', [])

.service('Stutorials', [function(){
    
    var stutorials_list = [
        {
          key: 'Shīshě',
          termine: '施捨',
          senza: 'גדול',
          traslitterazione: 'Shīshě',
          significato: 'Alms',
          grammatica: '我把我財物的一半施捨給窮人',
          altro: '',
          id: '1'
        },
        {
            key: 'Shòu fù zhě',
            termine: '受傅者',
          senza: 'גדול',
            traslitterazione: 'Shòu fù zhě',
            significato: 'Receiver',
            grammatica: '如果這人是天主的受傅者',
            altro: '',
            id: '2'
          },
        {
            key: 'Shǒulǐng',
            termine: '首領',
          senza: 'גדול',
            traslitterazione: 'Shǒulǐng',
            significato: 'leader',
            grammatica: '首領們嗤笑耶穌',
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
      
      var stutorials_keys = {};

      for (var i=0;i<stutorials_list.length;i++){
        stutorials_keys[stutorials_list[i].key] = stutorials_list[i];
      }

    return {
        list: stutorials_list,
        keys: stutorials_keys
    }

}]);
