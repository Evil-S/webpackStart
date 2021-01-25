
function Hello(){
  console.log('hello webpack!!')
  let app = document.getElementById('app')
  let header = document.createElement('div')
  header.innerHTML = 'hello world!'
  app.append(header)
}

export default Hello()