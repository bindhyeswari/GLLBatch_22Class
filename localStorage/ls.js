document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('storage', function(evt){

        // list the event object
        console.log(evt);

        // list all localstorage items
        for (var i = 0, len = localStorage.length; i < len; i++) {
            var key = localStorage.key(i);
            console.log(key + ': ' + localStorage.getItem(key));
        }
    })
});