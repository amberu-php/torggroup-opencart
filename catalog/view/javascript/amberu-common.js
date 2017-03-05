/**
 * Created by amberu on 3/5/2017.
 */
var amberuCommon = {
    megaFilter: {
        refreshAfterAjax: function () {
            var $parent = $('.product-block');
            amberuCommon.selectbox.refresh();
            amberuCommon.quantityCounter.init($parent);
            amberuCommon.dateTimePicker.refresh();
            amberuCommon.overlay.refresh();
            amberuCommon.unveil.refresh();
            amberuCommon.radioReplacer.replace($parent);
            amberuCommon.checkBoxReplacer.replace($parent);
            amberuCommon.textAreaReplacer.replace();
        },
    },
    overlay: {
        handler: function (e) {
            e.preventDefault();
            $('.ajax-overlay').removeClass('visible');
            returnOptions();
        },
        init: function () {
            $('.ajax-overlay_close').on('click touchstart', this.handler);
        },
        unbind: function () {
            $('.ajax-overlay_close').unbind('click touchstart', this.handler);
        },
        refresh: function () {
            this.unbind;
            this.init();
        }
    },
    dateTimePicker: {
        refresh: function () {
            this.destroyAll();
            this.init();
        },
        destroyAll: function () {
            $('.date, .datetime, .time').each(function () {
                var dt = $(this).data("DateTimePicker");
                if (dt != undefined) dt.hide();
            });
        },
        init: function () {
            $('.date').datetimepicker({
                pickTime: false
            });

            $('.datetime').datetimepicker({
                pickDate: true,
                pickTime: true
            });

            $('.time').datetimepicker({
                pickDate: false
            });


            $(document).ready(function () {
                $('.date,.datetime,.time').each(function () {
                    var $this = $(this);
                    $(this).find('.btn').click(function () {
                        var body = $('body');
                        if (body.hasClass('ajax-overlay-open')) {
                            var open;
                            setTimeout(function () {
                                open = $('body').find('.bootstrap-datetimepicker-widget.picker-open');
                                if (open.hasClass('top')) {
                                    open.css('bottom', $(window).height() - ($this.offset().top - $('.ajax-overlay').offset().top));
                                }
                            }, 10);
                        }
                    })

                })
            });

            $(document).ready(function () {
                $('.date, .datetime, .time').on('dp.show', function () {
                    $('.date, .datetime, .time').not($(this)).each(function () {
                        $(this).data("DateTimePicker").hide();
                    });
                });
                $(this).on('click touchstart', function () {
                    $('.date, .datetime, .time').each(function () {
                        var dt = $(this).data("DateTimePicker");
                        if (dt != undefined) dt.hide();
                    });
                })

            });
        }
    },
    selectbox: {
        refresh: function () {
            $('select').each(function () {
                $.selectbox._detachSelectbox(this);
                $.selectbox._attachSelectbox(this);
            });
        }
    },
    quantityCounter: {
        init: function ($parent) {
            if ($parent == null) $parent = $(document);
            $(document).ready(function () {
                $parent.find('.counter-minus').click(function (e) {
                    e.preventDefault();
                    var input = $(this).parent().find('input[name*="quantity"]').first();
                    var value = input.val();
                    if (value > 1) {
                        value = parseInt(input.val()) - 1;
                        input.val(value);
                    }
                })
                $parent.find('.counter-plus').click(function (e) {
                    e.preventDefault();
                    var input = $(this).parent().find('input[name*="quantity"]').first();
                    var value = parseInt(input.val()) + 1;
                    input.val(value);
                })

                // amberu overlay popup counter sync
                //on counter click
                $parent.find('.amberu-counter-container .counter').click(function () {
                    var $input = $(this).siblings('input[name*="quantity"]');
                    syncCounter($input);
                });
                // on input change
                $parent.find('.amberu-counter-container input[name*="quantity"]').on('keyup', function () {
                    syncCounter($(this));
                });
                function syncCounter($input) {
                    $input = $input.first();
                    var newValue = $input.val();
                    if (!jQuery.isNumeric(newValue)) {
                        newValue = 1;
                        $input.val(newValue);
                    }
                    if ($input.closest('.product-option-wrap').length) return;
                    var $popUpInput = $input.closest('.product-thumb')
                        .find('.product-option-wrap .amberu-counter-container input[name*="quantity"]')
                        .first();
                    $popUpInput.val(newValue);
                }

                // amberu end
            });
        }
    },
    unveil: {
        scriptIncluded: false,
        init: function () {
            var o = $('.lazy img');

            if (o.length > 0) {
                if (!this.scriptIncluded) {
                    include('js/jquery.unveil.js');
                    this.scriptIncluded = true;
                };

                $(document).ready(function () {
                    $(o).unveil(0, function () {
                        $(this).load(function () {
                            $(this).parent().addClass("lazy-loaded");
                        })
                    });
                });

                // $(window).load(handler) fires only ones
                // at the loading of page time(called form script.js)!!!!
                // so window load was replaced on $(document).ready
                $(document).ready(function () {
                    $(window).trigger('lookup.unveil');
                    if ($('.nav-tabs').length) {
                        $('.nav-tabs').find('a[data-toggle="tab"]').click(function () {
                            setTimeout(function () {
                                $(window).trigger('lookup.unveil');
                            }, 400);
                        })
                    }
                });

            }
        },
        cancel: function () {
            $(window).off("unveil");
        },
        refresh: function () {
            this.cancel();
            this.init();
        }
    },
    radioReplacer: {
        replace: function ($parent) {
            if ($parent == null) $parent = $(document);
            var o = $parent.find('.radio');

            if (o.length) {
                // $(window).load(handler) fires only ones
                // at the loading of page time(called form script.js)!!!!
                // so window load was replaced on $(document).ready
                $(document).ready(function () {
                    var input;
                    var arrVal = [];
                    o.each(function (i) {
                        input = $(this).find('input[type="radio"]');
                        if ($.inArray(input.attr('name') + input.attr('value'), arrVal) == -1) {
                            input.attr('id', input.attr('name') + input.attr('value'))
                            input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value')));
                            arrVal.push(input.attr('name') + input.attr('value'))
                        } else {
                            input.attr('id', input.attr('name') + input.attr('value') + i.toString());
                            input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value') + i.toString()));
                            arrVal.push(input.attr('name') + input.attr('value') + i.toString());
                        }
                    })
                });
            }
            var o2 = $parent.find('label.radio-inline');
            if (o2.length) {
                $(document).ready(function () {
                    var input;
                    o2.each(function () {
                        input = $(this).find('input[type="radio"]');
                        input.attr('id', input.attr('name') + input.attr('value'))
                        input.insertBefore($(this).attr('for', input.attr('name') + input.attr('value')));
                    })
                });
            }
        }
    },
    checkBoxReplacer: {
        replace: function ($parent) {
            if ($parent == null) $parent = $(document);
            var o = $parent.find('.checkbox');
            if (o.length) {
                $(document).ready(function () {
                    var input;
                    var arrVal = [];
                    o.each(function (i) {
                        input = $(this).find('input[type="checkbox"]');
                        if ($.inArray(input.attr('name') + input.attr('value'), arrVal) == -1) {
                            input.attr('id', input.attr('name') + input.attr('value'))
                            input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value')));
                            arrVal.push(input.attr('name') + input.attr('value'))
                        } else {
                            input.attr('id', input.attr('name') + input.attr('value') + input.attr('value') + i.toString())
                            input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value') + input.attr('value') + i.toString()));
                            arrVal.push(input.attr('name') + input.attr('value') + i.toString());
                        }
                    })
                });
            }

            var o2 = $parent.find('input[name=\'agree\'][type=\'checkbox\']');
            if (o2.length) {
                $(document).ready(function () {
                    o2.attr('id', o2.attr('name') + o2.attr('value'));
                    o2.parent().append('<label for="' + o2.attr('name') + o2.attr('value') + '"></label>');
                    $('label[for="' + o2.attr('name') + o2.attr('value') + '"]').insertAfter(o2);

                });
            }

            var o3 = $parent.find('.checkbox-inline');
            if (o3.length) {
                var input;
                o3.each(function (i) {
                    input = $(this).find('input[type="checkbox"]');
                    input.attr('id', input.attr('name') + input.attr('value'))
                    input.insertBefore($(this).attr('for', input.attr('name') + input.attr('value')));

                })
            }
        }
    },
    textAreaReplacer : {
        replace: function () {
            var o = $('textarea');
            if (o.length) {
                $(document).ready(function () {
                    o.removeClass('form-control');

                });
            }
        }
    },
    cart: {
        getInputQuantityVal: function(el) {
            return el.parent().find("#cart-q").first().val();
        },
        add: function(el, id) {
            el = $(el);
            cart.add(id, this.getInputQuantityVal(el));
        },
    }
}
