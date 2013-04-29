/**
 * Created with JetBrains PhpStorm.
 * User: KESSILER
 * Date: 07/04/13
 * Time: 03:38
 * To change this template use File | Settings | File Templates.
 */

var Framework = {
    request: function (form, method) {
        if (method == 'POST') {
            var obj = $(form).serializeArray();
            alert(obj);

        }
    },
    init: function () {
        this._handleSidebar();
        this._handleStyler();
    },
    loadWindow: function () {
    },
    _handleSidebar: function () {
        var sideBarOpen = true;
        if ($(window).width() < 900) {
            $(".page-container").removeClass("sidebar-closed");
        }
        $(".page-container .sidebar-toggler").click(function() {
            if(sideBarOpen) {
                $(".page-container").addClass("sidebar-closed");
                sideBarOpen = false;
            } else {
                $(".page-container").removeClass("sidebar-closed");
                sideBarOpen = true;
            }
        })
    },
    _handleStyler: function () {
        var panel = $('.color-panel');
        $('.icon-color', panel).click(function () {
            $('.color-mode').show();
            $('.icon-color-close').show();
        });

        $('.icon-color-close', panel).click(function () {
            $('.color-mode').hide();
            $('.icon-color-close').hide();
        });

        $('li', panel).click(function () {
            var color = $(this).attr("data-style");
            setColor(color);
            $('.inline li', panel).removeClass("current");
            $(this).addClass("current");
        });

        var setColor = function (color) {
            if (color == 'style') {
                $('#style_theme').remove();
            } else {
                $('#style_theme').remove();
                $('head').append('<link href="public/css/themes/'+color+'.css" rel="stylesheet" id="style_theme" />');
            }
        }
    }
};

jQuery(document).ready(function () {
    Framework.init();
});


