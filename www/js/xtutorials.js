/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('xtutorials', [])

.service('Xtutorials', [function(){
    
    var xtutorials_list = [

        {
            key: 'Xìngfú',
            termine: '幸福',
            traslitterazione: 'Xìngfú',
            significato: 'happy',
            grammatica: '我們才能獲得永恆和圓滿的幸福',
            altro: '',
            id: '1'
        },
        {
          key: 'Xìnòng',
          termine: '戲弄',
          traslitterazione: 'Xìnòng',
          significato: 'Teasing',
          grammatica: '兵士也戲弄耶穌',
          altro: '',
          id: '2'
      },
        {
          key: 'Xúnzhǎo',
          termine: '尋找',
          traslitterazione: 'Xúnzhǎo',
          significato: 'Search',
          grammatica: '是為尋找及拯救迷失了的人',
          altro: '',
          id: '3'
        }
      
        
     
        
      ];
      
      var xtutorials_keys = {};

      for (var i=0;i<xtutorials_list.length;i++){
        xtutorials_keys[xtutorials_list[i].key] = xtutorials_list[i];
      }

    return {
        list: xtutorials_list,
        keys: xtutorials_keys
    }

}]);