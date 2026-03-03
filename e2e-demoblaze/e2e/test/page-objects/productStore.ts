class ProductStore {

    //Selecotores
    get btnLaptops() { 
        return $("a[href='prod.html?idp_=1']") 
    }
    get btnSonyVaioI5() { 
        return $('=Sony vaio i5') 
    }


    //Acciones
    public async clickBtnLaptops(): Promise<void> {
        await this.btnLaptops.waitForClickable({ timeout: 5000 });
        await this.btnLaptops.click();
    }
    public async clickBtnSonyVaioI5(): Promise<void> {
        await this.btnSonyVaioI5.waitForClickable({ timeout: 5000 });
        await this.btnSonyVaioI5.click();
    }
   
}

export default new ProductStore();
