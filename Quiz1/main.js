function resola() {
    return new Promise(a => {
        setTimeout(() => {
            a('resol')
        },2000)
    });
}

async function asyncCall() {
    console.log('calling')
    var result = await resola()
    console.log(result)
}

asyncCall()
console.log('has call')