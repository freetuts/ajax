$('form.contact').on('submit', function() {

    var form = $(this),
        url  = form.attr('action'),
        type = form.attr('method'),
        data = {};
    
    form.find('[name]').each(function(index, value) {
        
        var field = $(this),
            name  = field.attr('name'),
            value = field.val();

        data[name] = value;
    });

    $.ajax({
        url:  url,
        type: type,
        data: data,
        success: function(response) {
            $('#post').append(response);
        }
    });

    return false;
});