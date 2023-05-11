<template>
    <div id="contacts" class="container contactContainer">
        <h2 data-aos="zoom-in" data-aos-delay="100" style="text-align: center; font-weight: bold; margin-top: 50px; margin-bottom: 50px;">Contact <span style="color: aqua;">Me</span></h2>
        <form data-aos="zoom-in" data-aos-delay="100" class="needs-validation" novalidate action="https://formsubmit.co/comandarius@gmail.com" method="POST">
            <div class="containerFirstNameLastName row justify-content-center">
                <div class="col-lg-4 input">
                    <label for="validationCustom01">Name</label>
                    <input type="text" name="Name" class="form-control" id="validationCustom01" placeholder="Name" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-lg-4 input">
                    <label for="validationCustom02">E-mail</label>
                    <input type="text" name="Email" class="form-control" id="validationCustom02" placeholder="E-mail" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
            </div>
            <div class="containerLastThings row justify-content-center">
                    <div class="col-lg-4 input">
                    <label for="validationCustom03">City</label>
                    <input type="text" name="City" class="form-control" id="validationCustom03" placeholder="City" required>
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div class="col-lg-4 input">
                    <label for="validationCustom04">Company</label>
                    <input type="text" name="Company" class="form-control" id="validationCustom04" placeholder="Company" required>
                    <div class="invalid-feedback">
                        Please provide a valid company.
                    </div>
                </div>
            </div>
            <div class="containerLastThings row justify-content-center">
                <div class="col-lg-8">
                    <label for="validationCustom03">Message</label>
                    <textarea class="form-control" name="Message" id="validationCustom05" placeholder="Type your message" required></textarea>
                    <div class="invalid-feedback">
                        Please provide a valid message.
                    </div>
                    <button class="btn btn-primary" type="submit">Send</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>

<style>
.contactContainer{
    padding-top: 100px;
    min-height: 100vh;
    width: 100%;
}
button{
    margin-top: 20px;
    width: 200px;
    margin-bottom: 30px;
}
.input{
    margin-bottom: 20px;
}
textarea{
    height: 100%;
}
</style>