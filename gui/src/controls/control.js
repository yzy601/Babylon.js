/// <reference path="../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GUI;
    (function (GUI) {
        var Control = (function () {
            function Control(name) {
                this.name = name;
                this._zIndex = 0;
                this._fontSize = 18;
                this._horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
                this._verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
                this.fontFamily = "Arial";
            }
            Object.defineProperty(Control.prototype, "horizontalAlignment", {
                get: function () {
                    return this._horizontalAlignment;
                },
                set: function (value) {
                    if (this._horizontalAlignment === value) {
                        return;
                    }
                    this._horizontalAlignment = value;
                    this._markAsDirty();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control.prototype, "verticalAlignment", {
                get: function () {
                    return this._verticalAlignment;
                },
                set: function (value) {
                    if (this._verticalAlignment === value) {
                        return;
                    }
                    this._verticalAlignment = value;
                    this._markAsDirty();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control.prototype, "fontFamily", {
                get: function () {
                    return this._fontFamily;
                },
                set: function (value) {
                    if (this._fontFamily === value) {
                        return;
                    }
                    this._fontFamily = value;
                    this._prepareFont();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control.prototype, "fontSize", {
                get: function () {
                    return this._fontSize;
                },
                set: function (value) {
                    if (this._fontSize === value) {
                        return;
                    }
                    this._fontSize = value;
                    this._prepareFont();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control.prototype, "color", {
                get: function () {
                    return this._color;
                },
                set: function (value) {
                    if (this._color === value) {
                        return;
                    }
                    this._color = value;
                    this._markAsDirty();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (value) {
                    if (this.zIndex === value) {
                        return;
                    }
                    this._zIndex = value;
                    this._root._reOrderControl(this);
                },
                enumerable: true,
                configurable: true
            });
            Control.prototype._markAsDirty = function () {
                if (!this._root) {
                    return; // Not yet connected
                }
                this._root._markAsDirty();
            };
            Control.prototype._setRoot = function (root) {
                this._root = root;
            };
            Control.prototype.applyStates = function (context) {
                if (this._font) {
                    context.font = this._font;
                }
                if (this._color) {
                    context.fillStyle = this._color;
                }
            };
            Control.prototype._draw = function (parentMeasure, context) {
                this._currentMeasure = parentMeasure.copy();
                // Do nothing
            };
            Control.prototype._rescale = function (scaleX, scaleY) {
                this._scaleX = scaleX;
                this._scaleY = scaleY;
                this._prepareFont();
            };
            Control.prototype._prepareFont = function () {
                if (!this._fontFamily) {
                    return;
                }
                this._font = (this._fontSize * this._scaleX) + "px " + this._fontFamily;
                this._fontOffset = Control._GetFontOffset(this._font);
                this._markAsDirty();
            };
            Object.defineProperty(Control, "HORIZONTAL_ALIGNMENT_LEFT", {
                get: function () {
                    return Control._HORIZONTAL_ALIGNMENT_LEFT;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control, "HORIZONTAL_ALIGNMENT_RIGHT", {
                get: function () {
                    return Control._HORIZONTAL_ALIGNMENT_RIGHT;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control, "HORIZONTAL_ALIGNMENT_CENTER", {
                get: function () {
                    return Control._HORIZONTAL_ALIGNMENT_CENTER;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control, "VERTICAL_ALIGNMENT_TOP", {
                get: function () {
                    return Control._VERTICAL_ALIGNMENT_TOP;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control, "VERTICAL_ALIGNMENT_BOTTOM", {
                get: function () {
                    return Control._VERTICAL_ALIGNMENT_BOTTOM;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control, "VERTICAL_ALIGNMENT_CENTER", {
                get: function () {
                    return Control._VERTICAL_ALIGNMENT_CENTER;
                },
                enumerable: true,
                configurable: true
            });
            Control._GetFontOffset = function (font) {
                if (Control._FontHeightSizes[font]) {
                    return Control._FontHeightSizes[font];
                }
                var text = document.createElement("span");
                text.innerHTML = "Hg";
                text.style.font = font;
                var block = document.createElement("div");
                block.style.display = "inline-block";
                block.style.width = "1px";
                block.style.height = "0px";
                block.style.verticalAlign = "bottom";
                var div = document.createElement("div");
                div.appendChild(text);
                div.appendChild(block);
                document.body.appendChild(div);
                var fontAscent = 0;
                var fontHeight = 0;
                try {
                    fontHeight = block.getBoundingClientRect().top - text.getBoundingClientRect().top;
                    block.style.verticalAlign = "baseline";
                    fontAscent = block.getBoundingClientRect().top - text.getBoundingClientRect().top;
                }
                finally {
                    div.remove();
                }
                var result = { ascent: fontAscent, height: fontHeight, descent: fontHeight - fontAscent };
                Control._FontHeightSizes[font] = result;
                return result;
            };
            ;
            return Control;
        }());
        // Statics
        Control._HORIZONTAL_ALIGNMENT_LEFT = 0;
        Control._HORIZONTAL_ALIGNMENT_RIGHT = 1;
        Control._HORIZONTAL_ALIGNMENT_CENTER = 2;
        Control._VERTICAL_ALIGNMENT_TOP = 0;
        Control._VERTICAL_ALIGNMENT_BOTTOM = 1;
        Control._VERTICAL_ALIGNMENT_CENTER = 2;
        Control._FontHeightSizes = {};
        GUI.Control = Control;
    })(GUI = BABYLON.GUI || (BABYLON.GUI = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=control.js.map
