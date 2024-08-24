document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const category = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#description').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Garante que o tipo de conteúdo é JSON
            },
            body: JSON.stringify(category) // Converte o objeto em JSON
        });

        if (!response.ok) {
            throw new Error('Failed to add category');
        }

        console.log('Category added successfully');
    } catch (error) {
        console.error('Error:', error);
    }
});
