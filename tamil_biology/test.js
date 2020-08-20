/**

<div id="qbox1" class="qbox">
  <div id="qquest1" class="qquest">
    <img
      class="imgwidth"
      src="//im.rediff.com/movies/2020/aug/18quiz1.jpg?w=670&amp;h=900"
      alt=""
      style="max-width: 670px;"
    />
  </div>
  <div id="qoptbox1" class="qoptbox">
    <div id="qopt1-1" class="qopt" data-target="wrong">A. <em>Andolan</em></div>
    <div id="qopt1-2" class="qopt" data-target="wrong">B. <em>Sadak</em></div>
    <div id="qopt1-3" class="qopt" data-target="correct">
      C. <em>Aatish</em>
    </div>
  </div>
  <div id="qprompt1" class="qprompt">
    <span id="qalert1" class="qalert">&nbsp;</span>
    <span id="qans1" class="qans">C. <em>Aatish</em></span>
  </div>
  <div class="qgap">&nbsp;</div>
</div>

<div id="qbox3" class="qbox">
  <div id="qquest3" class="qquest">
    <img
      class="imgwidth"
      src="//im.rediff.com/movies/2020/aug/18quiz3.jpg?w=670&amp;h=900"
      alt=""
      style="max-width: 670px;"
    />
  </div>
  <div id="qoptbox3" class="qoptbox">
    <div id="qopt3-1" class="qopt" data-target="wrong">
      A. <em>Shor in the City</em>
    </div>
    <div id="qopt3-2" class="qopt" data-target="wrong">B. <em>Banjo</em></div>
    <div id="qopt3-3" class="qopt" data-target="correct">C. <em>Daddy</em></div>
  </div>
  <div id="qprompt3" class="qprompt">
    <span id="qalert3" class="qalert">&nbsp;</span>
    <span id="qans3" class="qans">C. <em>Daddy</em></span>
  </div>
  <div class="qgap">&nbsp;</div>
</div>

 * 
 */


(".qopt", parent.document).click(function () {
  targetval = $(this).attr("data-target");
  attrval = $(this).attr("id");

  idnum = attrval.match(/(\d+)/g);
  //alert(idnum);

  acount++;

  if (targetval == "correct") {
    $("#qprompt" + idnum[0], parent.document).show(500);
    $("#qans" + idnum[0], parent.document).show(500);
    $("#qoptbox" + idnum[0], parent.document).hide(500);
    $("#qalert" + idnum[0], parent.document).html("<strong>Correct</strong>");
    //$("#qemot"+idnum[0], parent.document).html("<img src="+getMessage(qright)+">");
    $("#qquest" + idnum[0], parent.document).css("background-color", "#CCDB39");

    ccount++;
  }

  if (targetval == "wrong") {
    $("#qprompt" + idnum[0], parent.document).show(500);
    $("#qans" + idnum[0], parent.document).show(500);
    $("#qoptbox" + idnum[0], parent.document).hide(500);
    $("#qalert" + idnum[0], parent.document).html(
      "<strong style='color:#ff3300'>Wrong</strong><br> Correct answer is: "
    );
    //$("#qemot"+idnum[0], parent.document).html("<img src="+getMessage(qwrong)+">");
    $("#qquest" + idnum[0], parent.document).css("background-color", "#FE5622");
  }

  if (acount == numqbox) {
    $("#qfinal", parent.document).show(500);

    //$("#qfinal-img", parent.document).attr("src",getMessage(qfinalimg));

    if (ccount <= 3) {
      $("#qptext", parent.document).html(
        "<strong>You know nothing about movies!</strong>"
      );
    }

    if (ccount >= 6) {
      $("#qptext", parent.document).html("<strong>Well done!</strong>");
    }

    if (ccount > 6) {
      $("#qptext", parent.document).html("<strong>You have aced it!</strong>");
    }

    $("#qpfinal", parent.document).html(
      "<strong>You scored <br></strong>" + ccount + "/" + acount
    );
  }
});
