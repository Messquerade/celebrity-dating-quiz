$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const Input1 = parseInt($("input:radio[name=pet]:checked").val());
    const Input2 = parseInt($("input:radio[name=drink]:checked").val());
    const Input3 = parseInt($("input:radio[name=hobby]:checked").val());
    const Input4 = parseInt($("input:radio[name=place]:checked").val());
    const Input5 = parseInt($("input:radio[name=season]:checked").val());

    const total = Input1 + Input2 + Input3 + Input4 + Input5
    $("#inputName").text(name);
    if (!name) {
      $("#nameAlert").show();
    } else if (total >= 12) {
      $("#result").show();
      $("#gandalf").show();
      $("#aragorn").hide();
      $("#frodo").hide();
      $("nameAlert").hide();
    } else if (total < 10 && total > 7) {
      $("#result").show();
      $("#aragorn").show();
      $("#gandalf").hide();
      $("#frodo").hide();
      $("nameAlert").hide();
    } else {
      $("#result").show();
      $("#gandalf").hide();
      $("#aragorn").hide();
      $("#frodo").show();
      $("#nameAlert").hide();
    }

  });
});