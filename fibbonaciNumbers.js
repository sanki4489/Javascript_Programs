function fibbonaciGenearator(n){
    let arrSum = [];
        if(n===1){
            arrSum = [0];
        }
        else if(n===2){
            arrSum = [0,1];
        }
        else{
            arrSum = [0,1];
            for(let i=2; i<=n; i++){
                let sum = arrSum[arrSum.length-1] + arrSum[arrSum.length-2];
                arrSum.push(sum);
            }
        }
   console.log(arrSum);
}
