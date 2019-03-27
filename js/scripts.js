$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var patientFirst = $("input#patientFirst").val();
    var patientLast = $("input#patientLast").val();
    var patientAddress = $("input#patientAddress").val();
    var patientDate = $("input#patientDate").val();

    $(".patientFirst").text(patientFirst);
    $(".patientLast").text(patientLast);
    $(".patientAddress").text(patientAddress);
    $(".patientDate").text(patientDate);

    $("#letter").show();

    event.preventDefault();
  });
});
