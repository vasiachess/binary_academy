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

            }
        }
    };

    Application.onAddGoods = function($baseNode) {

        var id = this.nextId();

        console.log("addGoods id: " + id);

        $baseNode.append($('<ul id="' + id + '"></ul>'));
        $baseNode.append($('<input type="checkbox" data-goods-id="' + id + '"></input>'));
        $baseNode.append(inputTxt.value);
        $baseNode.append($('<button data-action="DeleteGoods" data-goods-id="' + id + '">x</button>'));

    };

    Application.onDeleteGoods = function(evt) {
        var goodsContainer = _document.getElementById(evt.target.getAttribute('data-goods-id'));

        goodsContainer.parentNode.removeChild(goodsContainer);
    };

    Application.proxy = function(hander, owner) {
        return handler.bind(owner);
    };

    Application.nextId = function() {
        return id++;
    };


})(Application, jQuery);