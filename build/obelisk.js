(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor, p;

AbstractColor = function () {
    this.initialize();
};
p = AbstractColor.prototype;

// public properties
/**
 * The inner colors for elements of certain primitive
 */
p.inner = null;

/**
 * The border colors for elements of certain primitive
 */
p.border = null;

/**
 * The borderHighlight colors for elements of certain primitive
 */
p.borderHighlight = null;

/**
 * The left side colors for elements of certain primitive
 */
p.left = null;

/**
 * The right side colors for elements of certain primitive
 */
p.right = null;

/**
 * The horizontal colors for elements of certain primitive
 */
p.horizontal = null;

/**
 * The left slot side colors for elements of certain primitive
 */
p.leftSlope = null;

/**
 * The right slot side colors for elements of certain primitive
 */
p.rightSlope = null;

// constructor
p.initialize = function () {
    return this;
};

// public methods
p.toString = function () {
    return '[AbstractColor]';
};

module.exports = AbstractColor;

},{}],2:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var CubeColor, p;
CubeColor = function (border, borderHighlight, left, right, horizontal) {
    this.initialize(border, borderHighlight, left, right, horizontal);
};
p = CubeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, horizontal) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE3E3E3 : right);
    this.horizontal = ColorGeom.get32(horizontal === undefined ? 0xEEEFF0 : horizontal);

    return this;
};

// public methods
p.getByHorizontalColor = function (horizontal) {
    return new CubeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        horizontal
    );
};

p.toString = function () {
    return '[CubeColor]';
};

module.exports = CubeColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],3:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var PyramidColor, p;
PyramidColor = function (border, borderHighlight, left, right) {
    this.initialize(border, borderHighlight, left, right);
};
p = PyramidColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xE6E8E9 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xEEEFF0 : right);

    return this;
};

// public methods
p.getByRightColor = function (right) {
    return new PyramidColor(
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(right, 0, true),
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN),
        right
    );
};

p.toString = function () {
    return '[PyramidColor]';
};

module.exports = PyramidColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],4:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SideColor, p;
SideColor = function (border, inner) {
    this.initialize(border, inner);
};
p = SideColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, inner) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.inner = ColorGeom.get32(inner === undefined ? 0xEEEEEE : inner);

    return this;
};

// public methods
p.getByInnerColor = function (inner) {
    return new SideColor(
        ColorGeom.applyBrightness(inner, this.BRIGHTNESS_GAIN * 4),
        inner
    );
};

p.toString = function () {
    return '[SideColor]';
};

module.exports = SideColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],5:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SlopeColor, p;
SlopeColor = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.initialize(border, borderHighlight, left, right, leftSlope, rightSlope);
};
p = SlopeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE6E8E9 : right);
    this.leftSlope = ColorGeom.get32(leftSlope === undefined ? 0xDBDBDB : leftSlope);
    this.rightSlope = ColorGeom.get32(rightSlope === undefined ? 0xDBDBDB : rightSlope);

    return this;
};

// public methods

/*
 * horizontal side doesn't actually exist in the Slope primitive
 * you can assign the same horizontal color as cube
 * so that you will be able to arrange the slope with cube
 */
p.getByHorizontalColor = function (horizontal) {
    return new SlopeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 1.5),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 0.5)
    );
};

p.toString = function () {
    return '[SlopeColor]';
};

module.exports = SlopeColor;

},{"../utils/ColorGeom":32,"./AbstractColor":1}],6:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension, p;
AbstractDimension = function () {
    this.initialize();
};
p = AbstractDimension.prototype;

// public properties
/**
 * The x Axis dimensions in 22.6 degrees coordinate
 */
p.xAxis = null;

/**
 * The y Axis dimensions in 22.6 degrees coordinate
 */
p.yAxis = null;

/**
 * The z Axis dimensions in 22.6 degrees coordinate
 */
p.zAxis = null;

/**
 * Pyramid tall mode
 */
p.tall = false;

// constructor
p.initialize = function () {
    return this;
};

// public methods
p.toString = function () {
    return '[AbstractDimension]';
};

module.exports = AbstractDimension;

},{}],7:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var BrickDimension, p;
BrickDimension = function (xAxis, yAxis) {
    this.initialize(xAxis, yAxis);
};
p = BrickDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, yAxis) {
    this.xAxis = xAxis || 30;
    this.yAxis = yAxis || 30;

    if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
        throw new Error('x,yAxis must be even number');
    }

    // xAxis || yAxis = 4 floodFill could not be applied
    if (this.xAxis <= 4 || this.yAxis <= 4) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[BrickDimension]';
};

module.exports = BrickDimension;

},{"./AbstractDimension":6}],8:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var CubeDimension, p;
CubeDimension = function (xAxis, yAxis, zAxis) {
    this.initialize(xAxis, yAxis, zAxis);
};
p = CubeDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, yAxis, zAxis) {
    this.xAxis = xAxis || 30;
    this.yAxis = yAxis || 30;
    this.zAxis = zAxis || 30;

    if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
        throw new Error('x,yAxis must be even number');
    }

    // xAxis || yAxis = 4 floodFill could not be applied
    if (this.xAxis <= 4 || this.yAxis <= 4 || this.zAxis <= 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[CubeDimension]';
};

module.exports = CubeDimension;

},{"./AbstractDimension":6}],9:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var PyramidDimension, p;
PyramidDimension = function (axis, tall) {
    this.initialize(axis, tall);
};
p = PyramidDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (axis, tall) {
    this.xAxis = axis || 30;
    this.yAxis = axis || 30;
    this.tall = tall || false;

    if (this.xAxis % 2 === 1) {
        throw new Error('axis must be even number');
    }

    if (this.xAxis <= 4) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[PyramidDimension]';
};

module.exports = PyramidDimension;

},{"./AbstractDimension":6}],10:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SideXDimension, p;
SideXDimension = function (xAxis, zAxis) {
    this.initialize(xAxis, zAxis);
};
p = SideXDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, zAxis) {
    this.xAxis = xAxis || 30;
    this.zAxis = zAxis || 30;

    if (this.xAxis % 2 === 1) {
        throw new Error('xAxis must be even number');
    }

    // xAxis || zAxis = 4 floodFill could not be applied
    if (this.xAxis <= 4 || this.zAxis <= 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[SideXDimension]';
};

module.exports = SideXDimension;

},{"./AbstractDimension":6}],11:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SideYDimension, p;

SideYDimension = function (yAxis, zAxis) {
    this.initialize(yAxis, zAxis);
};
p = SideYDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (yAxis, zAxis) {
    this.yAxis = yAxis || 30;
    this.zAxis = zAxis || 30;

    if (this.yAxis % 2 === 1) {
        throw new Error('yAxis must be even number');
    }

    // yAxis || zAxis = 4 floodFill could not be applied
    if (this.yAxis <= 4 || this.zAxis <= 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[SideYDimension]';
};

module.exports = SideYDimension;

},{"./AbstractDimension":6}],12:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SlopeDimension, p;
SlopeDimension = function (xAxis, yAxis) {
    this.initialize(xAxis, yAxis);
};
p = SlopeDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, yAxis) {
    this.xAxis = xAxis || 30;
    this.yAxis = yAxis || 30;

    if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
        throw new Error('xAxis and yAxis must be even number');
    }

    if (this.xAxis <= 4 || this.yAxis <= 4) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[SlopeDimension]';
};

module.exports = SlopeDimension;

},{"./AbstractDimension":6}],13:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CanvasManager = require('../utils/CanvasManager');

var BitmapData, p;
BitmapData = function (w, h, useDefaultCanvas) {
    this.initialize(w, h, useDefaultCanvas);
};
p = BitmapData.prototype;

// public property
p.imageData = null;
p.canvas = null;
p.context = null;

// constructor
p.initialize = function (w, h, useDefaultCanvas) {
    if (w === undefined || h === undefined) {
        throw new Error('BitmapData width or height is missing');
    }

    if (useDefaultCanvas) {
        this.canvas = CanvasManager.getDefaultCanvas();
    } else {
        this.canvas = CanvasManager.getNewCanvas();
    }

    this.canvas.setAttribute('width', w);
    this.canvas.setAttribute('height', h);

    this.context = this.canvas.getContext('2d');
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.imageData = this.context.createImageData(w, h);

    return this;
};

p.setPixel = function (posX, posY, color) {
    var index = (posY * this.imageData.width + posX) * 4;
    this.setPixelByIndex(index, color);
};

p.setPixelByIndex = function (index, color) {
    var pixels = this.imageData.data;

    pixels[index] = (color >>> 16) & 0xFF;
    pixels[index + 1] = (color >>> 8) & 0xFF;
    pixels[index + 2] = (color >>> 0) & 0xFF;
    pixels[index + 3] = (color >>> 24) & 0xFF;
};

p.checkPixelAvailable = function (x, y) {
    var index = (y * this.imageData.width + x) * 4;

    return this.imageData.data[index + 3] === 0;
};

p.floodFill = function (posX, posY, color) {
    if (((color >>> 24) & 0xFF) === 0x00) {
        // transparent flood fill
        return;
    }

    var x = posX, y = posY,
        stack = [],
        nowCol = [],
        prevCol = [],
        col, row, matchFlag, newStart,
        w = this.imageData.width,
        h = this.imageData.height,
        i, j;

    // bound reach
    if (x < 0 || y < 0 || x >= w || y >= h) {
        return;
    }

    // first point check fail
    if (!this.checkPixelAvailable(x, y)) {
        throw new Error('Start point for flood fill is already filled');
    }

    // left side flood fill
    for (col = x; col >= 0; col -= 1) {
        // top side
        for (row = y; row >= 0; row -= 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col top
                if (row === y && this.checkPixelAvailable(col + 1, row - 1)) {
                    // next one is valid
                    if (this.checkPixelAvailable(col, row - 1)) {
                        newStart = row - 1;
                    } else {
                        if (this.checkPixelAvailable(col + 1, row - 2)) {
                            newStart = row - 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = -1;
                        }
                    }

                    for (row = newStart; row >= 0; row -= 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }


        // bottom side
        for (row = y; row < h; row += 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col bottom
                if (row === y && this.checkPixelAvailable(col + 1, row + 1)) {

                    // next one is valid
                    if (this.checkPixelAvailable(col, row + 1)) {
                        newStart = row + 1;
                    } else {
                        if (this.checkPixelAvailable(col + 1, row + 2)) {
                            newStart = row + 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = h;
                        }
                    }

                    for (row = newStart; row < h; row += 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }

        // compare with previous column
        // for first column
        // the given point should be inside the container
        if (col === x) {
            prevCol = nowCol.concat();
        }

        matchFlag = false;

        for (i = 0; i < prevCol.length; i += 1) {
            for (j = 0; j < prevCol.length; j += 1) {
                if (nowCol[j] === prevCol[i]) {
                    matchFlag = true;
                    y = prevCol[i];
                    break;
                }
            }

            if (matchFlag) {
                break;
            }
        }

        if (matchFlag) {
            prevCol = nowCol.concat();
            nowCol = [];
        } else {
            // bound reach
            break;
        }
    }

    // reset start point
    x = posX;
    y = posY;
    prevCol = [];
    nowCol = [];

    // right side flood fill
    for (col = x; col < w; col += 1) {

        // top side
        for (row = y; row >= 0; row -= 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col top
                if (row === y && this.checkPixelAvailable(col - 1, row - 1)) {
                    // next one is valid
                    if (this.checkPixelAvailable(col, row - 1)) {
                        newStart = row - 1;
                    } else {
                        if (this.checkPixelAvailable(col - 1, row - 2)) {
                            newStart = row - 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = -1;
                        }
                    }

                    for (row = newStart; row >= 0; row -= 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }

        // bottom side
        for (row = y; row < h; row += 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col bottom
                if (row === y && this.checkPixelAvailable(col - 1, row + 1)) {

                    // next one is valid
                    if (this.checkPixelAvailable(col, row + 1)) {
                        newStart = row + 1;
                    } else {
                        if (this.checkPixelAvailable(col - 1, row + 2)) {
                            newStart = row + 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = h;
                        }
                    }

                    for (row = newStart; row < h; row += 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }

        // compare with previous column
        // for first column
        // the given point should be inside the container
        if (col === x) {
            prevCol = nowCol.concat();
        }

        matchFlag = false;

        for (i = 0; i < prevCol.length; i += 1) {
            for (j = 0; j < prevCol.length; j += 1) {
                if (nowCol[j] === prevCol[i]) {
                    matchFlag = true;
                    y = prevCol[i];
                    break;
                }
            }

            if (matchFlag) {
                break;
            }
        }

        if (matchFlag) {
            prevCol = nowCol.concat();
            nowCol = [];
        } else {
            // bound reach
            break;
        }
    }

    // fill image data
    for (i = 0; i < stack.length; i += 1) {
        this.setPixelByIndex(stack[i], color);
    }
};

p.toString = function () {
    return '[BitmapData]';
};

module.exports = BitmapData;

},{"../utils/CanvasManager":30}],14:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point3D = require('../geom/Point3D');

var PixelObject, p;
PixelObject = function (primitive, point3D) {
    this.initialize(primitive, point3D);
};
p = PixelObject.prototype;

// public properties
p.x = null;
p.y = null;
p.canvas = null;

// constructor
p.initialize = function (primitive, point3D) {
    if (!primitive) {
        throw new Error('Primitive is not defined');
    }

    var p3D = point3D || new Point3D();

    this.canvas = primitive.canvas;
    this.x = primitive.matrix.tx + p3D.x - p3D.y;
    this.y = primitive.matrix.ty + Math.floor(p3D.x / 2 + p3D.y / 2) - p3D.z;

    return this;
};

// public methods

p.toString = function () {
    return '[PixelObject]';
};

// private methods

module.exports = PixelObject;

},{"../geom/Point3D":18}],15:[function(require,module,exports){
/*jslint node: true*/
/*global jQuery:true*/

'use strict';

var Point = require('../geom/Point');
var PixelObject = require('../display/PixelObject');

var PixelView, p;
PixelView = function (canvas, point) {
    this.initialize(canvas, point);
};
p = PixelView.prototype;

// public properties
p.canvas = null;
p.context = null;
p.point = null;

// constructor
p.initialize = function (canvas, point) {
    if (!canvas) {
        throw new Error('Canvas is not defined');
    }

    try {
        if (canvas instanceof jQuery) {
            canvas = canvas.get(0);
        }
    } catch (ignore) {
    }

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.point = point || new Point(0, 0);

    return this;
};

// public methods
p.renderObject = function (primitive, point3D) {
    var po = new PixelObject(primitive, point3D);
    this.context.drawImage(po.canvas, this.point.x + po.x, this.point.y + po.y);
};

p.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

p.toString = function () {
    return '[PixelView]';
};

module.exports = PixelView;

},{"../display/PixelObject":14,"../geom/Point":17}],16:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Matrix, p;
Matrix = function (a, b, c, d, tx, ty) {
    this.initialize(a, b, c, d, tx, ty);
};
p = Matrix.prototype;

// public properties:
/**
 * Position (0, 0) in a 3x3 matrix.
 * @property a
 * @type Number
 **/
p.a = 1;

/**
 * Position (0, 1) in a 3x3 matrix.
 * @property b
 * @type Number
 **/
p.b = 0;

/**
 * Position (1, 0) in a 3x3 matrix.
 * @property c
 * @type Number
 **/
p.c = 0;

/**
 * Position (1, 1) in a 3x3 matrix.
 * @property d
 * @type Number
 **/
p.d = 1;

/**
 * Position (2, 0) in a 3x3 matrix.
 * @property tx
 * @type Number
 **/
p.tx = 0;

/**
 * Position (2, 1) in a 3x3 matrix.
 * @property ty
 * @type Number
 **/
p.ty = 0;

// constructor
p.initialize = function (a, b, c, d, tx, ty) {
    this.a = (a === undefined) ? 1 : a;
    this.b = b || 0;
    this.c = c || 0;
    this.d = (d === undefined) ? 1 : d;
    this.tx = tx || 0;
    this.ty = ty || 0;

    return this;
};

// public methods
p.toString = function () {
    return '[Matrix]';
};

module.exports = Matrix;

},{}],17:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point, p;
Point = function (x, y) {
    this.initialize(x, y);
};
p = Point.prototype;

// public properties
p.x = 0;
p.y = 0;

// constructor
p.initialize = function (x, y) {
    this.x = (x === undefined ? 0 : x);
    this.y = (y === undefined ? 0 : y);

    return this;
};

// public methods
p.toString = function () {
    return '[Point x : ' + this.x + ', y : ' + this.y + ']';
};

module.exports = Point;

},{}],18:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point = require('./Point');

