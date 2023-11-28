/* eslint-disable no-undef */
// arreglo de mis codigos de fondo para tener una lista de backgrounds
const backgrounds = [
    {'01': 'bg-[url(/imgs/01.jpg)]'},
    {'02': 'bg-[url(/imgs/02.jpg)]'},
    {'03': 'bg-[url(/imgs/03.jpg)]'},
    {'04': 'bg-[url(/imgs/04.jpg)]'},
    {'09': 'bg-[url(/imgs/09.jpg)]'},
    {'10': 'bg-[url(/imgs/10.jpg)]'},
    {'11': 'bg-[url(/imgs/11.jpg)]'},
    {'13': 'bg-[url(/imgs/13.jpg)]'},
    {'50': 'bg-[url(/imgs/50.jpg)]'}
]
const getBg = (code) => { 
    //Logica para retornar la url del fondo correspondiente dependiendo del codigo que llega
    if (code == null){
        return ' '
    }else{
        const bg = code.split('').slice(0,2).join('')
        for (let background of backgrounds){
            if(background[bg]){
                const selec = background[bg]     
                return selec 
            } 
        }
    }
    
}

export {getBg};