$(document).ready(function () {
  $(".jhide").hide();

  $(".card-header-icon").click(function() {
    if($(this).closest("div").find(".jhide").is(":visible")) {
      $(this).find("i").removeClass("fa fa-angle-down");
      $(this).find("i").addClass("fa fa-angle-right");
      $(this).closest("div").find(".jhide").hide();
    }
    else {
      $(this).find("i").removeClass("fa fa-angle-right");
      $(this).find("i").addClass("fa fa-angle-down");
      $(this).closest("div").find(".jhide").show();
    }
  });

  $(".buttonMargin").click(function() {
    $(".modal").addClass("is-active");
  });

  $("button.delete").click(function() {
    console.log("delete me");
    $(".modal").removeClass("is-active");
  });


});

function addComment() {
  $("selector").click(function(){

  });

}
