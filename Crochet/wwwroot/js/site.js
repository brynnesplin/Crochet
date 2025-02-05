// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.f

function getQuote() {
    let hrs = $("#hrs").val()
    let errorMsg = $("#hrs-error")

    $(errorMsg).hide();
    if ((hrs < 0)) {
        $(errorMsg).show();
        output.val('')
        hrs.val('')
    }
    else {
        let quote = hrs * 20
        let output = $("#quote")
        output.val("$" + quote)
    }
}

