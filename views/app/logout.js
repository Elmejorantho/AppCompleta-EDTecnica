const logout = document.querySelector('#logout-btn')

logout.addEventListener('click', async e => {
try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
} catch (error) {
    console.log(error);
}


});

