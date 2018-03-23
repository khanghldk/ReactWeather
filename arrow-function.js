var names = ['Dark', 'En Nhi', 'Khang'];

names.forEach(function(name) {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrow-function', name);
})