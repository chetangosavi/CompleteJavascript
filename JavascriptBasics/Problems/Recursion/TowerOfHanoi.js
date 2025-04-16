function towerOfHanoi(n,source,auxilary,destination){

    if(n > 0){
        towerOfHanoi(n-1,source,destination,auxilary)
        console.log([source,destination])
        towerOfHanoi(n-1,auxilary,source,destination)
    }
}

towerOfHanoi(3,1,2,3)