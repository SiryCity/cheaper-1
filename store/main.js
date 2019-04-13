
export const state = () =>
  ({
      leftQuantity: 100,
      leftPrice: 100,
      rightQuantity: 130,
      rightPrice: 100,

      chosenValue: 'leftQuantity',
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
    
    const setCSS = (key, value) => {
      document.documentElement.style.setProperty(
        key, `${value}px`
      )
    }

    // メインエリア以外のコンポーネントの高さと幅
    const HEADER_HEIGHT = 60
    const FOOTER_HEIGHT = 20
    const AD_HEIGHT = 80
    const MARGIN = 15

    // 上の合計
    const EXCLUDED_HEIGHT = HEADER_HEIGHT + FOOTER_HEIGHT + AD_HEIGHT + MARGIN
    const EXCLUDED_WIDTH = MARGIN

    // 画面全体からメインエリア以外のコンポーネントの高さと幅を引いた高さと幅
    // このメインエリア内にイラストとキーボードが入る
    const mainAreaHeight = window.outerHeight - EXCLUDED_HEIGHT
    const mainAreaWidth = window.outerWidth - EXCLUDED_WIDTH

    const KEYBOARD_AREA_WIDTH = 250
    const KEYBOARD_AREA_HEIGHT = 200

    const illustsAreaWidth = mainAreaWidth
    const illustsAreaHeight = mainAreaHeight - KEYBOARD_AREA_HEIGHT - MARGIN

    setCSS('--keyboard-area-width', KEYBOARD_AREA_WIDTH)
    setCSS('--keyboard-area-height', KEYBOARD_AREA_HEIGHT)
    setCSS('--illusts-area-width', illustsAreaWidth)
    setCSS('--illusts-area-height', illustsAreaHeight)

  }

}