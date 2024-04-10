window.addEventListener("load", checkInternetConnection);

function checkInternetConnection(){

    const statusText = document.getElementById('statusText');
    const ipAddressText = document.getElementById('ipAddressText');
    const NetworkStrengthText = document.getElementById('NetworkStrengthText');

    statusText.textContent = 'Checking...';

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((Response)=> Response.json())
        .then((DataTransfer)=>{


            ipAddressText.textContent = DataTransfer.ip;
            statusText.textContent = 'Connected'

            const connection = Navigator.connection;
            
            const NetworkStrength = connection?connection.downlink +'Mbps': 'Unknown';
            NetworkStrengthText.textContent = NetworkStrength;

        })
        .catch(()=>{
            statusText.textContent = 'Disconnected';
            ipAddressText.textContent = '-';
            NetworkStrengthText.textContent = '-';
        })


    }else{
        statusText.textContent = 'Disconnected';
        ipAddressText.textContent = '-';
        NetworkStrengthText.textContent = '-';
    }



}