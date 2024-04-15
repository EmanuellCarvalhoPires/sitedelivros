//ignorar tudo

$(document).ready(function () {
    $('#w').change(function () {
        if ($(this).is(':checked')) {
            $('#SouEstudanteHIDE').slideDown(400);
        } else {
            $('#SouEstudanteHIDE').slideUp();
        }
    });

    $('#FieldsetCheck').change(function () {
        if ($(this).is(':checked')) {
            $('#campoAnexo').slideDown();
        } else {
            $('#campoAnexo').slideUp();
        }
    });
});


