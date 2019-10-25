class InterchangeEffect
{
    effectReadout: string;

    constructor(fxReadout: string)
    {
        this.effectReadout = fxReadout;
    }

    getReadoutString(): string
    {
        return this.effectReadout;
    }
}

class XEffect_Free extends InterchangeEffect
{
    /**
     * Constructs a Free Fare interchange effect.
     * 
     * Obviously, no parameters are required.
     */
    constructor()
    {
        super("第二程免費");
    }
}

class XEffect_Fixed extends InterchangeEffect
{
    /**
     * Constructs a Fixed Payment interchange effect.
     * @param fixedPayment The amount of payment required
     */
    constructor(fixedPayment: number)
    {
        super("轉乘時追加 $" + fixedPayment);
    }
}

class XEffect_Reduction extends InterchangeEffect
{
    /**
     * Constructs a Fare Reduction interchange effect.
     * @param fareReduction Amount of fare of the 2nd line reduced.
     */
    constructor(fareReduction: number)
    {
        super("第二程減收 $" + fareReduction);
    }
}

class XEffect_Refund extends InterchangeEffect
{
    /**
     * Constructs a Fare Refund interchange effect.
     * This effect is rare by the way.
     * @param fareRefund Amount of fare to be refunded
     */
    constructor(fareRefund: number)
    {
        super("即時回贈 $" + fareRefund);
    }
}

class XEffect_Ceiling extends InterchangeEffect
{
    /**
     * Constructs a Fare Ceiling interchange effect.
     * @param fareBound The ceiling of combined fares of 1st and 2nd lines.
     */
    constructor(fareBound: number)
    {
        super("兩程共收 $" + fareBound + " (或第二程免費)");
    }
}