function script() {
    var anon = document.getElementById("anon").value,
        fdbk = document.getElementById("fdbk").value,
        name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        gen = document.getElementById("gen").value,
        vent = document.getElementById("vent").value,
        form = document.getElementById("form");
    if (anon == "null") {
        alert("Oops! You need to respond to whether or not you wish to be anonymous!");
    } else if (anon == "N" && name == "") {
        alert("Oops! You said you wished to not be anonymous, meaning you need to fill in your name! If you do not wish to, you may change your answer!");
    } else if (fdbk == "null") {
        alert("Oops! You need to respond to whether or not you wish to recieve feedback/advice!");
    } else if (fdbk == "Y" && email == "") {
        alert("Oops! You said you wished to recieve feedback/advice! We need your email in order to reach back out! You can always change your answer if you don't want feedback!")
    } else if (gen == "null") {
        alert('Please fill in your gender! We do not use this for anything other than statistics! There is also an option to say "Prefer not to answer"!')
    } else if (vent == "") {
        alert('Please type your vent/rant in the text box near the bottom of the form!');
    } else {
        form.submit();
    }
    
}

$(document).ready(function() {
    $("input").focus(function() {
        $(this).css({"background":"#231942","color":"#be95c4","border":"#e0b1cb solid 0.2vw"});
    });
    $("input").blur(function() {
        $(this).css({"background":"#be95c4","color":"#231942","border":"#231942 solid 0.2vw"});
    });
    $("select").focus(function() {
        $(this).css("background","#231942");
    });
    $("select").blur(function() {
        $(this).css("background","#be95c4");
    });
    $("textarea").focus(function() {
        $(this).css({"background":"#231942","color":"#be95c4"});
    });
    $("textarea").blur(function() {
        $(this).css({"background":"#be95c4","color":"#231942"});
    });
    $("#anon").change(function() {
        var val = document.getElementById("anon").value;
        if (val == "N") {
            $(".name").css({"display":"inline-block","visibility":"visible"});
        } else if (val == "Y") {
            $(".name").css({"display":"none","visibility":"hidden"});
        } else {
            alert("Uh oh! Something went wrong!");
            location.reload();
        }
    });
    $("#fdbk").change(function() {
        var val = document.getElementById("fdbk").value;
        if (val == "Y") {
            $(".email").css({"display":"inline-block","visibility":"visible"});
        } else if (val == "N") {
            $(".email").css({"display":"none","visibility":"hidden"});
        } else {
            alert("Uh oh! Something went wrong!");
            location.reload();
        }
    });
});