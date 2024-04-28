$(document).ready(function() {
    $('.form-container form').submit(function(event) {
        event.preventDefault();
        
        var formData = {
            'Name': $('input[name=Name]').val(),
            'Email': $('input[name=Email]').val(),
            'Phone': $('input[name=Phone]').val()
        };
        
        $.ajax({
            type: 'POST',
            url: 'https://script.google.com/macros/s/AKfycbw-KftUJf_7cLL08SI5ZAO_BK2-m5zcnXRmHokU2XnkjJVGbkHFto-gx-ca7TG10zBj7w/exec',
            dataType: 'json',
            data: formData,
            success: function(response) {
                alert('Data submitted successfully');
                $('input[name=Name]').val('');
                $('input[name=Email]').val('');
                $('input[name=Phone]').val('');
            },
            error: function(xhr, status, error) {
                alert('submitted successfully Our founder will get back to shortly');
                console.error(xhr, status, error);
            }
        });
    });
});
