/*PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe
activar un software que permita clasificar su dieta:
alimento = {
 nombre,
 tipo (Puede ser vegetal, animal, insecto),
 nivel de energía (números entre 100-500)

}
Cree un programa que permita recibir 50 alimentos diferentes y
mediante una función primaria después de 5 segundos se
pueda obtener solo los alimentos de tipo vegetal que entreguen
mas de 200 unidades de energía. Finalmente, una función
callback debe permitir entregar la sumatoria de niveles de
energía entregados por los alimentos vegetales consumidos en
la dieta de Grogu.*/


let nombres=['Banano', 'Fresa', 'Lechuga', 'Zanahoria', 'Vaca']
let tipos=['Vegetal', 'Animal', 'Insecto']
let niveles=[]

let alimentos=[]

for(let i = 0;  i < 50;  i++){

    let alimento={}

    alimento.nombre = nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo = tipos[Math.floor(Math.random()*tipos.length)]
    alimento.nivel = Math.floor(Math.random()*400)


    alimentos.push(alimento)
}

function filtrarVegetales(alimentos, sumarEnergia){

    let vegetalesFiltrados = alimentos.filter(function(vegetal){
    return (vegetal.tipo == "Vegetal" && vegetal.nivel > 200)
    })
    setTimeout(function(){
       console.log(vegetalesFiltrados)
       sumarEnergia(niveles)
    }, 2000) 
    
    for(i = 0;  i < vegetalesFiltrados.length; i++){
        niveles.push(vegetalesFiltrados[i].nivel)
    } 
}

filtrarVegetales(alimentos, function(niveles){
    let sumaEnergia = 0    
     for(i = 0; i<niveles.length; i++){
         sumaEnergia += niveles[i]
     }
     console.log(`La sumatoria de niveles de energía entregados por los alimentos es: ${sumaEnergia}`)

})
