var Class = require('../../utils/Class');
var Components = require('../components');
var GameObject = require('../GameObject');
var Render = require('./ContainerRender');

var Container = new Class({

    Extends: GameObject,

    Mixins: [
        Components.BlendMode,
        Components.Transform,
        Render
    ],

    initialize:

    function Container(scene, x, y)
    {
        GameObject.call(this, scene, 'Container');
        this.parentContainer = null;
        this.children = [];
        this.setPosition(x, y);
        this.localTransform = new Components.TransformMatrix();
    },

    add: function (gameObject)
    {
        if (this.children.indexOf(gameObject) < 0)
        {
            this.children.push(gameObject);
        }
        return this;
    },

    remove: function (gameObject)
    {
        var index = this.children.indexOf(gameObject);
        if (index >= 0)
        {
            this.children.splice(index, 1);
        }
        return this;
    }

});

module.exports = Container;