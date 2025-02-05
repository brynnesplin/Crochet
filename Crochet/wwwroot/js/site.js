// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Function to display a quoate based on the user's inputted number of hours
function getQuote() {
    // get hours from the hours input by user
    let hrs = $("#hrs").val()
    // set errorMsg equal to the error message included in the html
    let errorMsg = $("#hrs-error")
    // hide the error message if it's not already hidden
    $(errorMsg).hide();
    // input validation for only positive numbers
    if ((hrs < 0)) {
        // if number is not positive, show the error and clear the output and hours values
        $(errorMsg).show();
        output.val('')
        hrs.val('')
    } 
    // if the number of hours is positive, calculate and display the quote
    else {
        let quote = hrs * 20
        let output = $("#quote")
        output.val("$" + quote)
    }
}

