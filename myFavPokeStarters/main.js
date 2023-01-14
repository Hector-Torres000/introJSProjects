const water = document.querySelector('#water')
const grass = document.querySelector('#grass')
const fire = document.querySelector('#fire')

const grassTable = document.querySelector('#turtwigTable')
const waterTable = document.querySelector('#piplupTable')
const fireTable = document.querySelector('#chimcharTable')

const gridContainer = document.querySelector('.level1Starters')

fire.addEventListener('click', ()=> showStats(water, grass, fireTable))
grass.addEventListener('click', ()=> showStats(water, fire, grassTable))
water.addEventListener('click', ()=> showStats(fire, grass, waterTable))

function showStats(x,y,z){
    if(x.style.display == 'none' && y.style.display == 'none'){
        x.style.display = ''
        y.style.display = ''
        
        gridContainer.style['grid-template-columns'] = 'repeat(3, 1fr)'
    }else{
        x.style.display = 'none'
        y.style.display = 'none'
        
        gridContainer.style['grid-template-columns'] = '30% 60%'
    }
    z.classList.toggle('hidden')
}

