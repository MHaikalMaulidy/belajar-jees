addEventListener("message",function(message){
    const total=message.data // data= param (100000) yang di kirim di file webWorker.html
    for (let i=0;i<total;i++){
        this.postMessage(i);
    }
});