var Point3D, p;
Point3D = function (x, y, z) {
    this.initialize(x, y, z);
};
p = Point3D.prototype;

// public properties
p.x = 0;
p.y = 0;
p.z = 0;

// constructor
p.initialize = function (x, y, z) {
    this.x = (x === undefined ? 0 : x);
    this.y = (y === undefined ? 0 : y);
    this.z = (z === undefined ? 0 : z);

    return this;
};

// public methods
p.toGlobalCoordinates = function (offset) {
    var p2D = new Point(
        this.x - this.y,
        Math.floor(this.x / 2 + this.y / 2) - this.z
    );

    if (offset !== undefined) {
        p2D.x = p2D.x + offset.x;
        p2D.y = p2D.y + offset.y;
    }

    return p2D;
};

p.toString = function () {
    return '[Point3D x : ' + this.x + ', y : ' + this.y + ', z: ' + this.z + ']';
};

module.exports = Point3D;

},{"./Point":17}],19:[function(require,module,exports){
/*jslint node: true*/
/*global window:true*/

'use strict';

/**
 * @namespace obelisk
 **/
var obelisk = {};

obelisk.Cube = require('./primitives/Cube');
obelisk.Brick = require('./primitives/Brick');
obelisk.Pyramid = require('./primitives/Pyramid');
obelisk.SideX = require('./primitives/SideX');
obelisk.SideY = require('./primitives/SideY');
obelisk.SlopeEast = require('./primitives/SlopeEast');
obelisk.SlopeNorth = require('./primitives/SlopeNorth');
obelisk.SlopeSouth = require('./primitives/SlopeSouth');
obelisk.SlopeWest = require('./primitives/SlopeWest');

obelisk.ColorPattern = require('./utils/ColorPattern');
obelisk.ColorGeom = require('./utils/ColorGeom');
obelisk.CanvasManager = require('./utils/CanvasManager');
obelisk.CanvasTool = require('./utils/CanvasTool');

obelisk.Matrix = require('./geom/Matrix');
obelisk.Point = require('./geom/Point');
obelisk.Point3D = require('./geom/Point3D');

obelisk.PixelView = require('./display/PixelView');
obelisk.PixelObject = require('./display/PixelObject');
obelisk.BitmapData = require('./display/BitmapData');

obelisk.BrickDimension = require('./dimensions/BrickDimension');
obelisk.CubeDimension = require('./dimensions/CubeDimension');
obelisk.PyramidDimension = require('./dimensions/PyramidDimension');
obelisk.SideXDimension = require('./dimensions/SideXDimension');
obelisk.SideYDimension = require('./dimensions/SideYDimension');
obelisk.SlopeDimension = require('./dimensions/SlopeDimension');

obelisk.CubeColor = require('./colors/CubeColor');
obelisk.PyramidColor = require('./colors/PyramidColor');
obelisk.SideColor = require('./colors/SideColor');
obelisk.SlopeColor = require('./colors/SlopeColor');

window.obelisk = obelisk;

module.exports = obelisk;


},{"./colors/CubeColor":2,"./colors/PyramidColor":3,"./colors/SideColor":4,"./colors/SlopeColor":5,"./dimensions/BrickDimension":7,"./dimensions/CubeDimension":8,"./dimensions/PyramidDimension":9,"./dimensions/SideXDimension":10,"./dimensions/SideYDimension":11,"./dimensions/SlopeDimension":12,"./display/BitmapData":13,"./display/PixelObject":14,"./display/PixelView":15,"./geom/Matrix":16,"./geom/Point":17,"./geom/Point3D":18,"./primitives/Brick":21,"./primitives/Cube":22,"./primitives/Pyramid":23,"./primitives/SideX":24,"./primitives/SideY":25,"./primitives/SlopeEast":26,"./primitives/SlopeNorth":27,"./primitives/SlopeSouth":28,"./primitives/SlopeWest":29,"./utils/CanvasManager":30,"./utils/CanvasTool":31,"./utils/ColorGeom":32,"./utils/ColorPattern":33}],20:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractPrimitive, p;
AbstractPrimitive = function () {
    this.initialize();
};
p = AbstractPrimitive.prototype;

// public properties
/**
 * the canvas for drawImage to any canvas
 */
p.canvas = null;

// protect properties
/**
 * the width of the bitmap in 2d flash coordinate
 */
p.w = null;

/**
 * the height of the bitmap in 2d flash coordinate
 */
p.h = null;

/**
 * the dimension of primitive in 3d pixel coordinate
 */
p.dimension = null;

/**
 * the color obj of the primitive
 */
p.color = null;

/**
 * the border option of the primitive
 */
p.border = null;

/**
 * the source bitmapdata contains pixel graphic
 */
p.bitmapData = null;

/**
 * the preserve canvas option
 */
p.useDefaultCanvas = null;

/**
 * the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
 */
p.matrix = null;

// constructor
p.initialize = function () {
    return this;
};

// public methods
p.toString = function () {
    return '[AbstractPrimitive]';
};

module.exports = AbstractPrimitive;

},{}],21:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var BrickDimension = require('../dimensions/BrickDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var Brick, p;
Brick = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Brick.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new BrickDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = (this.dimension.xAxis + this.dimension.yAxis) / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 1;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = 0;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

    xOffsetInner = this.dimension.yAxis - 2;
    yOffsetInner = 0;
    xOffsetOut = this.dimension.xAxis - 1;
    yOffsetOut = this.h - 1;
    borderColor = this.border ? this.color.border : this.color.inner;

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), borderColor);
    }

    //y axis
    for (j = 0; j < this.dimension.yAxis; j += 1) {
        this.bitmapData.setPixel(xOffsetInner + 1 - j, yOffsetInner + Math.floor(j / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - 1 + j, yOffsetOut - Math.floor(j / 2), borderColor);
    }

    //fill an pixel graphic enclosed
    this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
};

// public methods
p.toString = function () {
    return '[Brick]';
};

module.exports = Brick;

},{"../colors/SideColor":4,"../dimensions/BrickDimension":7,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],22:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CubeDimension = require('../dimensions/CubeDimension');
var BrickDimension = require('../dimensions/BrickDimension');
var SideXDimension = require('../dimensions/SideXDimension');
var SideYDimension = require('../dimensions/SideYDimension');
var CubeColor = require('../colors/CubeColor');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var PixelObject = require('../display/PixelObject');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var Brick = require('./Brick');
var SideX = require('./SideX');
var SideY = require('./SideY');

var Cube, p;
Cube = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Cube.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new CubeDimension() : dimension;
    this.color = color === undefined ? new CubeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.zAxis + (this.dimension.xAxis + this.dimension.yAxis) / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 1;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var brick, sideX, sideY, poBrick, poX, poY, ctx, bmd, offsetX, offsetY,
        i, j, k;
    // horizontal layer
    brick = new Brick(
        new BrickDimension(this.dimension.xAxis, this.dimension.yAxis),
        new SideColor(this.color.border, this.color.horizontal),
        this.border
    );

    // left side
    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.left),
        this.border
    );

    // right side
    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.right),
        this.border
    );

    poBrick = new PixelObject(brick);
    poX = new PixelObject(sideX);
    poY = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(poBrick.canvas, poBrick.x + this.dimension.yAxis - 2, poBrick.y);
    ctx.drawImage(poX.canvas, poX.x, poX.y + this.dimension.zAxis + this.dimension.yAxis / 2 - 1);
    ctx.drawImage(poY.canvas, poY.x + this.w - 2, poX.y + this.dimension.zAxis + this.dimension.xAxis / 2 - 1);

    // highlight & highlight fix
    bmd = new BitmapData(this.w, this.h);

    if (this.border) {
        offsetX = this.dimension.xAxis - 2;
        offsetY = (this.dimension.xAxis + this.dimension.yAxis) / 2 - 2;

        //the 2px in bounding without hightlight
        for (i = 0; i < this.dimension.xAxis - 2; i += 1) {
            bmd.setPixel(offsetX + 1 - i, offsetY - Math.floor(i / 2), this.color.borderHighlight);
        }

        //the 2px in bounding without hightlight
        for (j = 0; j < this.dimension.yAxis - 2; j += 1) {
            bmd.setPixel(offsetX + j, offsetY - Math.floor(j / 2), this.color.borderHighlight);
        }

        for (k = 0; k < this.dimension.zAxis; k += 1) {
            bmd.setPixel(offsetX, offsetY + k, this.color.borderHighlight);
        }
    } else {
        for (i = 0; i < this.dimension.zAxis; i += 1) {
            bmd.setPixel(this.dimension.xAxis - 2, (this.dimension.xAxis + this.dimension.yAxis) / 2 - 1 + i, this.color.left);
        }
    }
    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return '[Cube]';
};

module.exports = Cube;

},{"../colors/CubeColor":2,"../colors/SideColor":4,"../dimensions/BrickDimension":7,"../dimensions/CubeDimension":8,"../dimensions/SideXDimension":10,"../dimensions/SideYDimension":11,"../display/BitmapData":13,"../display/PixelObject":14,"../geom/Matrix":16,"./AbstractPrimitive":20,"./Brick":21,"./SideX":24,"./SideY":25}],23:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var PyramidDimension = require('../dimensions/PyramidDimension');
var PyramidColor = require('../colors/PyramidColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var Pyramid, p;
Pyramid = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Pyramid.prototype = new AbstractPrimitive();

// private properties
p.hSize = null;
p.hOffset = null;

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new PyramidDimension() : dimension;
    this.color = color === undefined ? new PyramidColor() : color;

    this.hSize = this.dimension.tall ? this.dimension.xAxis * 2 : this.dimension.xAxis;
    this.hOffset = this.dimension.tall ? -3 : -2;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.hSize + this.dimension.xAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h += this.hOffset;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.xAxis + 2;
    this.matrix.ty = -this.hSize / 2 + 2 - (this.dimension.tall ? this.dimension.xAxis / 2 : 1);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        i, j, k, l1, m1, l2, m2;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;

    colorBorderHighlight = this.border ? this.color.borderHighlight : colorBorderLeft;

    //z axis || hightlight
    for (k = 0; k < this.hSize + this.dimension.xAxis / 2 - 4; k += 1) {
        this.bitmapData.setPixel(this.dimension.xAxis - 2, k + 3 + this.hOffset, colorBorderHighlight);
    }

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(i, this.hSize + Math.floor(i / 2) + this.hOffset, colorBorderLeft);
    }

    //y axis
    for (j = 0; j < this.dimension.xAxis; j += 1) {
        this.bitmapData.setPixel(j + this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - Math.floor(j / 2) - 1 + this.hOffset, colorBorderRight);
    }

    if (!this.dimension.tall) {
        //left edge
        for (l1 = 0; l1 < this.hSize; l1 += 1) {
            this.bitmapData.setPixel(l1, this.hSize - l1 + this.hOffset, colorBorderLeft);
        }

        //right edge
        for (m1 = 0; m1 < this.hSize; m1 += 1) {
            this.bitmapData.setPixel(m1 + this.hSize - 2, m1 + 1 + this.hOffset, colorBorderRight);
        }
    } else {
        //left edge
        for (l2 = 0; l2 < this.hSize - 2; l2 += 1) {
            this.bitmapData.setPixel(Math.floor(l2 / 2), this.hSize - l2 + this.hOffset, colorBorderLeft);
        }

        //right edge
        for (m2 = 2; m2 < this.hSize; m2 += 1) {
            this.bitmapData.setPixel(Math.floor(m2 / 2) + this.dimension.xAxis - 2, m2 + 1 + this.hOffset, colorBorderRight);
        }
    }

    if (!this.border) {
        this.bitmapData.setPixel(this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - 1 + this.hOffset, colorBorderLeft);
    }

    //floodfill
    this.bitmapData.floodFill(this.dimension.xAxis - 1, this.hSize + Math.floor((this.dimension.xAxis - 1) / 2) + this.hOffset - 1, this.color.right);
    this.bitmapData.floodFill(this.dimension.xAxis - 3, this.hSize + Math.floor((this.dimension.xAxis - 1) / 2) + this.hOffset - 2, this.color.left);
};

// public methods
p.toString = function () {
    return '[Pyramid]';
};

module.exports = Pyramid;

},{"../colors/PyramidColor":3,"../dimensions/PyramidDimension":9,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],24:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SideXDimension = require('../dimensions/SideXDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SideX, p;
SideX = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SideX.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SideXDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis;
    this.h = this.dimension.zAxis + this.dimension.xAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = 0;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

    xOffsetInner = 0;
    yOffsetInner = this.dimension.zAxis;
    xOffsetOut = this.dimension.xAxis - 1;
    yOffsetOut = this.h - this.dimension.zAxis - 1;
    borderColor = this.border ? this.color.border : this.color.inner;

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), borderColor);
    }

    //z axis
    for (j = 0; j < this.dimension.zAxis; j += 1) {
        this.bitmapData.setPixel(xOffsetInner, yOffsetInner - j, borderColor);
        this.bitmapData.setPixel(xOffsetOut, yOffsetOut + j, borderColor);
    }

    //fill an pixel graphic enclosed
    this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
};

// public methods
p.toString = function () {
    return '[SideX]';
};

module.exports = SideX;

},{"../colors/SideColor":4,"../dimensions/SideXDimension":10,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],25:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SideY, p;
SideY = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SideY.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SideYDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.yAxis;
    this.h = this.dimension.zAxis + this.dimension.yAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

    xOffsetInner = 0;
    yOffsetInner = this.h - this.dimension.zAxis - 1;
    xOffsetOut = this.dimension.yAxis - 1;
    yOffsetOut = this.dimension.zAxis;
    borderColor = this.border ? this.color.border : this.color.inner;

    //y axis
    for (i = 0; i < this.dimension.yAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner - Math.floor(i / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut + Math.floor(i / 2), borderColor);
    }

    //z axis
    for (j = 0; j < this.dimension.zAxis; j += 1) {
        this.bitmapData.setPixel(xOffsetInner, yOffsetInner + j, borderColor);
        this.bitmapData.setPixel(xOffsetOut, yOffsetOut - j, borderColor);
    }

    //fill an pixel graphic enclosed
    this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
};

// public methods
p.toString = function () {
    return '[SideY]';
};

