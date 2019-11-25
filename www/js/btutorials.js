/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('btutorials', [])

.service('Btutorials', [function(){
    
    var btutorials_list = [
        {
          key: 'bāraḥ',
          termine: 'בָּרַח',
          senza: 'גדול',
          traslitterazione: 'bāraḥ',
          significato: 'fuggire, scappare;',
          grammatica: 'v.',
          altro: 'Qal, qatal, 3 ms, fuggì, scappò;',
          id: '1'
        },
        {
            key: 'beṯûlāh',
            termine: 'בְּתוּלָה',
          senza: 'גדול',
            traslitterazione: 'beṯûlāh',
            significato: 'vergine;',
            grammatica: 'n. f.',
            altro: 'cstr. בְּתוּלַת - pl. f. בְּתוּלוֹת',
            id: '2'
        },
        {
          key: 'Bèi xuǎnzhě',
          termine: '被選者',
          senza: 'גדול',
          traslitterazione: 'Bèi xuǎnzhě',
          significato: 'Selected',
          grammatica: '如果這人是天主的受傅者、被選者',
          altro: '',
          id: '3'
        },
        {
          key: 'Bēnpǎo',
          termine: '奔跑',
          senza: 'גדול',
          traslitterazione: 'Bēnpǎo',
          significato: 'run',
          grammatica: '於是他往前奔跑',
          altro: '',
          id: '4'
        },
        {
          key: 'Bīngshì',
          termine: '兵士',
          senza: 'גדול',
          traslitterazione: 'Bīngshì',
          significato: 'Soldier',
          grammatica: '兵士也戲弄耶穌',
          altro: '',
          id: '5'
        }
       
        
        
      ];
      
      var btutorials_keys = {};

      for (var i=0;i<btutorials_list.length;i++){
        btutorials_keys[btutorials_list[i].key] = btutorials_list[i];
      }

    return {
        list: btutorials_list,
        keys: btutorials_keys
    }

}]);
