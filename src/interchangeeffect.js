var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var InterchangeEffect = /** @class */ (function () {
    function InterchangeEffect(fxReadout) {
        this.effectReadout = fxReadout;
    }
    InterchangeEffect.prototype.getReadoutString = function () {
        return this.effectReadout;
    };
    return InterchangeEffect;
}());
var XEffect_Free = /** @class */ (function (_super) {
    __extends(XEffect_Free, _super);
    /**
     * Constructs a Free Fare interchange effect.
     *
     * Obviously, no parameters are required.
     */
    function XEffect_Free() {
        return _super.call(this, "第二程免費") || this;
    }
    return XEffect_Free;
}(InterchangeEffect));
var XEffect_Fixed = /** @class */ (function (_super) {
    __extends(XEffect_Fixed, _super);
    /**
     * Constructs a Fixed Payment interchange effect.
     * @param fixedPayment The amount of payment required
     */
    function XEffect_Fixed(fixedPayment) {
        return _super.call(this, "轉乘時追加 $" + fixedPayment) || this;
    }
    return XEffect_Fixed;
}(InterchangeEffect));
var XEffect_Reduction = /** @class */ (function (_super) {
    __extends(XEffect_Reduction, _super);
    /**
     * Constructs a Fare Reduction interchange effect.
     * @param fareReduction Amount of fare of the 2nd line reduced.
     */
    function XEffect_Reduction(fareReduction) {
        return _super.call(this, "第二程減收 $" + fareReduction) || this;
    }
    return XEffect_Reduction;
}(InterchangeEffect));
var XEffect_Refund = /** @class */ (function (_super) {
    __extends(XEffect_Refund, _super);
    /**
     * Constructs a Fare Refund interchange effect.
     * This effect is rare by the way.
     * @param fareRefund Amount of fare to be refunded
     */
    function XEffect_Refund(fareRefund) {
        return _super.call(this, "即時回贈 $" + fareRefund) || this;
    }
    return XEffect_Refund;
}(InterchangeEffect));
var XEffect_Ceiling = /** @class */ (function (_super) {
    __extends(XEffect_Ceiling, _super);
    /**
     * Constructs a Fare Ceiling interchange effect.
     * @param fareBound The ceiling of combined fares of 1st and 2nd lines.
     */
    function XEffect_Ceiling(fareBound) {
        return _super.call(this, "兩程共收 $" + fareBound + " (或第二程免費)") || this;
    }
    return XEffect_Ceiling;
}(InterchangeEffect));