module.exports = SideY;

},{"../colors/SideColor":4,"../dimensions/SideYDimension":11,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],26:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SlopeEast, p;
SlopeEast = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeEast.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis * 2 + this.dimension.yAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.xAxis * 3 / 2 - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight,
        i, j, k, m, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.rightSlope;

    // y axis
    for (j = 0; j < this.dimension.yAxis; j += 1) {
        this.bitmapData.setPixel(j, this.dimension.yAxis / 2 - Math.floor(j / 2) - 1, colorBorderRight);
        this.bitmapData.setPixel(j + this.dimension.xAxis - 2, this.h - Math.floor(j / 2) - 1, colorBorderRight);
    }

    // x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(i, this.h - this.dimension.xAxis / 2 + Math.floor(i / 2), colorBorderLeft);
    }

    // z axis
    for (k = this.dimension.yAxis / 2 - 1; k < this.h - this.dimension.xAxis / 2; k += 1) {
        this.bitmapData.setPixel(0, k, colorBorderLeft);
    }

    // slot
    for (m = 0; m < this.dimension.xAxis * 2 - 2; m += 1) {
        this.bitmapData.setPixel(this.dimension.yAxis - 1 + Math.floor(m / 2), m, colorBorderRight);
        this.bitmapData.setPixel(1 + Math.floor(m / 2), this.dimension.yAxis / 2 + m - 1, colorBorderRight);
    }

    // flood fill
    this.bitmapData.floodFill(this.dimension.yAxis - 2, 1, this.color.rightSlope);
    this.bitmapData.floodFill(this.dimension.xAxis - 3, this.h - 3, this.color.left);
    // hack single pixel
    this.bitmapData.setPixel(this.dimension.xAxis - 2, this.h - 2, this.color.left);

    // highlight
    if (this.border) {
        for (n = 1; n < this.dimension.xAxis * 2 - 3; n += 1) {
            this.bitmapData.setPixel(1 + Math.floor(n / 2), this.dimension.yAxis / 2 + n - 1, this.color.borderHighlight);
        }
    }
};

// public methods
p.toString = function () {
    return '[SlopeEast]';
};

module.exports = SlopeEast;

},{"../colors/SlopeColor":5,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],27:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideX = require('./SideX');
var SideXDimension = require('../dimensions/SideXDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeNorth, p;
SlopeNorth = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeNorth.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.yAxis * 3 / 2 + this.dimension.xAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.yAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        sideX, poX, ctx, bmd,
        i, j, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;
    colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.h - this.dimension.xAxis / 2),
        new SideColor(colorBorderLeft, this.color.left)
    );

    poX = new PixelObject(sideX);

    ctx = this.bitmapData.context;
    ctx.drawImage(poX.canvas, poX.x, poX.y + this.h - this.dimension.xAxis / 2);

    bmd = new BitmapData(this.w, this.h);

    // close the path for floodfill
    for (i = this.h - this.dimension.yAxis * 3 / 2 + 2; i < this.h; i += 1) {
        bmd.setPixel(this.dimension.xAxis - 1, i, colorBorderRight);
    }

    // y axis
    for (j = 1; j < this.dimension.yAxis; j += 1) {
        bmd.setPixel(this.dimension.xAxis + j - 2, this.h - Math.floor(j / 2) - 1, colorBorderRight);
        bmd.setPixel(this.dimension.xAxis + j - 2, this.dimension.xAxis / 2 - 2 + j, colorBorderRight);
    }

    // flood fill
    bmd.floodFill(this.dimension.xAxis + 1, this.h - 3, this.color.right);

    //highlight
    for (n = this.dimension.xAxis / 2; n < this.h - 1; n += 1) {
        bmd.setPixel(this.dimension.xAxis - 1, n, this.color.right);
        bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
    }

    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return '[SlopeNorth]';
};

module.exports = SlopeNorth;

},{"../colors/SideColor":4,"../colors/SlopeColor":5,"../dimensions/SideXDimension":10,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../display/PixelObject":14,"../geom/Matrix":16,"./AbstractPrimitive":20,"./SideX":24}],28:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SlopeSouth, p;
SlopeSouth = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeSouth.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis / 2 + this.dimension.yAxis * 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.yAxis * 3 / 2 - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight,
        i, j, k, m, n;

    colorBorderLeft = this.border ? this.color.border : this.color.leftSlope;
    colorBorderRight = this.border ? this.color.border : this.color.right;

    // x axis
    for (j = 0; j < this.dimension.xAxis; j += 1) {
        this.bitmapData.setPixel(j, this.dimension.yAxis * 2 + Math.floor(j / 2) - 3, colorBorderLeft);
        this.bitmapData.setPixel(j + this.dimension.yAxis - 2, Math.floor(j / 2), colorBorderLeft);
    }

    // y axis
    for (i = 0; i < this.dimension.yAxis; i += 1) {
        this.bitmapData.setPixel(this.dimension.xAxis - 2 + i, this.h - Math.floor(i / 2) - 1, colorBorderRight);
    }

    // z axis
    for (k = this.dimension.xAxis / 2 - 1; k < this.h - this.dimension.yAxis / 2; k += 1) {
        this.bitmapData.setPixel(this.w - 1, k, colorBorderRight);
    }

    // slot
    for (m = 0; m < this.dimension.yAxis * 2 - 2; m += 1) {
        this.bitmapData.setPixel(Math.floor(m / 2), this.dimension.yAxis * 2 - m - 3, colorBorderLeft);
        this.bitmapData.setPixel(this.dimension.xAxis - 2 + Math.floor(m / 2), this.h - m - 1, colorBorderLeft);
    }

    // flood fill
    this.bitmapData.floodFill(this.dimension.yAxis - 1, 1, this.color.leftSlope);
    this.bitmapData.floodFill(this.dimension.xAxis, this.h - 3, this.color.right);
    // hack single pixel
    this.bitmapData.setPixel(this.dimension.xAxis - 1, this.h - 2, this.color.right);

    // highlight
    if (this.border) {
        for (n = 1; n < this.dimension.yAxis * 2 - 3; n += 1) {
            this.bitmapData.setPixel(this.dimension.xAxis - 2 + Math.floor(n / 2), this.h - n - 1, this.color.borderHighlight);
        }
    }
};

// public methods
p.toString = function () {
    return '[SlopeSouth]';
};

module.exports = SlopeSouth;

},{"../colors/SlopeColor":5,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../geom/Matrix":16,"./AbstractPrimitive":20}],29:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideY = require('./SideY');
var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeWest, p;
SlopeWest = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeWest.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis * 3 / 2 + this.dimension.yAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.xAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        sideY, poY, ctx, bmd,
        i, j, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;
    colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.h - this.dimension.yAxis / 2),
        new SideColor(colorBorderRight, this.color.right)
    );

    poY = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(poY.canvas, poY.x + this.w - 2, poY.y + this.h - this.dimension.yAxis / 2);

    bmd = new BitmapData(this.w, this.h);

    // close the path for floodfill
    for (i = this.h - this.dimension.xAxis * 3 / 2 + 2; i < this.h; i += 1) {
        bmd.setPixel(this.dimension.xAxis - 2, i, colorBorderLeft);
    }

    //x axis
    for (j = 0; j < this.dimension.xAxis - 1; j += 1) {
        bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 + Math.floor(j / 2), colorBorderLeft);
        bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 - j, colorBorderLeft);
    }

    // flood fill
    bmd.floodFill(this.dimension.xAxis - 3, this.h - 3, this.color.left);

    //highlight
    for (n = this.dimension.yAxis / 2; n < this.h - 1; n += 1) {
        bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
    }

    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return '[SlopeWest]';
};

module.exports = SlopeWest;

},{"../colors/SideColor":4,"../colors/SlopeColor":5,"../dimensions/SideYDimension":11,"../dimensions/SlopeDimension":12,"../display/BitmapData":13,"../display/PixelObject":14,"../geom/Matrix":16,"./AbstractPrimitive":20,"./SideY":25}],30:[function(require,module,exports){
/*jslint node: true*/
/*global document:true*/

'use strict';

var CanvasManager, p;
CanvasManager = function () {
    throw new Error('CanvasManager is a static Class, cannot be instanced.');
};
p = CanvasManager;

// public properties
p.defaultCanvas = null;

// public methods
p.getDefaultCanvas = function () {
    p.defaultCanvas = p.defaultCanvas || document.createElement('canvas');
    return p.defaultCanvas;
};

p.getNewCanvas = function () {
    return document.createElement('canvas');
};

p.toString = function () {
    return '[CanvasManager]';
};

module.exports = CanvasManager;

},{}],31:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CanvasTool, p;

CanvasTool = function () {
    throw new Error('CanvasTool is a static Class, cannot be instanced.');
};
p = CanvasTool;

// public methods
p.getPixel = function (imageData, x, y) {
    var data, index, r, g, b;

    data = imageData.data;
    index = (y * imageData.width + x) * 4;
    r = data[index];
    g = data[index + 1];
    b = data[index + 2];

    return ((r << 16) | (g << 8) | b);
};

p.toString = function () {
    return '[CanvasTool]';
};

module.exports = CanvasTool;

},{}],32:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var ColorGeom, p;

ColorGeom = function () {
    throw new Error('ColorGeom is a static Class, cannot be instanced.');
};
p = ColorGeom;

// public methods
p.get32 = function (color) {
    return color < 0xFF000000 ? (color + 0xFF000000) : color;
};

p.applyBrightness = function (color, brightness, highlight) {
    var a, r, g, b, y, v, u;

    a = ((color >>> 24) & 0x000000FF);
    r = ((color >>> 16) & 0x000000FF);
    g = ((color >>> 8) & 0x000000FF);
    b = (color & 0x000000FF);

    y = ((r * 313524) >> 20) + ((g * 615514) >> 20) + ((b * 119538) >> 20);
    u = -((155189 * r) >> 20) - ((303038 * g) >> 20) + ((458227 * b) >> 20);
    v = ((644874 * r) >> 20) - ((540016 * g) >> 20) - ((104857 * b) >> 20);

    if (!highlight) {
        y += brightness;
    } else {
        y = 60 + Math.pow(y, 1.2);
    }

    r = y + ((1195376 * v) >> 20);
    g = y - ((408944 * u) >> 20) - ((608174 * v) >> 20);
    b = y + ((2128609 * u) >> 20);

    r = Math.max(0, Math.min(r, 255));
    g = Math.max(0, Math.min(g, 255));
    b = Math.max(0, Math.min(b, 255));

    return (a << 24) | (r << 16) | (g << 8) | b;
};

p.toString = function () {
    return '[ColorGeom]';
};

module.exports = ColorGeom;

},{}],33:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var ColorPattern, p;

ColorPattern = function () {
    throw new Error('ColorPattern is a static Class, cannot be instanced.');
};
p = ColorPattern;

// public properties
p.GRASS_GREEN = 0xCCFF00;
p.YELLOW = 0xFFFF00;
p.WINE_RED = 0xFF0099;
p.PINK = 0xFF7CBF;
p.PURPLE = 0xCC00FF;
p.BLUE = 0x00CCFF;
p.GRAY = 0xEEEEEE;
p.BLACK = 0x666666;
p.FINE_COLORS =
    [
        p.GRASS_GREEN,
        p.YELLOW,
        p.WINE_RED,
        p.PINK,
        p.PURPLE,
        p.BLUE,
        p.GRAY,
        p.BLACK
    ];

// public methods
p.getRandomComfortableColor = function () {
    return p.FINE_COLORS[Math.floor(Math.random() * p.FINE_COLORS.length)];
};

p.toString = function () {
    return '[ColorPattern]';
};

