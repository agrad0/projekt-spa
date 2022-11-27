// Dopisać window ready




$(`.hamburger-container`).click(function() {
    $(".nav-item").css("display", "block");
    $(this).css("display", "none");
    console.log($(".menu-list:first-child").text)
    $(".menu-list li:first-child").before(`<li class="li-x-sign nav-item"></li>`);
    $(".li-x-sign").click(function() {
        $(".nav-item:first-child").removeAttr("style");
        $(`.li-x-sign`).remove();
        $(`.hamburger-container`).css("display", "block");
    }
    )})


// $(".drop-up-footer").mouseenter(function() {
//     $(this).children(':nth-child(2)').animate({bottom: `0%`}, 500, function(){
//         $(this).addClass(`box-shadow`);
//     })
//     $(this).find(`.sm-container`).show().css({"height":'0%'}).animate({"height":'100%'},300);
// });

// $(".drop-up-footer").mouseleave(function() {
//     $(this).children(':nth-child(2)').animate({bottom: `-15%`}, 500)
//     $(this).find(`.sm-container`).show().css({"height":'100%'}).animate({"height":'0%'},300, function (){
//         $(this).hide();
//         $(this).parent().removeClass(`box-shadow`);
//     });
// });

// $(`.img-item2`).mouseenter(function(event) {
//     event.stopPropagation();
// });

let formCreateService = document.getElementById('myform');

const createService = (event) => {
    event.preventDefault();
    let errors = [];
    let name = document.getElementById('name');
    let email = document.getElementById(`email-address`);
    let service = document.getElementById('select-service');
    let phoneNumber = document.getElementById(`phone-number`);
    let date = document.getElementById(`date`);
    let time = document.getElementById(`time`);
    let text = document.getElementById(`notes`);


    let errorsUl = document.getElementById('errors');
    errorsUl.innerHTML = '';
    let pMsg = document.getElementById('msg');
    pMsg.innerHTML = '';

    console.log(name, email, service, phoneNumber, date, time, text);

    if (name.value.trim() === '') {
        errors.push('Podaj imię i nazwisko')
        name.style.borderColor = "red";
    }

    if (email.value.trim() === '') {
        errors.push('Podaj email')
        email.style.borderColor = "red";
    }

    if (service.value.trim() === '') {
        errors.push('Podaj usługę');
        service.style.borderColor = "red";
    }

    if (phoneNumber.value.trim() === '') {
        errors.push('Podaj numer telefonu');
        phoneNumber.style.borderColor = "red";
    }

    if (date.value.trim() === '') {
        errors.push('Podaj datę');
        date.style.borderColor = "red";
    }

    if (time.value.trim() === '') {
        errors.push('Podaj godzinę');
        time.style.borderColor = "red";
    }

    if (errors.length > 0) {
        for (const error of errors) {
            let errorLi = document.createElement('li');
            errorLi.innerText = error;
            errorsUl.appendChild(errorLi)
        }

        return false;
    }

    let newService = {
        name: name.value.trim(),
        email: email.value.trim(),
        service: service.value.trim(),
        phone: phoneNumber.value.trim(),
        date: date.value.trim(),
        time: time.value.trim(),
        message: notes.value.trim(),
    };
    console.log(newService);

    fetch(`https://akademia108.pl/api/ajax/post-appointment.php`, {
        headers: {
            'Content-Type': 'application/json', // allowed
            // 'Content-Type': 'application/xml', // NOT allowed by SERVER
        },

        // mode: 'no-cors', // ERRORS with no-cors, because only headers: HEAD, GET, POST are allowed - https://developer.mozilla.org/en-US/docs/Web/API/Request/mode
        mode: 'cors', // it is DEFAULT VALUE

        method: 'POST', // allowed
        // method: 'PUT', // allowed by CORS, but NOT allowed by SERVER
        // method: 'DELETE', // NOT allowed on server by CORS

        body: JSON.stringify(newService)
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);

            if (!resJSON.errors) {
                // formCreateUser.reset();
                pMsg.style.color = "white";
                pMsg.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`;
            }

            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


formCreateService.addEventListener('submit', createService);
