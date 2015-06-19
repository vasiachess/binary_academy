var Application = {};

(function (Application){
    var
        _document,
        _$container;
        id = 0;

    Application.init = function(document) {
        _document = document;
        _$container = $('#goods-container');

        this.addGoodsContainer(_$container);

        _$container.click($.proxy(this.containerOnClick, this));
        _$container.on ('click', '[data-action="ClearGoods"]', $.proxy(this.onClearGoods, this));
    };

    Application.addGoodsContainer = function($baseNode) {

        var id = this.nextId(),
            input = $('<input type="text" id="inputTxt" data-goods-container-id="' + id + '"></input>');


        $baseNode.append($('<ul id="' + id + '"></ul>'));
        $baseNode.append(input);
        $baseNode.append("   ");
        $baseNode.append($('<button data-action="ClearGoods" data-goods-container-id="' + id + '">Clear</button>'));

        $('input').keyup(function(e){

            if (e.which === 13) {
                console.log("Enter");
                Application.onAddGoods(_$container);
            }

        });

    };

    Application.containerOnClick = function(evt) {

        if (evt.target.hasAttribute('data-action')) {

            switch (evt.target.getAttribute('data-action')) {
                case "AddGoods": this.onAddGoods(_$container); break;
                case "DeleteGoods": this.onDeleteGoods(evt); break;
            }
        }
    };


    Application.onAddGoods = function($baseNode) {

        var id = this.nextId();
            $newGoods = $('<ul id="' + id + '"></ul>'),
            $labelNew = $('<label data-goods-id:"' + id + '"/>'),
            $inputCheckBox =$('<input type="checkbox" data-action="Check" data-goods-id="' + id + '"></input>');
            $deleteButton =$('<button data-action="DeleteGoods" data-goods-id="' + id + '">x</button>');

        $labelNew.text(inputTxt.value + " ");

        console.log("addGoods id: " + id);

        $newGoods.append($inputCheckBox);
        $newGoods.append($labelNew);
        $newGoods.append($deleteButton.css('visibility', 'hidden'));

        $baseNode.append($newGoods);

    };

    Application.onDeleteGoods = function(evt) {
        $('#' + $(evt.target).attr('data-goods-id')).remove();
    };

    Application.onClearGoods = function(evt) {
        console.log("Clear");

        $('#goods-container').empty();
        Application.init(document);

    };


    $(function () {
        $(_document).on('change', 'input:checkbox', function () {
            var input = $(this).next('label');
            if (this.checked) {
                $(input).css('textDecoration', 'line-through');
                $(input).css('opacity', '0.5');
            } else {
                $(input).css('textDecoration', 'none');
                $(input).css('opacity', '1');
            }
        })
    });

    $(function () {
        $(_document).on('mouseover', 'label', function () {
            var btn = $(this).next('button');
            console.log("Hide button");
                $(btn).css('visibility', 'visible');
        })
    });


    $(function () {
        $(_document).on('focusout', 'input:text', function () {
            var title = currentInput.value,
                curId = $(this).attr('data-goods-id'),
                label = $('<label data-goods-id="' + curId + '" ></label>'),
                btn = $(this).next('button');
                input = $('<input type="text" data-goods-id="' + curId + '"></input>').attr({ value: title, id:'currentInput'});

            if ($(this).attr('id')!== "inputTxt") {
                label.text(title);
                $(this).replaceWith(label);
                $(btn).css('visibility', 'hidden');
            }
        })
    });


    $(function () {
        $(_document).on('mouseout', 'label', function () {
            var btn = $(this).next('button');
            console.log("Hide button");
            setTimeout( function() {$(btn).css('visibility', 'hidden');}, 500);
        })
    });

    $(function () {
        $(_document).on('dblclick', 'label', function () {
            var title = $(this).html(),
                curId = $(this).attr('data-goods-id'),
                label = $('<label data-goods-id="' + curId + '" ></label>'),
                input = $('<input type="text" data-goods-id="' + curId + '"></input>').attr({ value: title, id:'currentInput'});

            $(this).replaceWith(input);
            input.focus();

            $('input').keyup(function(e){
                if ($(this).attr('id')!== "inputTxt") {
                    if(e.which === 13) {
                        title = currentInput.value;
                        label.text(title + " ");
                        $(this).replaceWith(label);
                    } else if (e.which === 27) {
                        label.text(title);
                        $(this).replaceWith(label);
                    }
                }
            });

        })
    });

    Application.proxy = function(hander, owner) {
        return handler.bind(owner);
    };

    Application.nextId = function() {
        return id++;
    };

})(Application, jQuery);

