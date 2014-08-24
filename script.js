$( document ).ready(function() {
$('.button').click(function () {
    $('.button').slideUp();
    $('#loading').slideDown();
    getsongs();
});
function getsongs() {
    $.get("http://8tracks.com/mix_sets/all.json?include=mixes&api_key=b2471b9d6bddcf039317019e6343aac3a29507d8", function (data) {
        $('#loading').slideUp();
        $.each(data.mixes, function (key, mix) {
            var output = '';
            output += '<div class="entry">';
        output += '<div class="position">' + mix.name + '</div>';
        output += '<img class="image" src="' + mix.cover_urls.sq100 + '" />';
            output += '<div class="tag">' + mix.tag_list_cache + '</div>';
            output += '<div class="desc">' + mix.description + '</div>';
            
           
            
             $('#output').append(output);
        });


    });
    
}

});