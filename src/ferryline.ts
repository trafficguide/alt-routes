class FerryLine extends Line
{
    travelCost_FerryOverride: number = -1;
    company: string = "";

    markFerryTravelCost(travelCost: number): FerryLine
    {
        this.travelCost_FerryOverride = travelCost;
        return this;
    }

    markCompany(companycode: string): FerryLine
    {
        this.company = companycode;
        return this;
    }

    calculateConnectionCost(): number
    {
        return this.travelCost_FerryOverride;
    }

    calculateURL(): string
    {
        if (this.company == "starferry")
        {
            return "http://www.starferry.com.hk/tc/service";
        }
        else
        {
            return "";
        }
    }
}