module.exports = ColorPattern;

},{}]},{},[19])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29sb3JzL0Fic3RyYWN0Q29sb3IuanMiLCJzcmMvY29sb3JzL0N1YmVDb2xvci5qcyIsInNyYy9jb2xvcnMvUHlyYW1pZENvbG9yLmpzIiwic3JjL2NvbG9ycy9TaWRlQ29sb3IuanMiLCJzcmMvY29sb3JzL1Nsb3BlQ29sb3IuanMiLCJzcmMvZGltZW5zaW9ucy9BYnN0cmFjdERpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL0JyaWNrRGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvQ3ViZURpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL1B5cmFtaWREaW1lbnNpb24uanMiLCJzcmMvZGltZW5zaW9ucy9TaWRlWERpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL1NpZGVZRGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24uanMiLCJzcmMvZGlzcGxheS9CaXRtYXBEYXRhLmpzIiwic3JjL2Rpc3BsYXkvUGl4ZWxPYmplY3QuanMiLCJzcmMvZGlzcGxheS9QaXhlbFZpZXcuanMiLCJzcmMvZ2VvbS9NYXRyaXguanMiLCJzcmMvZ2VvbS9Qb2ludC5qcyIsInNyYy9nZW9tL1BvaW50M0QuanMiLCJzcmMvb2JlbGlzay5qcyIsInNyYy9wcmltaXRpdmVzL0Fic3RyYWN0UHJpbWl0aXZlLmpzIiwic3JjL3ByaW1pdGl2ZXMvQnJpY2suanMiLCJzcmMvcHJpbWl0aXZlcy9DdWJlLmpzIiwic3JjL3ByaW1pdGl2ZXMvUHlyYW1pZC5qcyIsInNyYy9wcmltaXRpdmVzL1NpZGVYLmpzIiwic3JjL3ByaW1pdGl2ZXMvU2lkZVkuanMiLCJzcmMvcHJpbWl0aXZlcy9TbG9wZUVhc3QuanMiLCJzcmMvcHJpbWl0aXZlcy9TbG9wZU5vcnRoLmpzIiwic3JjL3ByaW1pdGl2ZXMvU2xvcGVTb3V0aC5qcyIsInNyYy9wcmltaXRpdmVzL1Nsb3BlV2VzdC5qcyIsInNyYy91dGlscy9DYW52YXNNYW5hZ2VyLmpzIiwic3JjL3V0aWxzL0NhbnZhc1Rvb2wuanMiLCJzcmMvdXRpbHMvQ29sb3JHZW9tLmpzIiwic3JjL3V0aWxzL0NvbG9yUGF0dGVybi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdENvbG9yLCBwO1xuXG5BYnN0cmFjdENvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xufTtcbnAgPSBBYnN0cmFjdENvbG9yLnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbi8qKlxuICogVGhlIGlubmVyIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5pbm5lciA9IG51bGw7XG5cbi8qKlxuICogVGhlIGJvcmRlciBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAuYm9yZGVyID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgYm9yZGVySGlnaGxpZ2h0IGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5ib3JkZXJIaWdobGlnaHQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBsZWZ0IHNpZGUgY29sb3JzIGZvciBlbGVtZW50cyBvZiBjZXJ0YWluIHByaW1pdGl2ZVxuICovXG5wLmxlZnQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSByaWdodCBzaWRlIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5yaWdodCA9IG51bGw7XG5cbi8qKlxuICogVGhlIGhvcml6b250YWwgY29sb3JzIGZvciBlbGVtZW50cyBvZiBjZXJ0YWluIHByaW1pdGl2ZVxuICovXG5wLmhvcml6b250YWwgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBsZWZ0IHNsb3Qgc2lkZSBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAubGVmdFNsb3BlID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgcmlnaHQgc2xvdCBzaWRlIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5yaWdodFNsb3BlID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0Fic3RyYWN0Q29sb3JdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RDb2xvcjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdENvbG9yID0gcmVxdWlyZSgnLi9BYnN0cmFjdENvbG9yJyk7XG52YXIgQ29sb3JHZW9tID0gcmVxdWlyZSgnLi4vdXRpbHMvQ29sb3JHZW9tJyk7XG5cbnZhciBDdWJlQ29sb3IsIHA7XG5DdWJlQ29sb3IgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBob3Jpem9udGFsKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCwgaG9yaXpvbnRhbCk7XG59O1xucCA9IEN1YmVDb2xvci5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RDb2xvcigpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xucC5CUklHSFRORVNTX0dBSU4gPSAtMjA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBob3Jpem9udGFsKSB7XG4gICAgdGhpcy5ib3JkZXIgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVyID09PSB1bmRlZmluZWQgPyAweDg3ODc4NyA6IGJvcmRlcik7XG4gICAgdGhpcy5ib3JkZXJIaWdobGlnaHQgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVySGlnaGxpZ2h0ID09PSB1bmRlZmluZWQgPyAweEZGRkZGRiA6IGJvcmRlckhpZ2hsaWdodCk7XG4gICAgdGhpcy5sZWZ0ID0gQ29sb3JHZW9tLmdldDMyKGxlZnQgPT09IHVuZGVmaW5lZCA/IDB4QzlDRkQwIDogbGVmdCk7XG4gICAgdGhpcy5yaWdodCA9IENvbG9yR2VvbS5nZXQzMihyaWdodCA9PT0gdW5kZWZpbmVkID8gMHhFM0UzRTMgOiByaWdodCk7XG4gICAgdGhpcy5ob3Jpem9udGFsID0gQ29sb3JHZW9tLmdldDMyKGhvcml6b250YWwgPT09IHVuZGVmaW5lZCA/IDB4RUVFRkYwIDogaG9yaXpvbnRhbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldEJ5SG9yaXpvbnRhbENvbG9yID0gZnVuY3Rpb24gKGhvcml6b250YWwpIHtcbiAgICByZXR1cm4gbmV3IEN1YmVDb2xvcihcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDQpLFxuICAgICAgICAvL2FwcGx5IGhpZ2h0bGlnaHRcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCAwLCB0cnVlKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDIpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKGhvcml6b250YWwsIHRoaXMuQlJJR0hUTkVTU19HQUlOKSxcbiAgICAgICAgaG9yaXpvbnRhbFxuICAgICk7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0N1YmVDb2xvcl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlQ29sb3I7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3RDb2xvciA9IHJlcXVpcmUoJy4vQWJzdHJhY3RDb2xvcicpO1xudmFyIENvbG9yR2VvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL0NvbG9yR2VvbScpO1xuXG52YXIgUHlyYW1pZENvbG9yLCBwO1xuUHlyYW1pZENvbG9yID0gZnVuY3Rpb24gKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShib3JkZXIsIGJvcmRlckhpZ2hsaWdodCwgbGVmdCwgcmlnaHQpO1xufTtcbnAgPSBQeXJhbWlkQ29sb3IucHJvdG90eXBlID0gbmV3IEFic3RyYWN0Q29sb3IoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuQlJJR0hUTkVTU19HQUlOID0gLTIwO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMuYm9yZGVyID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlciA9PT0gdW5kZWZpbmVkID8gMHg5NDk2OTggOiBib3JkZXIpO1xuICAgIHRoaXMuYm9yZGVySGlnaGxpZ2h0ID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlckhpZ2hsaWdodCA9PT0gdW5kZWZpbmVkID8gMHhGRkZGRkYgOiBib3JkZXJIaWdobGlnaHQpO1xuICAgIHRoaXMubGVmdCA9IENvbG9yR2VvbS5nZXQzMihsZWZ0ID09PSB1bmRlZmluZWQgPyAweEU2RThFOSA6IGxlZnQpO1xuICAgIHRoaXMucmlnaHQgPSBDb2xvckdlb20uZ2V0MzIocmlnaHQgPT09IHVuZGVmaW5lZCA/IDB4RUVFRkYwIDogcmlnaHQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXRCeVJpZ2h0Q29sb3IgPSBmdW5jdGlvbiAocmlnaHQpIHtcbiAgICByZXR1cm4gbmV3IFB5cmFtaWRDb2xvcihcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhyaWdodCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiA0KSxcbiAgICAgICAgLy9hcHBseSBoaWdodGxpZ2h0XG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MocmlnaHQsIDAsIHRydWUpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKHJpZ2h0LCB0aGlzLkJSSUdIVE5FU1NfR0FJTiksXG4gICAgICAgIHJpZ2h0XG4gICAgKTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbUHlyYW1pZENvbG9yXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFB5cmFtaWRDb2xvcjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdENvbG9yID0gcmVxdWlyZSgnLi9BYnN0cmFjdENvbG9yJyk7XG52YXIgQ29sb3JHZW9tID0gcmVxdWlyZSgnLi4vdXRpbHMvQ29sb3JHZW9tJyk7XG5cbnZhciBTaWRlQ29sb3IsIHA7XG5TaWRlQ29sb3IgPSBmdW5jdGlvbiAoYm9yZGVyLCBpbm5lcikge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShib3JkZXIsIGlubmVyKTtcbn07XG5wID0gU2lkZUNvbG9yLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdENvbG9yKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLkJSSUdIVE5FU1NfR0FJTiA9IC0yMDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChib3JkZXIsIGlubmVyKSB7XG4gICAgdGhpcy5ib3JkZXIgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVyID09PSB1bmRlZmluZWQgPyAweDg3ODc4NyA6IGJvcmRlcik7XG4gICAgdGhpcy5pbm5lciA9IENvbG9yR2VvbS5nZXQzMihpbm5lciA9PT0gdW5kZWZpbmVkID8gMHhFRUVFRUUgOiBpbm5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldEJ5SW5uZXJDb2xvciA9IGZ1bmN0aW9uIChpbm5lcikge1xuICAgIHJldHVybiBuZXcgU2lkZUNvbG9yKFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKGlubmVyLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDQpLFxuICAgICAgICBpbm5lclxuICAgICk7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1NpZGVDb2xvcl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlQ29sb3I7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3RDb2xvciA9IHJlcXVpcmUoJy4vQWJzdHJhY3RDb2xvcicpO1xudmFyIENvbG9yR2VvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL0NvbG9yR2VvbScpO1xuXG52YXIgU2xvcGVDb2xvciwgcDtcblNsb3BlQ29sb3IgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBsZWZ0U2xvcGUsIHJpZ2h0U2xvcGUpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBsZWZ0U2xvcGUsIHJpZ2h0U2xvcGUpO1xufTtcbnAgPSBTbG9wZUNvbG9yLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdENvbG9yKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLkJSSUdIVE5FU1NfR0FJTiA9IC0yMDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChib3JkZXIsIGJvcmRlckhpZ2hsaWdodCwgbGVmdCwgcmlnaHQsIGxlZnRTbG9wZSwgcmlnaHRTbG9wZSkge1xuICAgIHRoaXMuYm9yZGVyID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlciA9PT0gdW5kZWZpbmVkID8gMHg5NDk2OTggOiBib3JkZXIpO1xuICAgIHRoaXMuYm9yZGVySGlnaGxpZ2h0ID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlckhpZ2hsaWdodCA9PT0gdW5kZWZpbmVkID8gMHhGRkZGRkYgOiBib3JkZXJIaWdobGlnaHQpO1xuICAgIHRoaXMubGVmdCA9IENvbG9yR2VvbS5nZXQzMihsZWZ0ID09PSB1bmRlZmluZWQgPyAweEM5Q0ZEMCA6IGxlZnQpO1xuICAgIHRoaXMucmlnaHQgPSBDb2xvckdlb20uZ2V0MzIocmlnaHQgPT09IHVuZGVmaW5lZCA/IDB4RTZFOEU5IDogcmlnaHQpO1xuICAgIHRoaXMubGVmdFNsb3BlID0gQ29sb3JHZW9tLmdldDMyKGxlZnRTbG9wZSA9PT0gdW5kZWZpbmVkID8gMHhEQkRCREIgOiBsZWZ0U2xvcGUpO1xuICAgIHRoaXMucmlnaHRTbG9wZSA9IENvbG9yR2VvbS5nZXQzMihyaWdodFNsb3BlID09PSB1bmRlZmluZWQgPyAweERCREJEQiA6IHJpZ2h0U2xvcGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xuXG4vKlxuICogaG9yaXpvbnRhbCBzaWRlIGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QgaW4gdGhlIFNsb3BlIHByaW1pdGl2ZVxuICogeW91IGNhbiBhc3NpZ24gdGhlIHNhbWUgaG9yaXpvbnRhbCBjb2xvciBhcyBjdWJlXG4gKiBzbyB0aGF0IHlvdSB3aWxsIGJlIGFibGUgdG8gYXJyYW5nZSB0aGUgc2xvcGUgd2l0aCBjdWJlXG4gKi9cbnAuZ2V0QnlIb3Jpem9udGFsQ29sb3IgPSBmdW5jdGlvbiAoaG9yaXpvbnRhbCkge1xuICAgIHJldHVybiBuZXcgU2xvcGVDb2xvcihcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDQpLFxuICAgICAgICAvL2FwcGx5IGhpZ2h0bGlnaHRcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCAwLCB0cnVlKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDIpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKGhvcml6b250YWwsIHRoaXMuQlJJR0hUTkVTU19HQUlOKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDEuNSksXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiAwLjUpXG4gICAgKTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2xvcGVDb2xvcl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbG9wZUNvbG9yO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uLCBwO1xuQWJzdHJhY3REaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG59O1xucCA9IEFic3RyYWN0RGltZW5zaW9uLnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbi8qKlxuICogVGhlIHggQXhpcyBkaW1lbnNpb25zIGluIDIyLjYgZGVncmVlcyBjb29yZGluYXRlXG4gKi9cbnAueEF4aXMgPSBudWxsO1xuXG4vKipcbiAqIFRoZSB5IEF4aXMgZGltZW5zaW9ucyBpbiAyMi42IGRlZ3JlZXMgY29vcmRpbmF0ZVxuICovXG5wLnlBeGlzID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgeiBBeGlzIGRpbWVuc2lvbnMgaW4gMjIuNiBkZWdyZWVzIGNvb3JkaW5hdGVcbiAqL1xucC56QXhpcyA9IG51bGw7XG5cbi8qKlxuICogUHlyYW1pZCB0YWxsIG1vZGVcbiAqL1xucC50YWxsID0gZmFsc2U7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tBYnN0cmFjdERpbWVuc2lvbl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdERpbWVuc2lvbjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERpbWVuc2lvbiA9IHJlcXVpcmUoJy4vQWJzdHJhY3REaW1lbnNpb24nKTtcblxudmFyIEJyaWNrRGltZW5zaW9uLCBwO1xuQnJpY2tEaW1lbnNpb24gPSBmdW5jdGlvbiAoeEF4aXMsIHlBeGlzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHhBeGlzLCB5QXhpcyk7XG59O1xucCA9IEJyaWNrRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHhBeGlzLCB5QXhpcykge1xuICAgIHRoaXMueEF4aXMgPSB4QXhpcyB8fCAzMDtcbiAgICB0aGlzLnlBeGlzID0geUF4aXMgfHwgMzA7XG5cbiAgICBpZiAodGhpcy54QXhpcyAlIDIgPT09IDEgfHwgdGhpcy55QXhpcyAlIDIgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd4LHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICAvLyB4QXhpcyB8fCB5QXhpcyA9IDQgZmxvb2RGaWxsIGNvdWxkIG5vdCBiZSBhcHBsaWVkXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCB8fCB0aGlzLnlBeGlzIDw9IDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaW1lbnNpb24gaXMgdG9vIHNtYWxsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0JyaWNrRGltZW5zaW9uXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJyaWNrRGltZW5zaW9uO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uID0gcmVxdWlyZSgnLi9BYnN0cmFjdERpbWVuc2lvbicpO1xuXG52YXIgQ3ViZURpbWVuc2lvbiwgcDtcbkN1YmVEaW1lbnNpb24gPSBmdW5jdGlvbiAoeEF4aXMsIHlBeGlzLCB6QXhpcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4QXhpcywgeUF4aXMsIHpBeGlzKTtcbn07XG5wID0gQ3ViZURpbWVuc2lvbi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3REaW1lbnNpb24oKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh4QXhpcywgeUF4aXMsIHpBeGlzKSB7XG4gICAgdGhpcy54QXhpcyA9IHhBeGlzIHx8IDMwO1xuICAgIHRoaXMueUF4aXMgPSB5QXhpcyB8fCAzMDtcbiAgICB0aGlzLnpBeGlzID0gekF4aXMgfHwgMzA7XG5cbiAgICBpZiAodGhpcy54QXhpcyAlIDIgPT09IDEgfHwgdGhpcy55QXhpcyAlIDIgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd4LHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICAvLyB4QXhpcyB8fCB5QXhpcyA9IDQgZmxvb2RGaWxsIGNvdWxkIG5vdCBiZSBhcHBsaWVkXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCB8fCB0aGlzLnlBeGlzIDw9IDQgfHwgdGhpcy56QXhpcyA8PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGltZW5zaW9uIGlzIHRvbyBzbWFsbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tDdWJlRGltZW5zaW9uXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN1YmVEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBQeXJhbWlkRGltZW5zaW9uLCBwO1xuUHlyYW1pZERpbWVuc2lvbiA9IGZ1bmN0aW9uIChheGlzLCB0YWxsKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGF4aXMsIHRhbGwpO1xufTtcbnAgPSBQeXJhbWlkRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF4aXMsIHRhbGwpIHtcbiAgICB0aGlzLnhBeGlzID0gYXhpcyB8fCAzMDtcbiAgICB0aGlzLnlBeGlzID0gYXhpcyB8fCAzMDtcbiAgICB0aGlzLnRhbGwgPSB0YWxsIHx8IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMueEF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXhpcyBtdXN0IGJlIGV2ZW4gbnVtYmVyJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbUHlyYW1pZERpbWVuc2lvbl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQeXJhbWlkRGltZW5zaW9uO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uID0gcmVxdWlyZSgnLi9BYnN0cmFjdERpbWVuc2lvbicpO1xuXG52YXIgU2lkZVhEaW1lbnNpb24sIHA7XG5TaWRlWERpbWVuc2lvbiA9IGZ1bmN0aW9uICh4QXhpcywgekF4aXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoeEF4aXMsIHpBeGlzKTtcbn07XG5wID0gU2lkZVhEaW1lbnNpb24ucHJvdG90eXBlID0gbmV3IEFic3RyYWN0RGltZW5zaW9uKCk7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoeEF4aXMsIHpBeGlzKSB7XG4gICAgdGhpcy54QXhpcyA9IHhBeGlzIHx8IDMwO1xuICAgIHRoaXMuekF4aXMgPSB6QXhpcyB8fCAzMDtcblxuICAgIGlmICh0aGlzLnhBeGlzICUgMiA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3hBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICAvLyB4QXhpcyB8fCB6QXhpcyA9IDQgZmxvb2RGaWxsIGNvdWxkIG5vdCBiZSBhcHBsaWVkXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCB8fCB0aGlzLnpBeGlzIDw9IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaW1lbnNpb24gaXMgdG9vIHNtYWxsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1NpZGVYRGltZW5zaW9uXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVYRGltZW5zaW9uO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uID0gcmVxdWlyZSgnLi9BYnN0cmFjdERpbWVuc2lvbicpO1xuXG52YXIgU2lkZVlEaW1lbnNpb24sIHA7XG5cblNpZGVZRGltZW5zaW9uID0gZnVuY3Rpb24gKHlBeGlzLCB6QXhpcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh5QXhpcywgekF4aXMpO1xufTtcbnAgPSBTaWRlWURpbWVuc2lvbi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3REaW1lbnNpb24oKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh5QXhpcywgekF4aXMpIHtcbiAgICB0aGlzLnlBeGlzID0geUF4aXMgfHwgMzA7XG4gICAgdGhpcy56QXhpcyA9IHpBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMueUF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneUF4aXMgbXVzdCBiZSBldmVuIG51bWJlcicpO1xuICAgIH1cblxuICAgIC8vIHlBeGlzIHx8IHpBeGlzID0gNCBmbG9vZEZpbGwgY291bGQgbm90IGJlIGFwcGxpZWRcbiAgICBpZiAodGhpcy55QXhpcyA8PSA0IHx8IHRoaXMuekF4aXMgPD0gMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2lkZVlEaW1lbnNpb25dJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVlEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBTbG9wZURpbWVuc2lvbiwgcDtcblNsb3BlRGltZW5zaW9uID0gZnVuY3Rpb24gKHhBeGlzLCB5QXhpcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4QXhpcywgeUF4aXMpO1xufTtcbnAgPSBTbG9wZURpbWVuc2lvbi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3REaW1lbnNpb24oKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh4QXhpcywgeUF4aXMpIHtcbiAgICB0aGlzLnhBeGlzID0geEF4aXMgfHwgMzA7XG4gICAgdGhpcy55QXhpcyA9IHlBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMueEF4aXMgJSAyID09PSAxIHx8IHRoaXMueUF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneEF4aXMgYW5kIHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy54QXhpcyA8PSA0IHx8IHRoaXMueUF4aXMgPD0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2xvcGVEaW1lbnNpb25dJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2xvcGVEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FudmFzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3V0aWxzL0NhbnZhc01hbmFnZXInKTtcblxudmFyIEJpdG1hcERhdGEsIHA7XG5CaXRtYXBEYXRhID0gZnVuY3Rpb24gKHcsIGgsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUodywgaCwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IEJpdG1hcERhdGEucHJvdG90eXBlO1xuXG4vLyBwdWJsaWMgcHJvcGVydHlcbnAuaW1hZ2VEYXRhID0gbnVsbDtcbnAuY2FudmFzID0gbnVsbDtcbnAuY29udGV4dCA9IG51bGw7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAodywgaCwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIGlmICh3ID09PSB1bmRlZmluZWQgfHwgaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQml0bWFwRGF0YSB3aWR0aCBvciBoZWlnaHQgaXMgbWlzc2luZycpO1xuICAgIH1cblxuICAgIGlmICh1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gQ2FudmFzTWFuYWdlci5nZXREZWZhdWx0Q2FudmFzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBDYW52YXNNYW5hZ2VyLmdldE5ld0NhbnZhcygpO1xuICAgIH1cblxuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3KTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGgpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5pbWFnZURhdGEgPSB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKHcsIGgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnNldFBpeGVsID0gZnVuY3Rpb24gKHBvc1gsIHBvc1ksIGNvbG9yKSB7XG4gICAgdmFyIGluZGV4ID0gKHBvc1kgKiB0aGlzLmltYWdlRGF0YS53aWR0aCArIHBvc1gpICogNDtcbiAgICB0aGlzLnNldFBpeGVsQnlJbmRleChpbmRleCwgY29sb3IpO1xufTtcblxucC5zZXRQaXhlbEJ5SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGNvbG9yKSB7XG4gICAgdmFyIHBpeGVscyA9IHRoaXMuaW1hZ2VEYXRhLmRhdGE7XG5cbiAgICBwaXhlbHNbaW5kZXhdID0gKGNvbG9yID4+PiAxNikgJiAweEZGO1xuICAgIHBpeGVsc1tpbmRleCArIDFdID0gKGNvbG9yID4+PiA4KSAmIDB4RkY7XG4gICAgcGl4ZWxzW2luZGV4ICsgMl0gPSAoY29sb3IgPj4+IDApICYgMHhGRjtcbiAgICBwaXhlbHNbaW5kZXggKyAzXSA9IChjb2xvciA+Pj4gMjQpICYgMHhGRjtcbn07XG5cbnAuY2hlY2tQaXhlbEF2YWlsYWJsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgdmFyIGluZGV4ID0gKHkgKiB0aGlzLmltYWdlRGF0YS53aWR0aCArIHgpICogNDtcblxuICAgIHJldHVybiB0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPT09IDA7XG59O1xuXG5wLmZsb29kRmlsbCA9IGZ1bmN0aW9uIChwb3NYLCBwb3NZLCBjb2xvcikge1xuICAgIGlmICgoKGNvbG9yID4+PiAyNCkgJiAweEZGKSA9PT0gMHgwMCkge1xuICAgICAgICAvLyB0cmFuc3BhcmVudCBmbG9vZCBmaWxsXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgeCA9IHBvc1gsIHkgPSBwb3NZLFxuICAgICAgICBzdGFjayA9IFtdLFxuICAgICAgICBub3dDb2wgPSBbXSxcbiAgICAgICAgcHJldkNvbCA9IFtdLFxuICAgICAgICBjb2wsIHJvdywgbWF0Y2hGbGFnLCBuZXdTdGFydCxcbiAgICAgICAgdyA9IHRoaXMuaW1hZ2VEYXRhLndpZHRoLFxuICAgICAgICBoID0gdGhpcy5pbWFnZURhdGEuaGVpZ2h0LFxuICAgICAgICBpLCBqO1xuXG4gICAgLy8gYm91bmQgcmVhY2hcbiAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+PSB3IHx8IHkgPj0gaCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZmlyc3QgcG9pbnQgY2hlY2sgZmFpbFxuICAgIGlmICghdGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKHgsIHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RhcnQgcG9pbnQgZm9yIGZsb29kIGZpbGwgaXMgYWxyZWFkeSBmaWxsZWQnKTtcbiAgICB9XG5cbiAgICAvLyBsZWZ0IHNpZGUgZmxvb2QgZmlsbFxuICAgIGZvciAoY29sID0geDsgY29sID49IDA7IGNvbCAtPSAxKSB7XG4gICAgICAgIC8vIHRvcCBzaWRlXG4gICAgICAgIGZvciAocm93ID0geTsgcm93ID49IDA7IHJvdyAtPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lIGlzIGludmFsaWQgcGl4ZWwgJiYgbm90IGF0IGNvbCB0b3BcbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSB5ICYmIHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgKyAxLCByb3cgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IG9uZSBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sICsgMSwgcm93IC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IHJvdyAtIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWwsIGFzc2lnbiBtYXggdmFsdWUgdG8gYXZvaWQgbG9vcCBiZWxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IG5ld1N0YXJ0OyByb3cgPj0gMDsgcm93IC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvLyBib3R0b20gc2lkZVxuICAgICAgICBmb3IgKHJvdyA9IHk7IHJvdyA8IGg7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lIGlzIGludmFsaWQgcGl4ZWwgJiYgbm90IGF0IGNvbCBib3R0b21cbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSB5ICYmIHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgKyAxLCByb3cgKyAxKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQgb25lIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSByb3cgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgKyAxLCByb3cgKyAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93ICsgMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCwgYXNzaWduIG1heCB2YWx1ZSB0byBhdm9pZCBsb29wIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSBuZXdTdGFydDsgcm93IDwgaDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGFyZSB3aXRoIHByZXZpb3VzIGNvbHVtblxuICAgICAgICAvLyBmb3IgZmlyc3QgY29sdW1uXG4gICAgICAgIC8vIHRoZSBnaXZlbiBwb2ludCBzaG91bGQgYmUgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgICAgICAgaWYgKGNvbCA9PT0geCkge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoRmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmV2Q29sLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcHJldkNvbC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChub3dDb2xbal0gPT09IHByZXZDb2xbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHByZXZDb2xbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgICAgIG5vd0NvbCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYm91bmQgcmVhY2hcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgc3RhcnQgcG9pbnRcbiAgICB4ID0gcG9zWDtcbiAgICB5ID0gcG9zWTtcbiAgICBwcmV2Q29sID0gW107XG4gICAgbm93Q29sID0gW107XG5cbiAgICAvLyByaWdodCBzaWRlIGZsb29kIGZpbGxcbiAgICBmb3IgKGNvbCA9IHg7IGNvbCA8IHc7IGNvbCArPSAxKSB7XG5cbiAgICAgICAgLy8gdG9wIHNpZGVcbiAgICAgICAgZm9yIChyb3cgPSB5OyByb3cgPj0gMDsgcm93IC09IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUgaXMgaW52YWxpZCBwaXhlbCAmJiBub3QgYXQgY29sIHRvcFxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT09IHkgJiYgdGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCAtIDEsIHJvdyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQgb25lIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSByb3cgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgLSAxLCByb3cgLSAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93IC0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCwgYXNzaWduIG1heCB2YWx1ZSB0byBhdm9pZCBsb29wIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gbmV3U3RhcnQ7IHJvdyA+PSAwOyByb3cgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wsIHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGUgcGl4ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKChyb3cgKiB3ICsgY29sKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd0NvbC5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBib3R0b20gc2lkZVxuICAgICAgICBmb3IgKHJvdyA9IHk7IHJvdyA8IGg7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lIGlzIGludmFsaWQgcGl4ZWwgJiYgbm90IGF0IGNvbCBib3R0b21cbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSB5ICYmIHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgLSAxLCByb3cgKyAxKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQgb25lIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSByb3cgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgLSAxLCByb3cgKyAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93ICsgMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCwgYXNzaWduIG1heCB2YWx1ZSB0byBhdm9pZCBsb29wIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSBuZXdTdGFydDsgcm93IDwgaDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGFyZSB3aXRoIHByZXZpb3VzIGNvbHVtblxuICAgICAgICAvLyBmb3IgZmlyc3QgY29sdW1uXG4gICAgICAgIC8vIHRoZSBnaXZlbiBwb2ludCBzaG91bGQgYmUgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgICAgICAgaWYgKGNvbCA9PT0geCkge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoRmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmV2Q29sLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcHJldkNvbC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChub3dDb2xbal0gPT09IHByZXZDb2xbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHByZXZDb2xbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoRmxhZykge1xuICAgICAgICAgICAgcHJldkNvbCA9IG5vd0NvbC5jb25jYXQoKTtcbiAgICAgICAgICAgIG5vd0NvbCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYm91bmQgcmVhY2hcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsbCBpbWFnZSBkYXRhXG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuc2V0UGl4ZWxCeUluZGV4KHN0YWNrW2ldLCBjb2xvcik7XG4gICAgfVxufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tCaXRtYXBEYXRhXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJpdG1hcERhdGE7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUG9pbnQzRCA9IHJlcXVpcmUoJy4uL2dlb20vUG9pbnQzRCcpO1xuXG52YXIgUGl4ZWxPYmplY3QsIHA7XG5QaXhlbE9iamVjdCA9IGZ1bmN0aW9uIChwcmltaXRpdmUsIHBvaW50M0QpIHtcbiAgICB0aGlzLmluaXRpYWxpemUocHJpbWl0aXZlLCBwb2ludDNEKTtcbn07XG5wID0gUGl4ZWxPYmplY3QucHJvdG90eXBlO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xucC54ID0gbnVsbDtcbnAueSA9IG51bGw7XG5wLmNhbnZhcyA9IG51bGw7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocHJpbWl0aXZlLCBwb2ludDNEKSB7XG4gICAgaWYgKCFwcmltaXRpdmUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmltaXRpdmUgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgcDNEID0gcG9pbnQzRCB8fCBuZXcgUG9pbnQzRCgpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBwcmltaXRpdmUuY2FudmFzO1xuICAgIHRoaXMueCA9IHByaW1pdGl2ZS5tYXRyaXgudHggKyBwM0QueCAtIHAzRC55O1xuICAgIHRoaXMueSA9IHByaW1pdGl2ZS5tYXRyaXgudHkgKyBNYXRoLmZsb29yKHAzRC54IC8gMiArIHAzRC55IC8gMikgLSBwM0QuejtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tQaXhlbE9iamVjdF0nO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RzXG5cbm1vZHVsZS5leHBvcnRzID0gUGl4ZWxPYmplY3Q7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbi8qZ2xvYmFsIGpRdWVyeTp0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUG9pbnQgPSByZXF1aXJlKCcuLi9nZW9tL1BvaW50Jyk7XG52YXIgUGl4ZWxPYmplY3QgPSByZXF1aXJlKCcuLi9kaXNwbGF5L1BpeGVsT2JqZWN0Jyk7XG5cbnZhciBQaXhlbFZpZXcsIHA7XG5QaXhlbFZpZXcgPSBmdW5jdGlvbiAoY2FudmFzLCBwb2ludCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShjYW52YXMsIHBvaW50KTtcbn07XG5wID0gUGl4ZWxWaWV3LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuY2FudmFzID0gbnVsbDtcbnAuY29udGV4dCA9IG51bGw7XG5wLnBvaW50ID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChjYW52YXMsIHBvaW50KSB7XG4gICAgaWYgKCFjYW52YXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW52YXMgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgICAgICBjYW52YXMgPSBjYW52YXMuZ2V0KDApO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgfVxuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnBvaW50ID0gcG9pbnQgfHwgbmV3IFBvaW50KDAsIDApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5yZW5kZXJPYmplY3QgPSBmdW5jdGlvbiAocHJpbWl0aXZlLCBwb2ludDNEKSB7XG4gICAgdmFyIHBvID0gbmV3IFBpeGVsT2JqZWN0KHByaW1pdGl2ZSwgcG9pbnQzRCk7XG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShwby5jYW52YXMsIHRoaXMucG9pbnQueCArIHBvLngsIHRoaXMucG9pbnQueSArIHBvLnkpO1xufTtcblxucC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tQaXhlbFZpZXddJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGl4ZWxWaWV3O1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIE1hdHJpeCwgcDtcbk1hdHJpeCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYSwgYiwgYywgZCwgdHgsIHR5KTtcbn07XG5wID0gTWF0cml4LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXM6XG4vKipcbiAqIFBvc2l0aW9uICgwLCAwKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgYVxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmEgPSAxO1xuXG4vKipcbiAqIFBvc2l0aW9uICgwLCAxKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgYlxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmIgPSAwO1xuXG4vKipcbiAqIFBvc2l0aW9uICgxLCAwKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgY1xuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmMgPSAwO1xuXG4vKipcbiAqIFBvc2l0aW9uICgxLCAxKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgZFxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmQgPSAxO1xuXG4vKipcbiAqIFBvc2l0aW9uICgyLCAwKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgdHhcbiAqIEB0eXBlIE51bWJlclxuICoqL1xucC50eCA9IDA7XG5cbi8qKlxuICogUG9zaXRpb24gKDIsIDEpIGluIGEgM3gzIG1hdHJpeC5cbiAqIEBwcm9wZXJ0eSB0eVxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLnR5ID0gMDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgICB0aGlzLmEgPSAoYSA9PT0gdW5kZWZpbmVkKSA/IDEgOiBhO1xuICAgIHRoaXMuYiA9IGIgfHwgMDtcbiAgICB0aGlzLmMgPSBjIHx8IDA7XG4gICAgdGhpcy5kID0gKGQgPT09IHVuZGVmaW5lZCkgPyAxIDogZDtcbiAgICB0aGlzLnR4ID0gdHggfHwgMDtcbiAgICB0aGlzLnR5ID0gdHkgfHwgMDtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbTWF0cml4XSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHJpeDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQb2ludCwgcDtcblBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoeCwgeSk7XG59O1xucCA9IFBvaW50LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAueCA9IDA7XG5wLnkgPSAwO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLnggPSAoeCA9PT0gdW5kZWZpbmVkID8gMCA6IHgpO1xuICAgIHRoaXMueSA9ICh5ID09PSB1bmRlZmluZWQgPyAwIDogeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1BvaW50IHggOiAnICsgdGhpcy54ICsgJywgeSA6ICcgKyB0aGlzLnkgKyAnXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xuXG52YXIgUG9pbnQzRCwgcDtcblBvaW50M0QgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4LCB5LCB6KTtcbn07XG5wID0gUG9pbnQzRC5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLnggPSAwO1xucC55ID0gMDtcbnAueiA9IDA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgIHRoaXMueCA9ICh4ID09PSB1bmRlZmluZWQgPyAwIDogeCk7XG4gICAgdGhpcy55ID0gKHkgPT09IHVuZGVmaW5lZCA/IDAgOiB5KTtcbiAgICB0aGlzLnogPSAoeiA9PT0gdW5kZWZpbmVkID8gMCA6IHopO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b0dsb2JhbENvb3JkaW5hdGVzID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgIHZhciBwMkQgPSBuZXcgUG9pbnQoXG4gICAgICAgIHRoaXMueCAtIHRoaXMueSxcbiAgICAgICAgTWF0aC5mbG9vcih0aGlzLnggLyAyICsgdGhpcy55IC8gMikgLSB0aGlzLnpcbiAgICApO1xuXG4gICAgaWYgKG9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHAyRC54ID0gcDJELnggKyBvZmZzZXQueDtcbiAgICAgICAgcDJELnkgPSBwMkQueSArIG9mZnNldC55O1xuICAgIH1cblxuICAgIHJldHVybiBwMkQ7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1BvaW50M0QgeCA6ICcgKyB0aGlzLnggKyAnLCB5IDogJyArIHRoaXMueSArICcsIHo6ICcgKyB0aGlzLnogKyAnXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50M0Q7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbi8qZ2xvYmFsIHdpbmRvdzp0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuYW1lc3BhY2Ugb2JlbGlza1xuICoqL1xudmFyIG9iZWxpc2sgPSB7fTtcblxub2JlbGlzay5DdWJlID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL0N1YmUnKTtcbm9iZWxpc2suQnJpY2sgPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvQnJpY2snKTtcbm9iZWxpc2suUHlyYW1pZCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9QeXJhbWlkJyk7XG5vYmVsaXNrLlNpZGVYID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL1NpZGVYJyk7XG5vYmVsaXNrLlNpZGVZID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL1NpZGVZJyk7XG5vYmVsaXNrLlNsb3BlRWFzdCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9TbG9wZUVhc3QnKTtcbm9iZWxpc2suU2xvcGVOb3J0aCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9TbG9wZU5vcnRoJyk7XG5vYmVsaXNrLlNsb3BlU291dGggPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvU2xvcGVTb3V0aCcpO1xub2JlbGlzay5TbG9wZVdlc3QgPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvU2xvcGVXZXN0Jyk7XG5cbm9iZWxpc2suQ29sb3JQYXR0ZXJuID0gcmVxdWlyZSgnLi91dGlscy9Db2xvclBhdHRlcm4nKTtcbm9iZWxpc2suQ29sb3JHZW9tID0gcmVxdWlyZSgnLi91dGlscy9Db2xvckdlb20nKTtcbm9iZWxpc2suQ2FudmFzTWFuYWdlciA9IHJlcXVpcmUoJy4vdXRpbHMvQ2FudmFzTWFuYWdlcicpO1xub2JlbGlzay5DYW52YXNUb29sID0gcmVxdWlyZSgnLi91dGlscy9DYW52YXNUb29sJyk7XG5cbm9iZWxpc2suTWF0cml4ID0gcmVxdWlyZSgnLi9nZW9tL01hdHJpeCcpO1xub2JlbGlzay5Qb2ludCA9IHJlcXVpcmUoJy4vZ2VvbS9Qb2ludCcpO1xub2JlbGlzay5Qb2ludDNEID0gcmVxdWlyZSgnLi9nZW9tL1BvaW50M0QnKTtcblxub2JlbGlzay5QaXhlbFZpZXcgPSByZXF1aXJlKCcuL2Rpc3BsYXkvUGl4ZWxWaWV3Jyk7XG5vYmVsaXNrLlBpeGVsT2JqZWN0ID0gcmVxdWlyZSgnLi9kaXNwbGF5L1BpeGVsT2JqZWN0Jyk7XG5vYmVsaXNrLkJpdG1hcERhdGEgPSByZXF1aXJlKCcuL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xuXG5vYmVsaXNrLkJyaWNrRGltZW5zaW9uID0gcmVxdWlyZSgnLi9kaW1lbnNpb25zL0JyaWNrRGltZW5zaW9uJyk7XG5vYmVsaXNrLkN1YmVEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvQ3ViZURpbWVuc2lvbicpO1xub2JlbGlzay5QeXJhbWlkRGltZW5zaW9uID0gcmVxdWlyZSgnLi9kaW1lbnNpb25zL1B5cmFtaWREaW1lbnNpb24nKTtcbm9iZWxpc2suU2lkZVhEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvU2lkZVhEaW1lbnNpb24nKTtcbm9iZWxpc2suU2lkZVlEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvU2lkZVlEaW1lbnNpb24nKTtcbm9iZWxpc2suU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24nKTtcblxub2JlbGlzay5DdWJlQ29sb3IgPSByZXF1aXJlKCcuL2NvbG9ycy9DdWJlQ29sb3InKTtcbm9iZWxpc2suUHlyYW1pZENvbG9yID0gcmVxdWlyZSgnLi9jb2xvcnMvUHlyYW1pZENvbG9yJyk7XG5vYmVsaXNrLlNpZGVDb2xvciA9IHJlcXVpcmUoJy4vY29sb3JzL1NpZGVDb2xvcicpO1xub2JlbGlzay5TbG9wZUNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcnMvU2xvcGVDb2xvcicpO1xuXG53aW5kb3cub2JlbGlzayA9IG9iZWxpc2s7XG5cbm1vZHVsZS5leHBvcnRzID0gb2JlbGlzaztcblxuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0UHJpbWl0aXZlLCBwO1xuQWJzdHJhY3RQcmltaXRpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG59O1xucCA9IEFic3RyYWN0UHJpbWl0aXZlLnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbi8qKlxuICogdGhlIGNhbnZhcyBmb3IgZHJhd0ltYWdlIHRvIGFueSBjYW52YXNcbiAqL1xucC5jYW52YXMgPSBudWxsO1xuXG4vLyBwcm90ZWN0IHByb3BlcnRpZXNcbi8qKlxuICogdGhlIHdpZHRoIG9mIHRoZSBiaXRtYXAgaW4gMmQgZmxhc2ggY29vcmRpbmF0ZVxuICovXG5wLncgPSBudWxsO1xuXG4vKipcbiAqIHRoZSBoZWlnaHQgb2YgdGhlIGJpdG1hcCBpbiAyZCBmbGFzaCBjb29yZGluYXRlXG4gKi9cbnAuaCA9IG51bGw7XG5cbi8qKlxuICogdGhlIGRpbWVuc2lvbiBvZiBwcmltaXRpdmUgaW4gM2QgcGl4ZWwgY29vcmRpbmF0ZVxuICovXG5wLmRpbWVuc2lvbiA9IG51bGw7XG5cbi8qKlxuICogdGhlIGNvbG9yIG9iaiBvZiB0aGUgcHJpbWl0aXZlXG4gKi9cbnAuY29sb3IgPSBudWxsO1xuXG4vKipcbiAqIHRoZSBib3JkZXIgb3B0aW9uIG9mIHRoZSBwcmltaXRpdmVcbiAqL1xucC5ib3JkZXIgPSBudWxsO1xuXG4vKipcbiAqIHRoZSBzb3VyY2UgYml0bWFwZGF0YSBjb250YWlucyBwaXhlbCBncmFwaGljXG4gKi9cbnAuYml0bWFwRGF0YSA9IG51bGw7XG5cbi8qKlxuICogdGhlIHByZXNlcnZlIGNhbnZhcyBvcHRpb25cbiAqL1xucC51c2VEZWZhdWx0Q2FudmFzID0gbnVsbDtcblxuLyoqXG4gKiB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAqL1xucC5tYXRyaXggPSBudWxsO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbQWJzdHJhY3RQcmltaXRpdmVdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RQcmltaXRpdmU7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQnJpY2tEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL0JyaWNrRGltZW5zaW9uJyk7XG52YXIgU2lkZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1NpZGVDb2xvcicpO1xudmFyIE1hdHJpeCA9IHJlcXVpcmUoJy4uL2dlb20vTWF0cml4Jyk7XG52YXIgQml0bWFwRGF0YSA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xudmFyIEFic3RyYWN0UHJpbWl0aXZlID0gcmVxdWlyZSgnLi9BYnN0cmFjdFByaW1pdGl2ZScpO1xuXG52YXIgQnJpY2ssIHA7XG5CcmljayA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gQnJpY2sucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgQnJpY2tEaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBTaWRlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXMpIC8gMjtcblxuICAgIC8vIDIyLjYgZGVncmVlcyBpbXBsZW1lbnRhdGlvblxuICAgIHRoaXMudyAtPSAyO1xuICAgIHRoaXMuaCAtPSAxO1xuXG4gICAgLy8gdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgdGhpcy5tYXRyaXgudHggPSAtdGhpcy5kaW1lbnNpb24ueUF4aXMgKyAyO1xuICAgIHRoaXMubWF0cml4LnR5ID0gMDtcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciwgeE9mZnNldE91dCwgeU9mZnNldE91dCwgaSwgaiwgYm9yZGVyQ29sb3I7XG5cbiAgICB4T2Zmc2V0SW5uZXIgPSB0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDI7XG4gICAgeU9mZnNldElubmVyID0gMDtcbiAgICB4T2Zmc2V0T3V0ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxO1xuICAgIHlPZmZzZXRPdXQgPSB0aGlzLmggLSAxO1xuICAgIGJvcmRlckNvbG9yID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IuaW5uZXI7XG5cbiAgICAvL3ggYXhpc1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRpbWVuc2lvbi54QXhpczsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0SW5uZXIgKyBpLCB5T2Zmc2V0SW5uZXIgKyBNYXRoLmZsb29yKGkgLyAyKSwgYm9yZGVyQ29sb3IpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldE91dCAtIGksIHlPZmZzZXRPdXQgLSBNYXRoLmZsb29yKGkgLyAyKSwgYm9yZGVyQ29sb3IpO1xuICAgIH1cblxuICAgIC8veSBheGlzXG4gICAgZm9yIChqID0gMDsgaiA8IHRoaXMuZGltZW5zaW9uLnlBeGlzOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRJbm5lciArIDEgLSBqLCB5T2Zmc2V0SW5uZXIgKyBNYXRoLmZsb29yKGogLyAyKSwgYm9yZGVyQ29sb3IpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldE91dCAtIDEgKyBqLCB5T2Zmc2V0T3V0IC0gTWF0aC5mbG9vcihqIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICB9XG5cbiAgICAvL2ZpbGwgYW4gcGl4ZWwgZ3JhcGhpYyBlbmNsb3NlZFxuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwoTWF0aC5mbG9vcih0aGlzLncgLyAyKSwgTWF0aC5mbG9vcih0aGlzLmggLyAyKSwgdGhpcy5jb2xvci5pbm5lcik7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tCcmlja10nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCcmljaztcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDdWJlRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9DdWJlRGltZW5zaW9uJyk7XG52YXIgQnJpY2tEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL0JyaWNrRGltZW5zaW9uJyk7XG52YXIgU2lkZVhEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1NpZGVYRGltZW5zaW9uJyk7XG52YXIgU2lkZVlEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1NpZGVZRGltZW5zaW9uJyk7XG52YXIgQ3ViZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL0N1YmVDb2xvcicpO1xudmFyIFNpZGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TaWRlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIFBpeGVsT2JqZWN0ID0gcmVxdWlyZSgnLi4vZGlzcGxheS9QaXhlbE9iamVjdCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcbnZhciBCcmljayA9IHJlcXVpcmUoJy4vQnJpY2snKTtcbnZhciBTaWRlWCA9IHJlcXVpcmUoJy4vU2lkZVgnKTtcbnZhciBTaWRlWSA9IHJlcXVpcmUoJy4vU2lkZVknKTtcblxudmFyIEN1YmUsIHA7XG5DdWJlID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBDdWJlLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IEN1YmVEaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBDdWJlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24uekF4aXMgKyAodGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcykgLyAyO1xuXG4gICAgLy8gMjIuNiBkZWdyZWVzIGltcGxlbWVudGF0aW9uXG4gICAgdGhpcy53IC09IDI7XG4gICAgdGhpcy5oIC09IDE7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC10aGlzLmRpbWVuc2lvbi55QXhpcyArIDI7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtdGhpcy5kaW1lbnNpb24uekF4aXM7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBicmljaywgc2lkZVgsIHNpZGVZLCBwb0JyaWNrLCBwb1gsIHBvWSwgY3R4LCBibWQsIG9mZnNldFgsIG9mZnNldFksXG4gICAgICAgIGksIGosIGs7XG4gICAgLy8gaG9yaXpvbnRhbCBsYXllclxuICAgIGJyaWNrID0gbmV3IEJyaWNrKFxuICAgICAgICBuZXcgQnJpY2tEaW1lbnNpb24odGhpcy5kaW1lbnNpb24ueEF4aXMsIHRoaXMuZGltZW5zaW9uLnlBeGlzKSxcbiAgICAgICAgbmV3IFNpZGVDb2xvcih0aGlzLmNvbG9yLmJvcmRlciwgdGhpcy5jb2xvci5ob3Jpem9udGFsKSxcbiAgICAgICAgdGhpcy5ib3JkZXJcbiAgICApO1xuXG4gICAgLy8gbGVmdCBzaWRlXG4gICAgc2lkZVggPSBuZXcgU2lkZVgoXG4gICAgICAgIG5ldyBTaWRlWERpbWVuc2lvbih0aGlzLmRpbWVuc2lvbi54QXhpcywgdGhpcy5kaW1lbnNpb24uekF4aXMpLFxuICAgICAgICBuZXcgU2lkZUNvbG9yKHRoaXMuY29sb3IuYm9yZGVyLCB0aGlzLmNvbG9yLmxlZnQpLFxuICAgICAgICB0aGlzLmJvcmRlclxuICAgICk7XG5cbiAgICAvLyByaWdodCBzaWRlXG4gICAgc2lkZVkgPSBuZXcgU2lkZVkoXG4gICAgICAgIG5ldyBTaWRlWURpbWVuc2lvbih0aGlzLmRpbWVuc2lvbi55QXhpcywgdGhpcy5kaW1lbnNpb24uekF4aXMpLFxuICAgICAgICBuZXcgU2lkZUNvbG9yKHRoaXMuY29sb3IuYm9yZGVyLCB0aGlzLmNvbG9yLnJpZ2h0KSxcbiAgICAgICAgdGhpcy5ib3JkZXJcbiAgICApO1xuXG4gICAgcG9CcmljayA9IG5ldyBQaXhlbE9iamVjdChicmljayk7XG4gICAgcG9YID0gbmV3IFBpeGVsT2JqZWN0KHNpZGVYKTtcbiAgICBwb1kgPSBuZXcgUGl4ZWxPYmplY3Qoc2lkZVkpO1xuXG4gICAgY3R4ID0gdGhpcy5iaXRtYXBEYXRhLmNvbnRleHQ7XG4gICAgY3R4LmRyYXdJbWFnZShwb0JyaWNrLmNhbnZhcywgcG9Ccmljay54ICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyLCBwb0JyaWNrLnkpO1xuICAgIGN0eC5kcmF3SW1hZ2UocG9YLmNhbnZhcywgcG9YLngsIHBvWC55ICsgdGhpcy5kaW1lbnNpb24uekF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgLSAxKTtcbiAgICBjdHguZHJhd0ltYWdlKHBvWS5jYW52YXMsIHBvWS54ICsgdGhpcy53IC0gMiwgcG9YLnkgKyB0aGlzLmRpbWVuc2lvbi56QXhpcyArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiAtIDEpO1xuXG4gICAgLy8gaGlnaGxpZ2h0ICYgaGlnaGxpZ2h0IGZpeFxuICAgIGJtZCA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oKTtcblxuICAgIGlmICh0aGlzLmJvcmRlcikge1xuICAgICAgICBvZmZzZXRYID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyO1xuICAgICAgICBvZmZzZXRZID0gKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXMpIC8gMiAtIDI7XG5cbiAgICAgICAgLy90aGUgMnB4IGluIGJvdW5kaW5nIHdpdGhvdXQgaGlnaHRsaWdodFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJtZC5zZXRQaXhlbChvZmZzZXRYICsgMSAtIGksIG9mZnNldFkgLSBNYXRoLmZsb29yKGkgLyAyKSwgdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90aGUgMnB4IGluIGJvdW5kaW5nIHdpdGhvdXQgaGlnaHRsaWdodFxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGJtZC5zZXRQaXhlbChvZmZzZXRYICsgaiwgb2Zmc2V0WSAtIE1hdGguZmxvb3IoaiAvIDIpLCB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgdGhpcy5kaW1lbnNpb24uekF4aXM7IGsgKz0gMSkge1xuICAgICAgICAgICAgYm1kLnNldFBpeGVsKG9mZnNldFgsIG9mZnNldFkgKyBrLCB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24uekF4aXM7IGkgKz0gMSkge1xuICAgICAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXMpIC8gMiAtIDEgKyBpLCB0aGlzLmNvbG9yLmxlZnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJtZC5jb250ZXh0LnB1dEltYWdlRGF0YShibWQuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICBjdHguZHJhd0ltYWdlKGJtZC5jYW52YXMsIDAsIDApO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbQ3ViZV0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFB5cmFtaWREaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1B5cmFtaWREaW1lbnNpb24nKTtcbnZhciBQeXJhbWlkQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvUHlyYW1pZENvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBQeXJhbWlkLCBwO1xuUHlyYW1pZCA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gUHlyYW1pZC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzXG5wLmhTaXplID0gbnVsbDtcbnAuaE9mZnNldCA9IG51bGw7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgUHlyYW1pZERpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFB5cmFtaWRDb2xvcigpIDogY29sb3I7XG5cbiAgICB0aGlzLmhTaXplID0gdGhpcy5kaW1lbnNpb24udGFsbCA/IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMiA6IHRoaXMuZGltZW5zaW9uLnhBeGlzO1xuICAgIHRoaXMuaE9mZnNldCA9IHRoaXMuZGltZW5zaW9uLnRhbGwgPyAtMyA6IC0yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5oU2l6ZSArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMjtcblxuICAgIC8vIDIyLjYgZGVncmVlcyBpbXBsZW1lbnRhdGlvblxuICAgIHRoaXMudyAtPSAyO1xuICAgIHRoaXMuaCArPSB0aGlzLmhPZmZzZXQ7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC10aGlzLmRpbWVuc2lvbi54QXhpcyArIDI7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtdGhpcy5oU2l6ZSAvIDIgKyAyIC0gKHRoaXMuZGltZW5zaW9uLnRhbGwgPyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgOiAxKTtcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvckJvcmRlckxlZnQsIGNvbG9yQm9yZGVyUmlnaHQsIGNvbG9yQm9yZGVySGlnaGxpZ2h0LFxuICAgICAgICBpLCBqLCBrLCBsMSwgbTEsIGwyLCBtMjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnQ7XG4gICAgY29sb3JCb3JkZXJSaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0O1xuXG4gICAgY29sb3JCb3JkZXJIaWdobGlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVySGlnaGxpZ2h0IDogY29sb3JCb3JkZXJMZWZ0O1xuXG4gICAgLy96IGF4aXMgfHwgaGlnaHRsaWdodFxuICAgIGZvciAoayA9IDA7IGsgPCB0aGlzLmhTaXplICsgdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyIC0gNDsgayArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIGsgKyAzICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlckhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgLy94IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueEF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaSwgdGhpcy5oU2l6ZSArIE1hdGguZmxvb3IoaSAvIDIpICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8veSBheGlzXG4gICAgZm9yIChqID0gMDsgaiA8IHRoaXMuZGltZW5zaW9uLnhBeGlzOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGogKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIHRoaXMuaFNpemUgKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgLSBNYXRoLmZsb29yKGogLyAyKSAtIDEgKyB0aGlzLmhPZmZzZXQsIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaW1lbnNpb24udGFsbCkge1xuICAgICAgICAvL2xlZnQgZWRnZVxuICAgICAgICBmb3IgKGwxID0gMDsgbDEgPCB0aGlzLmhTaXplOyBsMSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwobDEsIHRoaXMuaFNpemUgLSBsMSArIHRoaXMuaE9mZnNldCwgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcmlnaHQgZWRnZVxuICAgICAgICBmb3IgKG0xID0gMDsgbTEgPCB0aGlzLmhTaXplOyBtMSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwobTEgKyB0aGlzLmhTaXplIC0gMiwgbTEgKyAxICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vbGVmdCBlZGdlXG4gICAgICAgIGZvciAobDIgPSAwOyBsMiA8IHRoaXMuaFNpemUgLSAyOyBsMiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoTWF0aC5mbG9vcihsMiAvIDIpLCB0aGlzLmhTaXplIC0gbDIgKyB0aGlzLmhPZmZzZXQsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3JpZ2h0IGVkZ2VcbiAgICAgICAgZm9yIChtMiA9IDI7IG0yIDwgdGhpcy5oU2l6ZTsgbTIgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKE1hdGguZmxvb3IobTIgLyAyKSArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgbTIgKyAxICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5ib3JkZXIpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgdGhpcy5oU2l6ZSArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiAtIDEgKyB0aGlzLmhPZmZzZXQsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgfVxuXG4gICAgLy9mbG9vZGZpbGxcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSwgdGhpcy5oU2l6ZSArIE1hdGguZmxvb3IoKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSkgLyAyKSArIHRoaXMuaE9mZnNldCAtIDEsIHRoaXMuY29sb3IucmlnaHQpO1xuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAzLCB0aGlzLmhTaXplICsgTWF0aC5mbG9vcigodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxKSAvIDIpICsgdGhpcy5oT2Zmc2V0IC0gMiwgdGhpcy5jb2xvci5sZWZ0KTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1B5cmFtaWRdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHlyYW1pZDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTaWRlWERpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2lkZVhEaW1lbnNpb24nKTtcbnZhciBTaWRlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvU2lkZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBTaWRlWCwgcDtcblNpZGVYID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTaWRlWC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTaWRlWERpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNpZGVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gdGhpcy5kaW1lbnNpb24ueEF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24uekF4aXMgKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IDA7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtdGhpcy5kaW1lbnNpb24uekF4aXM7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeE9mZnNldElubmVyLCB5T2Zmc2V0SW5uZXIsIHhPZmZzZXRPdXQsIHlPZmZzZXRPdXQsIGksIGosIGJvcmRlckNvbG9yO1xuXG4gICAgeE9mZnNldElubmVyID0gMDtcbiAgICB5T2Zmc2V0SW5uZXIgPSB0aGlzLmRpbWVuc2lvbi56QXhpcztcbiAgICB4T2Zmc2V0T3V0ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxO1xuICAgIHlPZmZzZXRPdXQgPSB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi56QXhpcyAtIDE7XG4gICAgYm9yZGVyQ29sb3IgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5pbm5lcjtcblxuICAgIC8veCBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRJbm5lciArIGksIHlPZmZzZXRJbm5lciArIE1hdGguZmxvb3IoaSAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0T3V0IC0gaSwgeU9mZnNldE91dCAtIE1hdGguZmxvb3IoaSAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgLy96IGF4aXNcbiAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24uekF4aXM7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldElubmVyLCB5T2Zmc2V0SW5uZXIgLSBqLCBib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0T3V0LCB5T2Zmc2V0T3V0ICsgaiwgYm9yZGVyQ29sb3IpO1xuICAgIH1cblxuICAgIC8vZmlsbCBhbiBwaXhlbCBncmFwaGljIGVuY2xvc2VkXG4gICAgdGhpcy5iaXRtYXBEYXRhLmZsb29kRmlsbChNYXRoLmZsb29yKHRoaXMudyAvIDIpLCBNYXRoLmZsb29yKHRoaXMuaCAvIDIpLCB0aGlzLmNvbG9yLmlubmVyKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1NpZGVYXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVYO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFNpZGVZRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9TaWRlWURpbWVuc2lvbicpO1xudmFyIFNpZGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TaWRlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcblxudmFyIFNpZGVZLCBwO1xuU2lkZVkgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IFNpZGVZLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IFNpZGVZRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgU2lkZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi55QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi56QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMjtcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLXRoaXMuZGltZW5zaW9uLnlBeGlzICsgMjtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC10aGlzLmRpbWVuc2lvbi56QXhpcztcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciwgeE9mZnNldE91dCwgeU9mZnNldE91dCwgaSwgaiwgYm9yZGVyQ29sb3I7XG5cbiAgICB4T2Zmc2V0SW5uZXIgPSAwO1xuICAgIHlPZmZzZXRJbm5lciA9IHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnpBeGlzIC0gMTtcbiAgICB4T2Zmc2V0T3V0ID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLSAxO1xuICAgIHlPZmZzZXRPdXQgPSB0aGlzLmRpbWVuc2lvbi56QXhpcztcbiAgICBib3JkZXJDb2xvciA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmlubmVyO1xuXG4gICAgLy95IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldElubmVyICsgaSwgeU9mZnNldElubmVyIC0gTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQgLSBpLCB5T2Zmc2V0T3V0ICsgTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICB9XG5cbiAgICAvL3ogYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi56QXhpczsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciArIGosIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQsIHlPZmZzZXRPdXQgLSBqLCBib3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgLy9maWxsIGFuIHBpeGVsIGdyYXBoaWMgZW5jbG9zZWRcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKE1hdGguZmxvb3IodGhpcy53IC8gMiksIE1hdGguZmxvb3IodGhpcy5oIC8gMiksIHRoaXMuY29sb3IuaW5uZXIpO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2lkZVldJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVk7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1Nsb3BlRGltZW5zaW9uJyk7XG52YXIgU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBTbG9wZUVhc3QsIHA7XG5TbG9wZUVhc3QgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IFNsb3BlRWFzdC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgKiAyICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyO1xuXG4gICAgLy8gMjIuNiBkZWdyZWVzIGltcGxlbWVudGF0aW9uXG4gICAgdGhpcy53IC09IDI7XG4gICAgdGhpcy5oIC09IDM7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC0odGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyKTtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC0odGhpcy5kaW1lbnNpb24ueEF4aXMgKiAzIC8gMiAtIDIpO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhLmNvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuYml0bWFwRGF0YS5pbWFnZURhdGEsIDAsIDApO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5iaXRtYXBEYXRhLmNhbnZhcztcbn07XG5cbnAuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yQm9yZGVyTGVmdCwgY29sb3JCb3JkZXJSaWdodCxcbiAgICAgICAgaSwgaiwgaywgbSwgbjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnQ7XG4gICAgY29sb3JCb3JkZXJSaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0U2xvcGU7XG5cbiAgICAvLyB5IGF4aXNcbiAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaiwgdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyIC0gTWF0aC5mbG9vcihqIC8gMikgLSAxLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGogKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIHRoaXMuaCAtIE1hdGguZmxvb3IoaiAvIDIpIC0gMSwgY29sb3JCb3JkZXJSaWdodCk7XG4gICAgfVxuXG4gICAgLy8geCBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGksIHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiArIE1hdGguZmxvb3IoaSAvIDIpLCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8vIHogYXhpc1xuICAgIGZvciAoayA9IHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMiAtIDE7IGsgPCB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7IGsgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMCwgaywgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvLyBzbG90XG4gICAgZm9yIChtID0gMDsgbSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMiAtIDI7IG0gKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAxICsgTWF0aC5mbG9vcihtIC8gMiksIG0sIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMSArIE1hdGguZmxvb3IobSAvIDIpLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgKyBtIC0gMSwgY29sb3JCb3JkZXJSaWdodCk7XG4gICAgfVxuXG4gICAgLy8gZmxvb2QgZmlsbFxuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyLCAxLCB0aGlzLmNvbG9yLnJpZ2h0U2xvcGUpO1xuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAzLCB0aGlzLmggLSAzLCB0aGlzLmNvbG9yLmxlZnQpO1xuICAgIC8vIGhhY2sgc2luZ2xlIHBpeGVsXG4gICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgdGhpcy5oIC0gMiwgdGhpcy5jb2xvci5sZWZ0KTtcblxuICAgIC8vIGhpZ2hsaWdodFxuICAgIGlmICh0aGlzLmJvcmRlcikge1xuICAgICAgICBmb3IgKG4gPSAxOyBuIDwgdGhpcy5kaW1lbnNpb24ueEF4aXMgKiAyIC0gMzsgbiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMSArIE1hdGguZmxvb3IobiAvIDIpLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgKyBuIC0gMSwgdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2xvcGVFYXN0XSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsb3BlRWFzdDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTbG9wZURpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24nKTtcbnZhciBTbG9wZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1Nsb3BlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcbnZhciBTaWRlWCA9IHJlcXVpcmUoJy4vU2lkZVgnKTtcbnZhciBTaWRlWERpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2lkZVhEaW1lbnNpb24nKTtcbnZhciBTaWRlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvU2lkZUNvbG9yJyk7XG52YXIgUGl4ZWxPYmplY3QgPSByZXF1aXJlKCcuLi9kaXNwbGF5L1BpeGVsT2JqZWN0Jyk7XG5cbnZhciBTbG9wZU5vcnRoLCBwO1xuU2xvcGVOb3J0aCA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gU2xvcGVOb3J0aC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAzIC8gMiArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMjtcblxuICAgIC8vIDIyLjYgZGVncmVlcyBpbXBsZW1lbnRhdGlvblxuICAgIHRoaXMudyAtPSAyO1xuICAgIHRoaXMuaCAtPSAzO1xuXG4gICAgLy8gdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgdGhpcy5tYXRyaXgudHggPSAtKHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMik7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtKHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMik7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvckJvcmRlckxlZnQsIGNvbG9yQm9yZGVyUmlnaHQsIGNvbG9yQm9yZGVySGlnaGxpZ2h0LFxuICAgICAgICBzaWRlWCwgcG9YLCBjdHgsIGJtZCxcbiAgICAgICAgaSwgaiwgbjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnQ7XG4gICAgY29sb3JCb3JkZXJSaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0O1xuICAgIGNvbG9yQm9yZGVySGlnaGxpZ2h0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCA6IHRoaXMuY29sb3IubGVmdDtcblxuICAgIHNpZGVYID0gbmV3IFNpZGVYKFxuICAgICAgICBuZXcgU2lkZVhEaW1lbnNpb24odGhpcy5kaW1lbnNpb24ueEF4aXMsIHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiksXG4gICAgICAgIG5ldyBTaWRlQ29sb3IoY29sb3JCb3JkZXJMZWZ0LCB0aGlzLmNvbG9yLmxlZnQpXG4gICAgKTtcblxuICAgIHBvWCA9IG5ldyBQaXhlbE9iamVjdChzaWRlWCk7XG5cbiAgICBjdHggPSB0aGlzLmJpdG1hcERhdGEuY29udGV4dDtcbiAgICBjdHguZHJhd0ltYWdlKHBvWC5jYW52YXMsIHBvWC54LCBwb1gueSArIHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMik7XG5cbiAgICBibWQgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAvLyBjbG9zZSB0aGUgcGF0aCBmb3IgZmxvb2RmaWxsXG4gICAgZm9yIChpID0gdGhpcy5oIC0gdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAzIC8gMiArIDI7IGkgPCB0aGlzLmg7IGkgKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxLCBpLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyB5IGF4aXNcbiAgICBmb3IgKGogPSAxOyBqIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGogKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgKyBqIC0gMiwgdGhpcy5oIC0gTWF0aC5mbG9vcihqIC8gMikgLSAxLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgaiAtIDIsIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiAtIDIgKyBqLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBmbG9vZCBmaWxsXG4gICAgYm1kLmZsb29kRmlsbCh0aGlzLmRpbWVuc2lvbi54QXhpcyArIDEsIHRoaXMuaCAtIDMsIHRoaXMuY29sb3IucmlnaHQpO1xuXG4gICAgLy9oaWdobGlnaHRcbiAgICBmb3IgKG4gPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7IG4gPCB0aGlzLmggLSAxOyBuICs9IDEpIHtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSwgbiwgdGhpcy5jb2xvci5yaWdodCk7XG4gICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIG4sIGNvbG9yQm9yZGVySGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBibWQuY29udGV4dC5wdXRJbWFnZURhdGEoYm1kLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZShibWQuY2FudmFzLCAwLCAwKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1Nsb3BlTm9ydGhdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2xvcGVOb3J0aDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTbG9wZURpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24nKTtcbnZhciBTbG9wZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1Nsb3BlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcblxudmFyIFNsb3BlU291dGgsIHA7XG5TbG9wZVNvdXRoID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTbG9wZVNvdXRoLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgU2xvcGVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggLT0gMztcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLSh0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDIpO1xuICAgIHRoaXMubWF0cml4LnR5ID0gLSh0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDMgLyAyIC0gMik7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3JCb3JkZXJMZWZ0LCBjb2xvckJvcmRlclJpZ2h0LFxuICAgICAgICBpLCBqLCBrLCBtLCBuO1xuXG4gICAgY29sb3JCb3JkZXJMZWZ0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IubGVmdFNsb3BlO1xuICAgIGNvbG9yQm9yZGVyUmlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5yaWdodDtcblxuICAgIC8vIHggYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi54QXhpczsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChqLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDIgKyBNYXRoLmZsb29yKGogLyAyKSAtIDMsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChqICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyLCBNYXRoLmZsb29yKGogLyAyKSwgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvLyB5IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyICsgaSwgdGhpcy5oIC0gTWF0aC5mbG9vcihpIC8gMikgLSAxLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyB6IGF4aXNcbiAgICBmb3IgKGsgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgLSAxOyBrIDwgdGhpcy5oIC0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyOyBrICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMudyAtIDEsIGssIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgIH1cblxuICAgIC8vIHNsb3RcbiAgICBmb3IgKG0gPSAwOyBtIDwgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyIC0gMjsgbSArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChNYXRoLmZsb29yKG0gLyAyKSwgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyIC0gbSAtIDMsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIgKyBNYXRoLmZsb29yKG0gLyAyKSwgdGhpcy5oIC0gbSAtIDEsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgfVxuXG4gICAgLy8gZmxvb2QgZmlsbFxuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAxLCAxLCB0aGlzLmNvbG9yLmxlZnRTbG9wZSk7XG4gICAgdGhpcy5iaXRtYXBEYXRhLmZsb29kRmlsbCh0aGlzLmRpbWVuc2lvbi54QXhpcywgdGhpcy5oIC0gMywgdGhpcy5jb2xvci5yaWdodCk7XG4gICAgLy8gaGFjayBzaW5nbGUgcGl4ZWxcbiAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxLCB0aGlzLmggLSAyLCB0aGlzLmNvbG9yLnJpZ2h0KTtcblxuICAgIC8vIGhpZ2hsaWdodFxuICAgIGlmICh0aGlzLmJvcmRlcikge1xuICAgICAgICBmb3IgKG4gPSAxOyBuIDwgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyIC0gMzsgbiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyICsgTWF0aC5mbG9vcihuIC8gMiksIHRoaXMuaCAtIG4gLSAxLCB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tTbG9wZVNvdXRoXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsb3BlU291dGg7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1Nsb3BlRGltZW5zaW9uJyk7XG52YXIgU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG52YXIgU2lkZVkgPSByZXF1aXJlKCcuL1NpZGVZJyk7XG52YXIgU2lkZVlEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1NpZGVZRGltZW5zaW9uJyk7XG52YXIgU2lkZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1NpZGVDb2xvcicpO1xudmFyIFBpeGVsT2JqZWN0ID0gcmVxdWlyZSgnLi4vZGlzcGxheS9QaXhlbE9iamVjdCcpO1xuXG52YXIgU2xvcGVXZXN0LCBwO1xuU2xvcGVXZXN0ID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTbG9wZVdlc3QucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgU2xvcGVEaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzO1xuICAgIHRoaXMuaCA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMyAvIDIgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggLT0gMztcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLSh0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDIpO1xuICAgIHRoaXMubWF0cml4LnR5ID0gLSh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIpO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3JCb3JkZXJMZWZ0LCBjb2xvckJvcmRlclJpZ2h0LCBjb2xvckJvcmRlckhpZ2hsaWdodCxcbiAgICAgICAgc2lkZVksIHBvWSwgY3R4LCBibWQsXG4gICAgICAgIGksIGosIG47XG5cbiAgICBjb2xvckJvcmRlckxlZnQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5sZWZ0O1xuICAgIGNvbG9yQm9yZGVyUmlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5yaWdodDtcbiAgICBjb2xvckJvcmRlckhpZ2hsaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQgOiB0aGlzLmNvbG9yLmxlZnQ7XG5cbiAgICBzaWRlWSA9IG5ldyBTaWRlWShcbiAgICAgICAgbmV3IFNpZGVZRGltZW5zaW9uKHRoaXMuZGltZW5zaW9uLnlBeGlzLCB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIpLFxuICAgICAgICBuZXcgU2lkZUNvbG9yKGNvbG9yQm9yZGVyUmlnaHQsIHRoaXMuY29sb3IucmlnaHQpXG4gICAgKTtcblxuICAgIHBvWSA9IG5ldyBQaXhlbE9iamVjdChzaWRlWSk7XG5cbiAgICBjdHggPSB0aGlzLmJpdG1hcERhdGEuY29udGV4dDtcbiAgICBjdHguZHJhd0ltYWdlKHBvWS5jYW52YXMsIHBvWS54ICsgdGhpcy53IC0gMiwgcG9ZLnkgKyB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIpO1xuXG4gICAgYm1kID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgpO1xuXG4gICAgLy8gY2xvc2UgdGhlIHBhdGggZm9yIGZsb29kZmlsbFxuICAgIGZvciAoaSA9IHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzICogMyAvIDIgKyAyOyBpIDwgdGhpcy5oOyBpICs9IDEpIHtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgaSwgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvL3ggYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDE7IGogKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwoaiwgdGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgLSAzICsgTWF0aC5mbG9vcihqIC8gMiksIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIGJtZC5zZXRQaXhlbChqLCB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMiAtIDMgLSBqLCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8vIGZsb29kIGZpbGxcbiAgICBibWQuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMywgdGhpcy5oIC0gMywgdGhpcy5jb2xvci5sZWZ0KTtcblxuICAgIC8vaGlnaGxpZ2h0XG4gICAgZm9yIChuID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyOyBuIDwgdGhpcy5oIC0gMTsgbiArPSAxKSB7XG4gICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIG4sIGNvbG9yQm9yZGVySGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBibWQuY29udGV4dC5wdXRJbWFnZURhdGEoYm1kLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZShibWQuY2FudmFzLCAwLCAwKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1Nsb3BlV2VzdF0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbG9wZVdlc3Q7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbi8qZ2xvYmFsIGRvY3VtZW50OnRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDYW52YXNNYW5hZ2VyLCBwO1xuQ2FudmFzTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnZhc01hbmFnZXIgaXMgYSBzdGF0aWMgQ2xhc3MsIGNhbm5vdCBiZSBpbnN0YW5jZWQuJyk7XG59O1xucCA9IENhbnZhc01hbmFnZXI7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLmRlZmF1bHRDYW52YXMgPSBudWxsO1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXREZWZhdWx0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHAuZGVmYXVsdENhbnZhcyA9IHAuZGVmYXVsdENhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByZXR1cm4gcC5kZWZhdWx0Q2FudmFzO1xufTtcblxucC5nZXROZXdDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tDYW52YXNNYW5hZ2VyXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc01hbmFnZXI7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FudmFzVG9vbCwgcDtcblxuQ2FudmFzVG9vbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnZhc1Rvb2wgaXMgYSBzdGF0aWMgQ2xhc3MsIGNhbm5vdCBiZSBpbnN0YW5jZWQuJyk7XG59O1xucCA9IENhbnZhc1Rvb2w7XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldFBpeGVsID0gZnVuY3Rpb24gKGltYWdlRGF0YSwgeCwgeSkge1xuICAgIHZhciBkYXRhLCBpbmRleCwgciwgZywgYjtcblxuICAgIGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcbiAgICBpbmRleCA9ICh5ICogaW1hZ2VEYXRhLndpZHRoICsgeCkgKiA0O1xuICAgIHIgPSBkYXRhW2luZGV4XTtcbiAgICBnID0gZGF0YVtpbmRleCArIDFdO1xuICAgIGIgPSBkYXRhW2luZGV4ICsgMl07XG5cbiAgICByZXR1cm4gKChyIDw8IDE2KSB8IChnIDw8IDgpIHwgYik7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0NhbnZhc1Rvb2xdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzVG9vbDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDb2xvckdlb20sIHA7XG5cbkNvbG9yR2VvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG9yR2VvbSBpcyBhIHN0YXRpYyBDbGFzcywgY2Fubm90IGJlIGluc3RhbmNlZC4nKTtcbn07XG5wID0gQ29sb3JHZW9tO1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXQzMiA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiBjb2xvciA8IDB4RkYwMDAwMDAgPyAoY29sb3IgKyAweEZGMDAwMDAwKSA6IGNvbG9yO1xufTtcblxucC5hcHBseUJyaWdodG5lc3MgPSBmdW5jdGlvbiAoY29sb3IsIGJyaWdodG5lc3MsIGhpZ2hsaWdodCkge1xuICAgIHZhciBhLCByLCBnLCBiLCB5LCB2LCB1O1xuXG4gICAgYSA9ICgoY29sb3IgPj4+IDI0KSAmIDB4MDAwMDAwRkYpO1xuICAgIHIgPSAoKGNvbG9yID4+PiAxNikgJiAweDAwMDAwMEZGKTtcbiAgICBnID0gKChjb2xvciA+Pj4gOCkgJiAweDAwMDAwMEZGKTtcbiAgICBiID0gKGNvbG9yICYgMHgwMDAwMDBGRik7XG5cbiAgICB5ID0gKChyICogMzEzNTI0KSA+PiAyMCkgKyAoKGcgKiA2MTU1MTQpID4+IDIwKSArICgoYiAqIDExOTUzOCkgPj4gMjApO1xuICAgIHUgPSAtKCgxNTUxODkgKiByKSA+PiAyMCkgLSAoKDMwMzAzOCAqIGcpID4+IDIwKSArICgoNDU4MjI3ICogYikgPj4gMjApO1xuICAgIHYgPSAoKDY0NDg3NCAqIHIpID4+IDIwKSAtICgoNTQwMDE2ICogZykgPj4gMjApIC0gKCgxMDQ4NTcgKiBiKSA+PiAyMCk7XG5cbiAgICBpZiAoIWhpZ2hsaWdodCkge1xuICAgICAgICB5ICs9IGJyaWdodG5lc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeSA9IDYwICsgTWF0aC5wb3coeSwgMS4yKTtcbiAgICB9XG5cbiAgICByID0geSArICgoMTE5NTM3NiAqIHYpID4+IDIwKTtcbiAgICBnID0geSAtICgoNDA4OTQ0ICogdSkgPj4gMjApIC0gKCg2MDgxNzQgKiB2KSA+PiAyMCk7XG4gICAgYiA9IHkgKyAoKDIxMjg2MDkgKiB1KSA+PiAyMCk7XG5cbiAgICByID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ociwgMjU1KSk7XG4gICAgZyA9IE1hdGgubWF4KDAsIE1hdGgubWluKGcsIDI1NSkpO1xuICAgIGIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihiLCAyNTUpKTtcblxuICAgIHJldHVybiAoYSA8PCAyNCkgfCAociA8PCAxNikgfCAoZyA8PCA4KSB8IGI7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0NvbG9yR2VvbV0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvckdlb207XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29sb3JQYXR0ZXJuLCBwO1xuXG5Db2xvclBhdHRlcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb2xvclBhdHRlcm4gaXMgYSBzdGF0aWMgQ2xhc3MsIGNhbm5vdCBiZSBpbnN0YW5jZWQuJyk7XG59O1xucCA9IENvbG9yUGF0dGVybjtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuR1JBU1NfR1JFRU4gPSAweENDRkYwMDtcbnAuWUVMTE9XID0gMHhGRkZGMDA7XG5wLldJTkVfUkVEID0gMHhGRjAwOTk7XG5wLlBJTksgPSAweEZGN0NCRjtcbnAuUFVSUExFID0gMHhDQzAwRkY7XG5wLkJMVUUgPSAweDAwQ0NGRjtcbnAuR1JBWSA9IDB4RUVFRUVFO1xucC5CTEFDSyA9IDB4NjY2NjY2O1xucC5GSU5FX0NPTE9SUyA9XG4gICAgW1xuICAgICAgICBwLkdSQVNTX0dSRUVOLFxuICAgICAgICBwLllFTExPVyxcbiAgICAgICAgcC5XSU5FX1JFRCxcbiAgICAgICAgcC5QSU5LLFxuICAgICAgICBwLlBVUlBMRSxcbiAgICAgICAgcC5CTFVFLFxuICAgICAgICBwLkdSQVksXG4gICAgICAgIHAuQkxBQ0tcbiAgICBdO1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXRSYW5kb21Db21mb3J0YWJsZUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwLkZJTkVfQ09MT1JTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHAuRklORV9DT0xPUlMubGVuZ3RoKV07XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0NvbG9yUGF0dGVybl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvclBhdHRlcm47XG4iXX0=
