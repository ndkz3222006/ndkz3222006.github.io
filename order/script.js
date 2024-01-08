function clean() {
    var obj = document.getElementById("text").innerHTML;
    if (obj == "" || obj == null || obj == NaN || obj == "NaN") {
        alert("Reciept is already empty!");
    } else {
        document.getElementById("text").innerHTML = "";
        alert("Reciept has been cleared!");
    }
}

function tender() {
    var obj = document.getElementById("text").innerHTML;
    if (obj == "" || obj == null || obj == NaN || obj == "NaN") {
        alert("Reciept is empty!");
    } else {
        alert("Thank you for your order!");
        document.getElementById("text").innerHTML = "";
    }
}

$(document).ready(function() {
    $(".container").mouseenter(function() {
        $(this).css("background-color", "#003566");
    });
    $(".container").mouseleave(function() {
        $(this).css("background-color", "#d62828");
    });
    $(".button").mouseenter(function() {
        $(this).css("background-color", "#003566");
    });
    $(".button").mouseleave(function() {
        $(this).css("background-color", "#d62828");
    });
    $("#ham").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Hamburger<br>";
    });
    $("#cheese").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Cheeseburger<br>";
    });
    $("#pizza").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Pizza<br>";
    });
    $("#dog").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Hot Dog<br>";
    });
    $("#nuggets").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Chicken Nuggets<br>";
    });
    $("#fries").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- French Fries<br>";
    });
    $("#cookie").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Cookie<br>";
    });
    $("#ice").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Ice Cream<br>";
    });
    $("#water").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Water<br>";
    });
    $("#milk").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Milk<br>";
    });
    $("#apple").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Apple Juice<br>";
    });
    $("#grape").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Grape Juice<br>";
    });
    $("#sprite").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Sprite<br>";
    });
    $("#dr").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Dr. Pepper<br>";
    });
    $("#root").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Root Beer<br>";
    });
    $("#cola").click(function() {
        document.getElementById("text").innerHTML += "&nbsp;- Coca-Cola<br>";
    });
});