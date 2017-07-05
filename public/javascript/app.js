$(document).ready(function () {
  $(".jhide").hide();
  $("#notficationSucess").hide();

  var album = "";
  var name = "";
  var title = "";
  var message = "";
  var formatDate = "";

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
    $(".modal").removeClass("is-active");
  });

  $("#save").click(function() {
      name = $("#name").val();
      title = $("#titleOfMes").val();
      message = $("#message").val();
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth()+1;
      var year = today.getFullYear();
      formatDate = day + "-" + month + "-" + year;
      $.ajax({
        url: "/addcomment",
        type:"POST",
        data:{ author:name,
               title:title,
               message:message,
               datePosted: formatDate,
               albumId: album
             }
      })
      .done(function() {
        $(".modal").removeClass("is-active");

        $("#"+album).closest("header")
        .siblings("div.card-content.jhide")
        .children()
        .append(`<div class="box">
                    <article class="media">
                      <div class="media-left">
                      </div>
                      <div class="media-content">
                        <div class="content">
                          <p>
                            <strong>`+title+`</strong> <small>`+name+`</small>
                            <p>`+message+`</p>
                          </p>
                          <small>`+formatDate+`</small>
                        </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{this.votes.up}}</span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {{this.votes.down}}</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>`
              );
      })
      .fail(function(){
        console.log("error getting hit");
      });
  });

  $(".tag.button.is-medium.buttonMargin").click(function(){
    album = $(this).attr("id").toString();
  });

});
