
export const state = () =>
  ({
      leftQuantity: 100,
      leftPrice: 100,
      rightQuantity: 160,
      rightPrice: 110,

      chosenArea: 'leftQuantity',
  })

export const getters = {
    //スマートフォンか
    isSP: () =>
      /iPhone|iPod|iPad|Android/i.test(navigator.userAgent),

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
  switchArea(name){
    state.chosenArea = name
  }
}