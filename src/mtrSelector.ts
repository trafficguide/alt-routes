class MTRSelector
{
    lineDropdown: HTMLSelectElement | null;
    stationDropdown: HTMLSelectElement | null;

    constructor(lineDrop: HTMLSelectElement | null, stationDrop: HTMLSelectElement | null)
    {
        this.lineDropdown = lineDrop;
        this.stationDropdown = stationDrop;
    }

    getSelectionID(): string
    {
        // Supposedly only 1 item is selectable.
        let lineID = this.lineDropdown.selectedOptions[0].value;
        let stationID = this.stationDropdown.selectedOptions[0].value;
        return lineID + "_" + stationID;
    }

    selectionIsValid(): boolean
    {
        return this.getSelectionID().search(/[0]/) != -1;
    }

    /**
     * Checks the value of the fromDropdown, and populate the toDropdown accordingly.
     */
    updateDropdown(): void
    {
        let resultingDropdown = "<option='0'>---</option>";
        switch (this.lineDropdown.nodeValue)
        {
            case "erl":
                resultingDropdown += "<option value='adm'>金鐘</option>";
                resultingDropdown += "<option value='exh'>會展</option>";
                resultingDropdown += "<option value='hh'>紅磡</option>";
                resultingDropdown += "<option value='mke'>旺角東</option>";
                resultingDropdown += "<option value='klt'>九龍塘</option>";
                resultingDropdown += "<option value='twa'>大圍</option>";
                resultingDropdown += "<option value='st'>沙田</option>";
                resultingDropdown += "<option value='ft'>火炭</option>";
                resultingDropdown += "<option value='cuhk'>大學</option>";
                resultingDropdown += "<option value='tpm'>大埔墟</option>";
                resultingDropdown += "<option value='two'>太和</option>";
                resultingDropdown += "<option value='fl'>粉嶺</option>";
                resultingDropdown += "<option value='ss'>上水</option>";
            break;
            case "tmle":
                resultingDropdown += "<option value='wks'>烏溪沙</option>";
                resultingDropdown += "<option value='mos'>馬鞍山</option>";
                resultingDropdown += "<option value='ho'>恆安</option>";
                resultingDropdown += "<option value='tsh'>大水坑</option>";
                resultingDropdown += "<option value='sm'>石門</option>";
                resultingDropdown += "<option value='cto'>第一城</option>";
                resultingDropdown += "<option value='stw'>沙田圍</option>";
                resultingDropdown += "<option value='ckt'>車公廟</option>";
                resultingDropdown += "<option value='twa'>大圍</option>";
                resultingDropdown += "<option value='hk'>顯徑</option>";
            break;
        }

        this.stationDropdown.innerHTML = resultingDropdown;
        return;
    }
}