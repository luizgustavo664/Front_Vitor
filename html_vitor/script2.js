async function consumirAPI() {
    try {
        const response = await fetch('http://127.0.0.1:8000/adidas/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Certifique-se de que o elemento com id "output" existe
        const outputDiv = document.getElementById('output');
        
        if (outputDiv) {
            // Exibir dados da API no formato JSON
            outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } else {
            console.error('Elemento com id "output" não encontrado');
        }

    } catch (error) {
        console.error('Erro ao consumir a API:', error);
    }
}

window.onload = consumirAPI;
