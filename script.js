function prepareAndAct() {


    $('button').on('click', function(e) {
        e.preventDefault();
        const numberPics = $('.input').find('input').val();
        $('.input').find('input').val('')
        if(numberPics <= 50 && numberPics >= 1) {
            for(let i=0; i<numberPics; i++) {
                fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(responseJson => addImg(responseJson.message))
                .catch(error => alert('Sorry, this functionality is not working currently. Please try again later.'));
            }
        }
    })

    function addImg(serverAns) {
        $('.for-img').append(`<img src="${serverAns}"/>`)
    }

}

prepareAndAct()



