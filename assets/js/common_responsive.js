$(function () {
  /* --------------------------------------------------------------
inview cmn
-------------------------------------------------------------- */
  $(".inview-target").css("opacity", 0);
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview-on");
    }
  });
  $(".inviewEvery").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview-on");
    } else {
      $(this).removeClass("inview-on"); //elseをいれなければ、一度きりのアニメーションになる
    }
  });
});

/* --------------------------------------------------------------
load
-------------------------------------------------------------- */

$(window).on("load", function () {
  if ($("body").css("min-width") == "320px") {
    setTimeout(function () {
      $(".menu__item-wrap").removeClass("is-load");
      $(".menu__item-triger").removeClass("is-load");
    }, 600);
  } else {
    setTimeout(function () {
      $(".menu__item-wrap").removeClass("is-load");
      $(".menu__item-triger").removeClass("is-load");
    }, 3000);
  }

  // satori form
  // 必須未入力時ボタン非活性
  $(".satori__submit_group").prepend(
    "<p class='note'>必須項目の記入が完了すると、送信ボタンが押せる状態になります。</p>"
  );
  $(".satori__submit_group #satori__submit_confirm").attr(
    "disabled",
    "disabled"
  );

  $(
    "#satori__customer_lead_company_name, #satori__customer_last_name, #satori__customer_first_name, #satori__customer_email"
  ).on("change", function () {
    checkform();
  });
  $(document).on(
    "click",
    "#satori__privacy_policy_agreement_wrapper label",
    function () {
      checkform();
    }
  );
  function checkform() {
    if (
      $("#satori__customer_lead_company_name").val() == "" ||
      $("#satori__customer_last_name").val() == "" ||
      $("#satori__customer_first_name").val() == "" ||
      $("#satori__customer_email").val() == "" ||
      $("#satori__privacy_policy_agreement").is(":checked") == false
    ) {
      $(".satori__submit_group #satori__submit_confirm").attr(
        "disabled",
        "disabled"
      );
    } else {
      $(".satori__submit_group #satori__submit_confirm").removeAttr("disabled");
    }
  }

  /* --------------------------------------------------------------
smooth scroll anchor othersite link
-------------------------------------------------------------- */
  var url = $(location).attr("href");
  if (url.indexOf("#") != -1) {
    var id = url.split("#");
    var target = "#" + id[id.length - 1];
    if (target.length) {
      var pos = $(target).offset().top;
      $("html, body").animate({ scrollTop: pos }, 300);
    }
  }
});
