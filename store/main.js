
export const state = () =>
  ({
      leftQuantity: 100,
      leftPrice: 100,
      rightQuantity: 130,
      rightPrice: 100,
  })

export const getters = {
    //スマートフォンか
    isSP: () =>
      /iPhone|iPod|iPad|Android/i.test(navigator.userAgent),
}

export const mutations = {

  //画面1個分の高さをセットする
  setStatic100vh(){
    /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
    && document.documentElement.style.setProperty(
      '--static100vh',
      `${window.outerHeight}px`
    )
  },

    //カレンダーのリサイズ
  resizeContentsLengths(){
    
    const HEADER_HEIGHT = 80
    const AD_HEIGHT = 80


    const SCREEN_ASPECT_RATIO = 
    (window.outerHeight - HEADER_HEIGHT - AD_HEIGHT) / window.outerWidth

/*
    document.documentElement.style.setProperty(
      '--contents-height',
      `${Math.min(
        /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
          ? window.outerHeight - HEADER_HEIGHT - AD_HEIGHT
          : 1920,
          window.outerWidth * 0.95,
          600,
      )}px`
    )
    */

  }

}