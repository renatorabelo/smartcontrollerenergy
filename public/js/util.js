/**
 * Created with JetBrains PhpStorm.
 * User: KESSILER
 * Date: 07/04/13
 * Time: 03:38
 * To change this template use File | Settings | File Templates.
 */
var Framework = {
    request: function (action, data, type, responseHandler) {
        var params = {
            action : action,
            dataset : JSON.stringify(data)
        };
        $('body').append('<div class="modal-backdrop fade in" id="modalback">'+
                '<div id="ajaxdiv">'+
                    '<img src="public/img/ajax-loader.gif" />'+
                '</div>'+
            '</div>'
        );
        $.ajax({
            type: type,
            url: 'index.php',
            data: params,
            timeout : 30000,
            success: function(response) {
                responseHandler(response);
            },
            error: function(error) {
                alert(error);
            },
            complete: function () {
                $('#modalback').remove();
            }
        })
    },
    loadWindow : function (windowName) {
        Framework.request('loadWindow', windowName, 'GET', function (response) {
            $('.page-content').empty().append(response);
            $('#pageDashboard').removeClass('start active');
            $('#pageUser').removeClass('start active');
            $('#pageSobre').removeClass('start active');
            $('#'+windowName).addClass('start active');
        })
    },
    init: function () {
        this._handleSidebar();
        this._handleStyler();
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
            alert('oi');
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


