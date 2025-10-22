//  event.key
//  event.keyCode
//  event.code

const insert=document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
   ${event.key===' ' ?'space':event.key}
   <small>key</small>
  </div>

  <div class="key">
   ${event.keyCode}
   <small>keyCode</small>
  </div>

  <div class="key">
   ${event.code}
   <small>code</small>
  </div>
  `
})