$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const Input1 = parseInt($("input:radio[name=pet]:checked").val());
    const Input2 = parseInt($("input:radio[name=drink]:checked").val());
    const Input3 = parseInt($("input:radio[name=hobby]:checked").val());
    const Input4 = parseInt($("input:radio[name=place]:checked").val());
    const Input5 = parseInt($("input:radio[name=season]:checked").val());

    // const nameInput = $("input#name").val();
    // const seasonInput = $("#season").val();
    // const petInput = $("input:radio[name=pet]:checked").val();
    // const DOBInput = $("#DOB").val();
    // const shirtInput = $("#shirt").val();

    // $(".name").text(nameInput);
    // $(".season").text(seasonInput);
    // $(".pet").text(petInput);
    // $(".DOB").text(DOBInput);
    // $(".shirt").text("this color").css("color", shirtInput);
   
    // $("#response").show();
  })
})