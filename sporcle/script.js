function choose() {
    var opt = prompt("Please select which answer key you're looking for:\n0 - Taylor Swift\n1 - Norman Fucking Rockwell (Lana Del Rey)","");
    while (opt < 0 || opt > 1) {
        opt = prompt("Sorry! That number isn't one of the options, please select again:\n0 - Taylor Swift\n1 - Norman Fucking Rockwell (Lana Del Rey)", "");
    }
    if (opt = 0) {
        location.href="https://nkozak2006.github.io/sporcle/Sporcle_Answer_Sheet.xlsx";
        window.close();
    } else if (opt = 1) {
        location.href="https://nkozak2006.github.io/sporcle/Lana_Answer_Sheet.xlsx";
        window.close();
    } else {
        alert("Uh oh! Something went wrong! Redirecting you back to Sporcle!");
        location.href="https://www.sporcle.com";
    }
}