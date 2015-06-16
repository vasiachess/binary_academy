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
        $('#clear-container').click($.proxy(this.containerOnClickClear, this));
    };

    Application.addGoodsContainer = function($baseNode) {

        var id = this.nextId();

        $baseNode.append($('<ul id="' + id + '"></ul>'));
        $baseNode.append($('<input type="text" id="inputTxt" data-task-container-id="' + id + '"></input>'));
        $baseNode.append($('<button data-action="AddGoods" data-task-container-id="' + id + '">Add</button>'));



    };

    Application.containerOnClick = function(evt) {

        if (evt.target.hasAttribute('data-action')) {

            switch (evt.target.getAttribute('data-action')) {
                case "AddGoods": this.onAddGoods(_$container); break;
                case "DeleteGoods": this.onDeleteGoods(evt); break;
                //case "Check": this.onCrossOutGoods(evt); break;

            }
        }
    };

    Application.containerOnClickClear = function(evt) {

        if (evt.target.hasAttribute('data-action')) {

            switch (evt.target.getAttribute('data-action')) {
                case "ClearGoods": this.onClearGoods(); break;
            }
        }
    };

    Application.onAddGoods = function($baseNode) {

        var id = this.nextId();
            $newGoods = $('<ul id="' + id + '"></ul>'),
            $inputNew = $('<input type="text" data-goods-id:"' + id + '"/>').attr({ value:inputTxt.value, id:'currentInput', readonly:'readonly'});
            $inputCheckBox =$('<input type="checkbox" data-action="Check" data-goods-id="' + id + '"></input>');

        console.log("addGoods id: " + id);

        $newGoods.append($inputCheckBox);
        $newGoods.append($inputNew);
        $newGoods.append('<button data-action="DeleteGoods" data-goods-id="' + id + '">x</button>');

        $baseNode.append($newGoods);

    };

    Application.onDeleteGoods = function(evt) {
        $('#' + $(evt.target).attr('data-goods-id')).remove();
    };

    Application.onClearGoods = function() {
        console.log("Clear");


    };


    $(function () {
        $(_document).on('change', 'input:checkbox', function () {
            var input = $(this).next('input');
            if (this.checked) {
                $(input).css('textDecoration', 'line-through');
            } else {
                $(input).css('textDecoration', 'none');
            }
        })
    });

    $(function () {
        $(_document).on('dblclick', 'input:text', function () {
            var input = $(this);
                $(input).removeAttr("readonly");
            console.log("double click");
        })
    });

    Application.proxy = function(hander, owner) {
        return handler.bind(owner);
    };

    Application.nextId = function() {
        return id++;
    };

})(Application, jQuery);

