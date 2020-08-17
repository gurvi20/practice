function getRoot(request, response){
    response.status = 200;
    response.json({
        name: 'pratik',
        value: 'somethign'
    })
}

module.exports = {
    getRoot
}