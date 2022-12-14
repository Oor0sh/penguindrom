$(document).ready(function () {


    $('#vul').click(function () {
        $('#vulnerable').toggle();
    });
    $('#end').click(function () {
        $('#endangered').toggle();
    });

    GFG_Fun();
    $("#cardNumber").hide();
    $("#cardDate").hide();
    $("#CVV").hide();
    $('#SubmitButton').attr('disabled', 'disabled');
    $('#SubmitButton').css('background-color', 'gray');
    var arrayTitles = ['Habitat loss', 'Pollution', 'Diseases', 'Reduced food quality', 'Climate change'];
    var arrayImages = ['url("images/migration.jpg")', 'url("images/pollution.jpg")', 'url("images/diseases.jpg")', 'url("images/food.jpg")', 'url("images/climateChange.jpg")']
    var arrayContents = ['The changes in temperatures, the changes in food availability and the need to mate, among other factors, make many animals move to other areas, that is, migrate. In zoology, migration is the periodic journey, which animals do from time to time, to reach areas where they can meet their needs.', 'Oil spills can have devastating localised effects particularly for small penguin populations. Oil affects penguins in two ways either through ingestion which may lower hormones and suppress breeding or poison them; or through the oiling of feathers.', 'Penguins are flightless seabirds with unique anatomy. Although susceptible to a wide range of diseases, aspergillosis and avian malaria dominate captive mortalities, whereas starvation impacts free-ranging colonies.', 'Birds who live much of their lives at sea are starving to death because they can’t compete with humanity’s insatiable appetite for seafood. Seabirds, as an entire species group, could go extinct in the next 50 years if the fishing industry does not adopt more sustainable practices.', 'More than half of Antarctica’s emperor penguins could be wiped out over the next 80 years due to melting ice. Drastic changes in weather conditions are making chicks more vulnerable to predation and starvation, which puts entire species of penguins at risk of becoming endangered or extinct.']

    function Swicheroo() {
        var i = Math.floor((Math.random() * 4) + 1);
        $('#reasonWhy').text(arrayTitles[i]);
        $('#dynamicImage').css('background-image', arrayImages[i]);
        $('#dynamicInformation').text(arrayContents[i]);
        // console.log(i);
        // console.log(array[i]);
    }
    setInterval(Swicheroo, 5000);

    $('#donation').click(function () {
        $('#myModal').modal('show');
    })

    var down = document.getElementById("GFG_DOWN");
    function GFG_Fun() {

        var nameError = document.createElement("span");
        var lNameError = document.createElement("span");
        var emailError = document.createElement("span");
        var cardNumError = document.createElement("span");
        var cardDateError = document.createElement("span");
        var cvvError = document.createElement("span");
        var donationError = document.createElement("span");
        var paymentMethod = document.createElement("span");
        var paymentMethods = document.createTextNode("Select a payment method:")
        nameError.setAttribute("id", "nameError");
        lNameError.setAttribute("id", "surnameError");
        cardNumError.setAttribute("id", "cardNumError");
        cardDateError.setAttribute("id", "cardDateError");
        cvvError.setAttribute("id", "cvvError");
        donationError.setAttribute("id", "donationError");
        emailError.setAttribute("id", "emailError");
        paymentMethod.setAttribute("id","payment");

        var ty = document.createElement("p");
        var message = document.createTextNode("Any donation is very much appreciated! ❤️");

        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");
        form.setAttribute("id", "myForm");
        var fName = document.createElement("input");
        fName.setAttribute("type", "text");
        fName.setAttribute("name", "firstName");
        fName.setAttribute("id", "firstName");
        fName.setAttribute("placeholder", "First Name");

        var lName = document.createElement("input");
        lName.setAttribute("type", "text");
        lName.setAttribute("name", "lastName");
        lName.setAttribute("placeholder", "Last Name");
        lName.setAttribute("id", "lastName");

        var ID = document.createElement("input");
        ID.setAttribute("type", "text");
        ID.setAttribute("id", "mail");
        ID.setAttribute("name", "emailID");
        ID.setAttribute("placeholder", "E-Mail");
        ID.setAttribute("required", "true");

        var amount = document.createElement("input");
        amount.setAttribute("type", "text");
        amount.setAttribute("name", "amount");
        amount.setAttribute("id", "donationAmount");
        amount.setAttribute("placeholder", "Amount to donate");
        amount.setAttribute("required", "true");

        var paypal = document.createElement("input")
        paypal.setAttribute("type", "radio");
        paypal.setAttribute("name", "payment");
        paypal.setAttribute("id", "paypalPayment");
        var card = document.createElement("input")
        card.setAttribute("type", "radio");
        card.setAttribute("name", "payment");
        card.setAttribute("id", "cardPayment");

        var CVV = document.createElement("input");
        CVV.setAttribute("type", "text");
        CVV.setAttribute("name", "CVV");
        CVV.setAttribute("placeholder", "CVV");
        CVV.setAttribute("id", "CVV");
        CVV.setAttribute("required", "true");

        var check = document.createElement("input")
        check.setAttribute("type", "checkbox");
        check.setAttribute("name", "Agreement");
        check.setAttribute("id", "agreement");

        var checkLabel = document.createElement("label");
        checkLabel.setAttribute("for", "checked");
        var checkLabelText = document.createTextNode("");
        checkLabel.innerHTML = "I have read and agree to the <a href='#'>Terms Of Service</a> and <a href='#'>Privacy Policy</a>.";

        var paypalLabel = document.createElement("label");
        paypalLabel.setAttribute("for", "paypal");
        var paypalLabelText = document.createTextNode("Paypal");

        var cardLabel = document.createElement("label");
        cardLabel.setAttribute("for", "card");
        var cardLabelText = document.createTextNode("Card");


        var cardNum = document.createElement("input");
        cardNum.setAttribute("type", "text");
        cardNum.setAttribute("name", "cardNumber");
        cardNum.setAttribute("placeholder", "Card Number");
        cardNum.setAttribute("id", "cardNumber");
        cardNum.setAttribute("required", "true");


        var cardDate = document.createElement("input");
        cardDate.setAttribute("type", "text");
        cardDate.setAttribute("name", "cardD");
        cardDate.setAttribute("placeholder", "Expiry Date");
        cardDate.setAttribute("id", "cardDate");
        cardDate.setAttribute("required", "true");

        var s = document.createElement("input");
        s.setAttribute("type", "button");
        s.setAttribute("value", "Continue");
        s.setAttribute("id", "SubmitButton");

        ty.append(message);
        form.append(ty);
        form.append(fName);
        form.append(nameError);
        form.append(lName);
        form.append(lNameError);
        form.append(amount);
        form.append(donationError);
        paymentMethod.append(paymentMethods);
        form.append(paymentMethod);
        form.append(card);
        cardLabel.append(cardLabelText);
        form.append(cardLabel);
        form.append(paypal);
        paypalLabel.append(paypalLabelText);
        form.append(paypalLabel);
        form.append(cardNum);
        form.append(cardNumError);
        form.append(cardDate);
        form.append(cardDateError);
        form.append(CVV);
        form.append(cvvError);
        form.append(ID);
        form.append(emailError);
        form.append(check);
        checkLabel.append(checkLabelText);
        form.append(checkLabel);
        form.append(s);
        document.getElementById("modalBody")
            .appendChild(form);
    }


    $('form').css('width', '80%');
    $('form input').css('width', '100%');
    $('form input:checkbox').css('width', '10%');
    $('form input:radio').css('width', '10%');
    $('#payment').css("color","black");




    $("#cardPayment").on("change", function () {
        if ($("#cardPayment").is(":checked")) {
            $("#cardNumber").show();
            $("#cardDate").show();
            $("#CVV").show();
        }
        else if ($("#paypalPayment").is(":checked")) {
            $("#cardNumber").hide();
            $("#cardDate").hide();
            $("#CVV").hide();
        }
    });

    $("#agreement").click("change", function () {
        if ($("#agreement").is(':checked')) {
            $('#SubmitButton').removeAttr('disabled');
            $('#SubmitButton').css('background-color', '#0078d0');
        }
        else {
            $('#SubmitButton').attr('disabled', 'disabled');
            $('#SubmitButton').css('background-color', 'gray');
        }
    });
    $("#paypalPayment").on("change", function () {
        if ($("#cardPayment").is(":checked")) {
            $("#cardNumber").show();
            $("#cardDate").show();
            $("#CVV").show();
        }
        else if ($("#paypalPayment").is(":checked")) {
            $("#cardNumber").hide();
            $("#cardDate").hide();
            $("#CVV").hide();
        }
    });
    const radio = document.querySelectorAll('[type=radio]');
    radio.forEach(box => {
        box.addEventListener('click', function () {
            if (document.getElementById("paypalPayment").checked) {
                $("#CVV").attr("disabled", true);
                $("#cardNumber").attr("disabled", true);
                $("#cardDate").attr("disabled", true);
                $("#cvvError").hide();
                $("#cardNumError").hide();
                $("#cardDateError").hide();
                
            }
            else if (document.getElementById("cardPayment").checked) {
                $("#CVV").attr("disabled", false);
                $("#cardNumber").attr("disabled", false);
                $("#cardDate").attr("disabled", false);
                $("#cvvError").show();
                $("#cardNumError").show();
                $("#cardDateError").show();
            }
        });
    });
})
