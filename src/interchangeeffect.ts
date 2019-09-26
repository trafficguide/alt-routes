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

class XEffect_Ceiling extends InterchangeEffect
{
    /**
     * Constructs a Fare Ceiling interchange effect.
     * @param fareBound The ceiling of combined fares of 1st and 2nd lines.
     */
    constructor(fareBound: number)
    {
        super("兩程共收 $" + fareBound);
    }
}