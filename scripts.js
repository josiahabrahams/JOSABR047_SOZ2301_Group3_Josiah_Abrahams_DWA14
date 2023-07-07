import './container/counter-app.js'
const machine ={
    active: 'locked',
    /**
     * @type {Record<string, State>}
     */
    states: {
    locked : {
         type: 'locked',
         pushTurnstile:() => {throw new Error('It is locked')},
        insertCoin:()=> machine.active = 'unlocked'
        },
      unlocked : {
        type: 'unlocked',
        pushTurnstile:()=> machine.active = 'locked',
        insertCoin:()=> {throw new Error('already unlocked')},
    
    } 
    }
}

const push = document.querySelector('[data-push]')
const coin =  document.querySelector('[data-coin]')

push?.addEventListener('click',()=>{

})