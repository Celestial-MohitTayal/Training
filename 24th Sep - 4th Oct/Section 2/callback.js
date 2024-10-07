function fetchData(callback) {
    setTimeout(() => {
        const data = {id: 1, name: 'Alice'};
        callback(data);                         //invoking the callback with the fetched data
    },2000)
}

function processData(data) {
    console.log(`Fetched Data: ${data.name}`);
}


fetchData(processData);






//Callback Hell

fetchData((data) => {
    processData(data, (processedData) => {
        saveData(processedData, (result) => {
            console.log('Data saved:', result);
        });
    });
});