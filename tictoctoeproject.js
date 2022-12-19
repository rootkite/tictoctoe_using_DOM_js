var resetbtn = document.querySelector('#resetbtn')
var tabelcells = document.querySelectorAll('td')

function cleartable() {
  for (var i = 0; i < tabelcells.length; i++) {
    tabelcells[i].textContent = ''
  }

}
resetbtn.addEventListener('click',cleartable)

  console.log('ok');

  function changemarker() {
    if (this.textContent==='') {
      this.textContent = 'X'

    }
    else if (this.textContent==='X') {
      this.textContent = 'O'
    }
    else {
      this.textContent = ''
    }

  }


  for (var i = 0; i < tabelcells.length; i++) {
    tabelcells[i].addEventListener('click', changemarker)
  }
