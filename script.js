$(document).ready(function() {
    $.ajax({url: "https://api.tvmaze.com/schedule?country=US&date=2025-09-09", success: function(result) {
        let count = 0;
        for(let i = 0; i < result.length; i++) {
            if(result[i].show.image != null) {
                count++;
                $(".tomorrows-schedule").append($('<img>', {src: result[i].show.image.medium}));
            }
            if(count == 24) {
                break;
            }
        }
        console.log(result)
    }});
});