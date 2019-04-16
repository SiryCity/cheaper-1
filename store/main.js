
export const state = () =>
  ({
      leftQuantity: 100,
      leftPrice: 100,
      rightQuantity: 160,
      rightPrice: 110,

      chosenArea: 'leftQuantity',

      selectAll: true
  })

export const getters = {
    //スマートフォンか
    isSP: () =>
      /iPhone|iPod|iPad|Android/i.test(navigator.userAgent),

    getKeyboard: () =>
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Tab', 0, 'C'],

    results(state){
      const TAX = 8

      const leftPriceIncludingTax = state.leftPrice / 100 * (100 + TAX)
      const rightPriceIncludingTax = state.rightPrice / 100 * (100 + TAX)

      const leftPricePerQuantity = leftPriceIncludingTax / state.leftQuantity
      const rightPricePerQuantity = rightPriceIncludingTax / state.rightQuantity

      if(leftPricePerQuantity < rightPricePerQuantity)
        return {left: 'やすい', right: 'たかい'}
      
      if(leftPricePerQuantity > rightPricePerQuantity)
        return {left: 'たかい', right: 'やすい'}

      if(leftPricePerQuantity === rightPricePerQuantity)
        return {left: 'おなじ', right: 'おなじ'}

    },

    quantityRatio(state){
      const largerQuantity = Math.max(
        state.leftQuantity,
        state.rightQuantity
      )

      const ratio = {
        left: state.leftQuantity / largerQuantity,
        right: state.rightQuantity / largerQuantity
      }

      // 0.3以下にならないように かつ小数点以下切り捨て
      const adjustedRatio = {
        left: Math.max(~~ratio.left * 100, 90),
        right: Math.max(~~ratio.right * 100, 90),
      }

      return adjustedRatio
    }
}



export const mutations = {
  switchArea(state, area){
    state.chosenArea = area
  },

  inputNum(state, n){

    if(n === 'C'){
      state[state.chosenArea] = 0
      return
    }

    if(n === 'Tab'){
      return
    }
    
    if(state[state.chosenArea] >= 1000) return

    state[state.chosenArea] = state[state.chosenArea] * 10 + n
  }

}