/**
 * Created with JetBrains PhpStorm.
 * User: KESSILER
 * Date: 07/04/13
 * Time: 03:38
 * To change this template use File | Settings | File Templates.
 */
var Framework = {
    verifyOnOff: function() {
        Framework.request('loadIpArduino', '', 'GET', false, function(response) {
            $.ajax({
                type: 'GET',
                url: response,
                dataType: 'jsonp',
                data: 'S',
                jsonp: false,
                jsonpCallback: 'jsonCallBack',
                timeout: 3000
            });
        });
        return true;
    },
    jsonCallback: function(a) {
      alert(a);
    },
    requestOnOff: function(state) {
        if($.trim(state) == 'ON') {
            state = '0';
        } else {
            state = '1';
        }
        if(Framework.requestArduino(state)) {
            if(state == '0')
            {
                $(".dashboard-stat .desc").empty().append('OFF');
                $(".dashboard-stat .more").empty().append('ON');
                $(".dashboard-stat").fadeTo(1000, 0.4);
            } else {
                $(".dashboard-stat .desc").empty().append('ON');
                $(".dashboard-stat .more").empty().append('OFF');
                $(".dashboard-stat").fadeTo(1000, 1.0);
            }
        }
    },
    requestArduino: function(data) {
        Framework.request('loadIpArduino', '', 'GET', false, function(response) {
            $.ajax({
                type: 'GET',
                url: response,
                data: data,
                timeout: 3000
            });
        });
        return true;
    },
    request: function (action, data, type, loading, responseHandler) {
        var params = {
            action: action,
            dataset: JSON.stringify(data)
        };
        if(loading) {
            $('body').append('<div class="modal-backdrop fade in" id="modalback">' +
                '<div id="ajaxdiv">' +
                '<img src="public/img/ajax-loader.gif" />' +
                '</div>' +
                '</div>'
            );
        }
        $.ajax({
            type: type,
            url: 'index.php',
            data: params,
            timeout: 30000,
            success: function (response) {
                responseHandler(response);
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                if(loading) $('#modalback').remove();
            }
        })
    },
    loadWindow: function (windowName) {
        Framework.request('loadWindow', windowName, 'GET', true, function (response) {
            $('.page-content').empty().append(response);
            Framework.menuTemplate(windowName);
        })
    },
    init: function () {
        this._handleSidebar();
        this._handleGoTop();
    },
    _handleSidebar: function () {
        var sideBarOpen = true;
        if ($(window).width() < 900) {
            $(".page-container").removeClass("sidebar-closed");
        }
        $(".page-container .sidebar-toggler").click(function () {
            if (sideBarOpen) {
                $(".page-container").addClass("sidebar-closed");
                sideBarOpen = false;
            } else {
                $(".page-container").removeClass("sidebar-closed");
                sideBarOpen = true;
            }
        })
    },
    _handleGoTop: function () {
        jQuery('.footer .go-top').click(function (e) {
                jQuery('html,body').animate({scrollTop: $("body").offset().top}, 'slow');
                e.preventDefault();
            });
    },
    menuTemplate: function (windowName) {
        $("#menu-left").find(".start").each(function () {
                if ($(this).hasClass('start active')) {
                    $(this).removeClass('start active');
                    $(this).find('span:last').each(function () {
                        $(this).addClass('arrow');
                    });
                }
            }
        )
        $('#' + windowName).addClass('start active');
        if($(window).width() > 900) {
            $("#menu-left").find(".start").find('span:last').each(function () {
                    if ($(this).hasClass('arrow'))
                        $(this).removeClass('arrow').addClass('selected');
                }
            )
        }
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
                $('head').append('<link href="public/css/themes/' + color + '.css" rel="stylesheet" id="style_theme" />');
            }
        }
    }
};

jQuery(document).ready(function () {
    Framework.init();
});


