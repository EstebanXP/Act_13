const irDePaseo= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({estatus:true,idCiclista:32132});
    },8000)  
});


const comprarCasco= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({repartidor:45,distancia:30});
    },1000)  
})

const comprarGuantes= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({repartidor:22,distancia:50});
    },2000)  
})



const irDePaseoBien=()=>{
    comprarCasco
        .then(infoPago=>{
            console.log(infoPago);
            return comprarGuantes;
        })
        .then(infoCiclista=>{
            console.log(infoCiclista);
        })
        .catch(error => {
            console.error(error)
        })
        .finally(()=> {
            console.log("El proceso a finalizado");
        })
}

irDePaseoBien();
