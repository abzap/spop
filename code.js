(function () {
  var script = document.createElement("SCRIPT");
  script.src =
    "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
  script.type = "text/javascript";
  script.onload = function () {
    var $ = window.jQuery;
    var isClicked = false;
    var jQueryIsReady = function () {
      if (window.location.href.indexOf("https://shopee.co.th/cart/") > -1) {
        if ($(".shopee-input-quantity input").val() != 1) {
          $(".shopee-input-quantity input").val(1);
          $(".shopee-input-quantity input").trigger("change");
        } else {
          $(".cart-page-footer__checkout-text").parent().click();
        }
      } else if (
        window.location.href.indexOf("https://shopee.co.th/checkout/") > -1
      ) {
        $(".stardust-button").click();
      } else {
        if (!isClicked) {
          $("._2O0llP button.btn-solid-primary").click();
          isClicked = true;
        }
      }
    };
    var checkJquery = function () {
      if (typeof jQuery === "undefined") {
        return false;
      } else {
        clearTimeout(interval);
        setInterval(jQueryIsReady, 500);
      }
    };
    var interval = setInterval(checkJquery, 500);
  };
  document.getElementsByTagName("head")[0].appendChild(script);
})();
