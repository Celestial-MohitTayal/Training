function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {id: 1, name: 'Mohit'};
            resolve(data);
        }, 2000)
    });
}

async function processData() {
    const data = await fetchData();
    console.log(`Fetched Data: ${data.name}`);
}

processData();


//Error Handling
function fetchData1(callback) {
    setTimeout(() => {
        const error = null;
        const data = {id: 1, name: 'Tayal'};
        callback(error, data)
    }, 2000);
}

fetchData1((error, data) => {
    if(error) {
        console.log('Error fetching data:', error);
    }else {
        console.log(`Fetched Data: ${data.name}`);
    }
});


//async/await -> try/catch
async function processData() {
    try {
        const data = await fetchData();
        console.log(`Fetched Data: ${data.name}`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}