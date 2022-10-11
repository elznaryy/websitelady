

function SubmitForm() {
    var jsFormData = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIXzowBJ5bQkNAFDE1xjU4wCxLUIN-3k-h1Oct70q3p5XqiA/formResponse",
        data: jsFormData,
        async: false,
        dataType: "xml",
        success: function (data) {
            SuccessResponse();
        }
    });
    SuccessResponse();
    window.open('done.html', '_self');

};

function SuccessResponse() {
    $('#btnSubmit').attr("disabled", 'true');
    $("#contact-form :input").attr('disabled', true);
};

function validateForm() {
    $("#contact-form").validate();
};
$().ready(function () {
    // validate the comment form when it is submitted
    $("#contact-form").validate({
        rules: {
            "entry.282588288": {
                required: true,
                digits: true
            }
        }
    });
})


var url = $(location).attr("href"),
    parts = url.split("="),
    last_part = parts[parts.length - 1];
    last_part != url && $("#article").val(last_part);



