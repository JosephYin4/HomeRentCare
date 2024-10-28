async function loadData() {
    const response = await axios.get('rental.json');
    return response.data;
    }