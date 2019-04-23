const _details = '';
const getDetails = new promise(resolve, reject) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>
            _details = response;
        )
    } catch (error) {
        console.log(error);s
    }
};

$( document ).ready(function() {
    getDetails();
    console.log(_details);
    $('#fromService').val(_details);
});
