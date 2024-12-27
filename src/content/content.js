console.log('[contentScript] Script injected into the page.')

document.addEventListener('click', () => {
  console.log('[contentScript] The page was clicked!')
})
