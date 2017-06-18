$(document).ready(function () {
    
    $("#suggest").autocomplete({
        delay: 100,
        source: function (request, response) {
            
            // Suggest URL
            var suggestURL = "/getHotel?place="+request.term;
            
            // JSONP Request
            $.ajax({
                method: 'GET',
                url: suggestURL
            })
            .success(function(data){
                response(data);
            });
        }

    });

});
