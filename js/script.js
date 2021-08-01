let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value; //user ja type korbe
    //3---
    if (userText != '') {
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                console.log(data);
                if (data.message == 'Not Found') {} else {
                    ui.showAlert("User not found!", "alert alert-danger");
                    ui.showProfile(data);
                }
            })
    } else {
        ui.clearProfile();
    }
})