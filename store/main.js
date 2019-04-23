
export const state = () =>
  ({
      leftQuantity: 100,
      leftPrice: 100,
      rightQuantity: 160,
      rightPrice: 110,

      chosenArea: 'leftQuantity',

      isSelectedAll: true
  })

export const getters = {
    //スマートフォンか
    isSP: () =>
      /iPhone|iPod|iPad|Android/i.test(navigator.userAgent),

    getKeyboard: () =>
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Tab', 0, 'C'],

    results(state){
      const TAX = 8

      const leftPriceIncludingTax = ~~(state.leftPrice / 100 * (100 + TAX))
      const rightPriceIncludingTax = ~~(state.rightPrice / 100 * (100 + TAX))

      const leftPricePerQuantity = leftPriceIncludingTax / state.leftQuantity || 0
      const rightPricePerQuantity = rightPriceIncludingTax / state.rightQuantity || 0

      if(leftPricePerQuantity < rightPricePerQuantity)
        return {left: 'やすい', right: 'たかい'}
      
      if(leftPricePerQuantity > rightPricePerQuantity)
        return {left: 'たかい', right: 'やすい'}

      if(leftPricePerQuantity === rightPricePerQuantity)
        return {left: 'おなじ', right: 'おなじ'}

    },
}


const orderOfAreas = ['leftQuantity', 'leftPrice', 'rightQuantity', 'rightPrice']

export const mutations = {
  switchArea(state, area){
    state.chosenArea = area
    if(state[orderOfAreas[(orderOfAreas.indexOf(state.chosenArea))]]){
      state.isSelectedAll = true
    } else {
      state.isSelectedAll = false
    }
  },


  inputNum(state, n){

    if(n === 'C'){
      if(state.isSelectedAll){
        state[state.chosenArea] = 0
        state.isSelectedAll = false
      } else {
        state[state.chosenArea] = ~~(state[state.chosenArea] / 10)
      }
      return
    }

    if(n === 'Tab'){
      state.chosenArea = orderOfAreas[(orderOfAreas.indexOf(state.chosenArea) + 1) % orderOfAreas.length]
      if(state[orderOfAreas[(orderOfAreas.indexOf(state.chosenArea))]]){
        state.isSelectedAll = true
      } else {
        state.isSelectedAll = false
      }
      return
    }
    
    if(!state.isSelectedAll && state[state.chosenArea] >= 1000){
      state.chosenArea = orderOfAreas[(orderOfAreas.indexOf(state.chosenArea) + 1) % orderOfAreas.length]
      if(state[orderOfAreas[(orderOfAreas.indexOf(state.chosenArea))]]){
        state.isSelectedAll = true
      } else {
        state.isSelectedAll = false
      }
      return
    }


    if(state.isSelectedAll){
      state[state.chosenArea] = n
      state.isSelectedAll = false
    } else {
      state[state.chosenArea] = state[state.chosenArea] * 10 + n
    }
  }

}