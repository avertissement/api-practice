function prepareAndAct() {


    $('button').on('click', function(e) {
        e.preventDefault();
        const numberPics = $('.input').find('input').val();
        $('.input').find('input').val('')
        $('.for-img').empty()
        if(numberPics <= 50 && numberPics >= 1) {
            for(let i=0; i<numberPics; i++) {
                fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(responseJson => addImg(responseJson.message))
                .catch(error => {
                    alert('Sorry, this functionality is not working currently. Please try again later.')
                    console.log(error)
                });
            }
        }
        else {
            $('.for-img').append(`<h4>Please enter a correct number within the interval.</h4>`)
        }
    })

    function addImg(serverAns) {
        $('.for-img').append(`<img src="${serverAns}"/>`)
    }

}

prepareAndAct()



