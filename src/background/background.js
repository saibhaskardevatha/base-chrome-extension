console.log('[background] Service worker loaded.')

chrome.runtime.onInstalled.addListener(() => {
  console.log('[background] Extension installed or updated!')
  //as
})
