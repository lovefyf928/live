if (typeof jQuery !== "function") {
    throw new Error("请先引入jquery");
}
else {
    jQuery.fn.dropdown = function () {
        var $pr = this;
        $pr.addClass("dropdown").children(":first-child").attr("data-trigger","dropdown").next().addClass("dropdown-menu fade");
        $pr.hover(function () {
            $(this)
                .children(".dropdown-menu")
                .toggleClass("in")
        })
    }
    jQuery.fn.accordion = function () {
        var $pr = this;
        $pr.addClass("accordion").children(":nth-child(2n+1)").addClass("title").next().addClass("content fade").first().addClass("in");
        $pr.on("click",".title",e=>
            $(e.target).next(".content").toggleClass("in")
                .siblings(".content").removeClass("in")
        );
    }
}