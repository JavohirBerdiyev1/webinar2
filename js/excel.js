'use strict';
let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();
    
    formData.append('ismi', user?.name);
    formData.append('telefonRaqami', user?.phone);
    formData.append(`date`, user?.time);
    fetch('https://script.google.com/macros/s/AKfycbyLaEfITjKr6VR8aKE-fGvLz_Z2WGapaiHX7J1zNlCgXS3R6ApfPyToZaTP5ktQ8c-e/exec', {
        method: 'POST',
        body: formData
    })
        .then(res => {
            res.json()
            console.log("sayt", res);
           
        })
        .then(() => {
            localStorage.clear();
        })
        // window.open("https://t.me/+lLxhFLjYBG5kNWVi", "_blank");
} else {
    localStorage.clear();
}
