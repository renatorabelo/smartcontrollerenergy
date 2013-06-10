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
                $("#tilebgYellow .number").empty().append('OFF');
                $("#tilebgYellow").fadeTo(1000, 0.4);
            } else {
                $("#tilebgYellow .number").empty().append('ON');
                $("#tilebgYellow").fadeTo(1000, 1.0);
            }
        }
    },
    requestArduino: function(data) {
        Framework.request('loadIpArduino', '', 'GET', false, function(response) {
            $.ajax({
                type: 'GET',
                url: response,
                data: data,
                timeout: 3000,
                error: function(error) {
                    console.error(error);
                }
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
                console.error(error);
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
        this._loginValidate();
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
                jQuery('html,body').animate({scrollTop: $("html").offset().top}, 'slow');
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
    },
    _handlePortlets: function() {
        jQuery('.portlet .tools .collapse, .portlet .tools .expand').click('click', function () {
            var el = jQuery(this).parents(".portlet").children(".portlet-body");
            if (jQuery(this).hasClass("collapse")) {
                jQuery(this).removeClass("collapse").addClass("expand");
                el.slideUp(200);
            } else {
                jQuery(this).removeClass("expand").addClass("collapse");
                el.slideDown(200);
            }
        });
    },
    logout: function() {
        Framework.request('logout', '', 'POST', false, function(response) {
            location.reload();
        })
    },
    _loginValidate: function() {
        $('.login-form').validate({
            errorElement: 'label',
            errorClass: 'help-inline',
            focusInvalid: false,
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },

            messages: {
                username: {
                    required: "Usuário é obrigatório."
                },
                password: {
                    required: "Senha é obrigatória."
                }
            },

            highlight: function (element) {
                $(element)
                    .closest('.control-group').addClass('error');
            },

            success: function (label) {
                label.closest('.control-group').removeClass('error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
            }
        });

        $('.login-form input').keypress(function (e) {
            if (e.which == 13) {
                $('.login-form').validate().form().submit()
             }
        });
    },
    formUserValidate: function() {
    },
    formArdRequest: function() {
        var form = $('#arduinoform').serializeObject();
        Framework.request('ipArduinoSave', form, 'POST', false, function (response) {
            if(response == '1') {
                if(!$('#sucessArdID').hasClass('hide')) {
                    $('#sucessArdID').css({display: 'none'});
                }
                $('#errorArdID').css({display: 'none'});
                $('#sucessArdID').fadeIn("slow", function() {
                            $(this).removeClass('hide');
                        }
                    );
            } else {
                if(!$('#errorArdID').hasClass('hide')) {
                    $('#errorArdID').css({display: 'none'});
                }
                $('#sucessArdID').css({display: 'none'});
                $('#errorArdID').fadeIn("slow", function() {
                        $(this).removeClass('hide');
                    }
                );
                console.error('ipArduinoSaveError: '+response);
            }
        });
    }
};

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var Charts = {
    chartTracking: function () {
        var mes = [];
        mes.push([0, 0]);
        mes.push([30, 163]);
        mes.push([60, 145]);
        mes.push([90, 156]);
        mes.push([120,118]);
        mes.push([150,165]);
        mes.push([180,123]);
        mes.push([210,170]);
        mes.push([230,144]);
        mes.push([260,153]);

        var plot = $.plot("#chartTracking",[
            { data: mes, label: "Consumo kWh = 0.00"}]
        , {
            series: {
                lines: {
                    show: true
                }
            },
            crosshair: {
                mode: "x"
            },
            grid: {
                hoverable: true,
                autoHighlight: false
            },
            background: {
                opacity: 0.8
            },
            xaxis: {
              tickSize: 30
            },
            yaxis: {
                tickSize: 15
            }

        });

        var legends = $("#chartTracking .legendLabel");

        legends.each(function () {
            $(this).css('width', $(this).width());
        });

        var updateLegendTimeout = null;
        var latestPosition = null;

        function updateLegend() {

            updateLegendTimeout = null;

            var pos = latestPosition;

            var axes = plot.getAxes();
            if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
                pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
                return;
            }

            var i, j, dataset = plot.getData();
            for (i = 0; i < dataset.length; ++i) {

                var series = dataset[i];

                for (j = 0; j < series.data.length; ++j) {
                    if (series.data[j][0] > pos.x) {
                        break;
                    }
                }

                var y,
                    p1 = series.data[j - 1],
                    p2 = series.data[j];

                if (p1 == null) {
                    y = p2[1];
                } else if (p2 == null) {
                    y = p1[1];
                } else {
                    y = p1[1] + (p2[1] - p1[1]) * (Math.ceil(pos.x) - p1[0]) / (p2[0] - p1[0]);
                }

                legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
            }
        }

        $("#chartTracking").bind("plothover",  function (event, pos, item) {
            latestPosition = pos;
            if (!updateLegendTimeout) {
                updateLegendTimeout = setTimeout(updateLegend, 50);
            }
        });
    },
    chartPie : function() {
    },
    chartBars : function() {

        var formatAxis = function(x) {
            return x.toFixed(2) + '%';
        }
        var data = [ ["Janeiro", 4.0], ["Fevereiro", 5.00], ["Março", 5.70], ["Abril", 2.11], ["Maio", 1.00], ["Junho", 4.24], ["Julho", 5.75], ["Agosto", 6.14]];
        $.plot("#chartBars", [ data ], {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.6,
                    align: "center"
                }
            },
            xaxis: {
                mode: "categories",
                tickLength: 0
            },
            yaxis: {
                tickSize: 0.7,
                tickDecimals: 2,
                tickFormatter: formatAxis
            }
        });
    }

};

jQuery(document).ready(function () {
    Framework.init();
});


