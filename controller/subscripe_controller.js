
function myFunction(body) {
    return new Promise((res, rej) => {


        // xhr initiealize 
        var url = "http://health.azu-app.com/api/addSubscripe";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");
        // xhr connection check
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                return res(JSON.parse(xhr.response))
            }
        };
        // xhr payload body 
        var data
        if (body == 'home1') {
            data = JSON.stringify({
                email: document.getElementById('homeSubEmail').value,
            })
        } else if (body == 'home2') {
            data = JSON.stringify({
                email: document.getElementById('HomeSubEmail1').value,
                name: document.getElementById('HomeSubName1').value,
                meassage: document.getElementById('HomeSubMessage1').value,


            })
        } else if (body == 'contact') {
            data = JSON.stringify({
                name: document.getElementById('subName').value,
                email: document.getElementById('subEmail').value,
                phone: document.getElementById('subPhone').value,
                subject: document.getElementById('subSubject').value,
                message: document.getElementById('subMessage').value,




            })
        }

        // xhr send data 
        xhr.send(data);

    }).then(e => {

        if (e._id) {
            var x = document.getElementById("snackbar");

            x.innerHTML = 'message sent successfully'
            x.className = "show";

            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);


        } else {
            var x = document.getElementById("snackbar");
            x.innerHTML = 'error'

            x.className = "showError";

            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }



    })







}
