

const img = document.getElementById( 'img' )
const buttons = document.getElementById( 'buttons' )

let coresIndex = 0
let intervalID = null

const trafficLight = (event)=>{
    parar()
    ligar[event.target.id]()
    //aqui vai ação dependendo do click
    
    //console.log(event.target.id) //aqui eu sei em qual botão estou clicando
}

const proximoIndex = ()=>{

    coresIndex = coresIndex < 2 ? ++coresIndex:0

  /*
    if(coresIndex <2 ){
        coresIndex++
    }else{
        coresIndex = 0
    }
  */
}

const changeColor = ()=>{
    const cores = ['red', 'yellow', 'green']
    const color = cores[coresIndex]
    ligar[color]()
    proximoIndex();
    //console.log('teste cor')
}

const parar = ()=>{
    clearInterval(intervalID)
    //aqui vai a função de parar a mudança automática
}

const ligar = {
    'red': ()=> img.src = './img/vermelho.png',
    'yellow': ()=>img.src = './img/amarelo.png',
    'green': ()=>img.src = './img/verde.png',
    'automatic':()=> intervalID = setInterval(changeColor, 1000)
    //usando o objeto eu consigo armazenar funções, e chamar com mais facilidade
}

buttons.addEventListener('click', trafficLight)
//aqui esta o evento de click para a função trafficLight

