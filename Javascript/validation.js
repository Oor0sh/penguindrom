$(document).ready(function () {

    $("#firstName").focus(function () {
        $("#firstName").css('border', '1px solid gray');
        $("#firstName").css('box-sizing', 'border-box');
        $("#nameError").text('');
    });
    $("#firstName").blur(function () {
        var nameCheck = document.getElementById('firstName').value;
        const nameRegEx = /^[A-Z][a-z]+$/;
        if (!(nameRegEx.test(nameCheck))) {
            $("#firstName").css('border', '2px solid red');
            $("#nameError").text("Invalid name !");
        }
        else {
            $("#firstName").css('border', '1px solid gray');
            $("#firstName").css('box-sizing', 'border-box');
            $("#nameError").text('');
        }
    });


    $("#lastName").focus(function () {
        $("#lastName").css('border', '1px solid gray');
        $("#lastName").css('box-sizing', 'border-box');
        $("#surnameError").text('');
    });
    $("#lastName").blur(function () {
        var surnameCheck = document.getElementById('lastName').value;
        const surnameRegEx = /^[A-Z][a-z]+$/;
        if (!(surnameRegEx.test(surnameCheck))) {
            $("#lastName").css('border', '2px solid red');
            $("#surnameError").text("Invalid surname !");
        }
        else {
            $("#lastName").css('border', '1px solid gray');
            $("#lastName").css('box-sizing', 'border-box');
            $("#surnameError").text('');
        }
    });

    $("#mail").focus(function () {
        $("#mail").css('border', '1px solid gray');
        $("#mail").css('box-sizing', 'border-box');
        $("#emailError").text('');
    });
    $("#mail").blur(function () {
        var mailCheck = document.getElementById('mail').value;
        //^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$
        const mailRegEx = /@(gmail|yahoo|outlook|hotmail).com/;
        if (!(mailRegEx.test(mailCheck))) {
            $("#mail").css('border', '2px solid red');
            $("#emailError").text("Invalid email !");
        }
        else {
            $("#mail").css('border', '1px solid gray');
            $("#mail").css('box-sizing', 'border-box');
            $("#emailError").text('');
        }
    });


    $("#donationAmount").focus(function () {
        $("#donationAmount").css('border', '1px solid gray');
        $("#donationAmount").css('box-sizing', 'border-box');
        $("#donationError").text('');
    });
    $("#donationAmount").blur(function () {
        var amountCheck = document.getElementById('donationAmount').value;
        const amountRegEx = /^\d+$/;
        if (!(amountRegEx.test(amountCheck))) {
            $("#donationAmount").css('border', '2px solid red');
            $("#donationError").text("Invalid amount !");
        }
        else {
            $("#donationAmount").css('border', '1px solid gray');
            $("#donationAmount").css('box-sizing', 'border-box');
            $("#donationError").text('');
        }
    });


    $("#cardNumber").keyup(function () {
        var length = document.getElementById('cardNumber').value;
        var counter = length.length;
        $("#cardNumError").text(counter);
    });
    $("#cardNumber").focus(function () {
        $("#cardNumber").css('border', '1px solid gray');
        $("#cardNumber").css('box-sizing', 'border-box');
        var length = document.getElementById('cardNumber').value;
        var counter = length.length;
        $("#cardNumError").text(counter);
    });
    $("#cardNumber").blur(function () {
        var cardCheck = document.getElementById('cardNumber').value;
        const cardRegEx = /^\d{16,16}$/;
        if (!(cardRegEx.test(cardCheck))) {
            $("#cardNumber").css('border', '2px solid red');
            $("#cardNumError").text("Invalid card number ! (Must contain 16 digits)");
        }
        else {
            $("#cardNumber").css('border', '1px solid gray');
            $("#cardNumber").css('box-sizing', 'border-box');
            $("#cardNumError").text('');
        }
    });

    $("#cardDate").focus(function () {
        $("#cardDate").css('border', '1px solid gray');
        $("#cardDate").css('box-sizing', 'border-box');
        $("#cardDateError").text('');
    });
    $("#cardDate").blur(function () {
        var dateCheck = document.getElementById('cardDate').value;
        const dateRegEx = /([0][1-9]|[1][0-2])\/([2][2-9]|[3][9])$/;
        if (!(dateRegEx.test(dateCheck))) {
            $("#cardDate").css('border', '2px solid red');
            $("#cardDateError").text("Invalid expiry date !");
        }
        else {
            $("#cardDate").css('border', '1px solid gray');
            $("#cardDate").css('box-sizing', 'border-box');
            $("#cardDateError").text('');
        }
    });


    $("#CVV").focus(function () {
        $("#CVV").css('border', '1px solid gray');
        $("#CVV").css('box-sizing', 'border-box');
        $("#cvvError").text('');
    });
    $("#CVV").blur(function () {
        var cvvCheck = document.getElementById('CVV').value;
        const cvvRegEx = /^[0-9][0-9][0-9]$/;
        if (!(cvvRegEx.test(cvvCheck))) {
            $("#CVV").css('border', '2px solid red');
            $("#cvvError").text("Invalid CVV !");
        }
        else {
            $("#CVV").css('border', '1px solid gray');
            $("#CVV").css('box-sizing', 'border-box');
            $("#cvvError").text('');
        }
    });

});

