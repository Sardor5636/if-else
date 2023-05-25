function salomlashish(){
    let timeValue = document.getElementById('time_value').value;
    if(timeValue>=4.00 && timeValue<=10.59){
        console.log('Xayrli tong');
    }
   else if (timeValue>10.59 && timeValue<=17.00) {
        console.log("Xayrli kun");
        
    } 
    else if(timeValue>17.59 || timeValue<4.00){
        console.log('Xayrli tun');
    }
}