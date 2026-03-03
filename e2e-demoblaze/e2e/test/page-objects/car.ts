class Car {

    //Selecotores
    get btnPleaceOrder() { 
        return $("=Place Order") 
    }
    get btnSonyVaioI5() { 
        return $('=Sony vaio i5') 
    }


    //Acciones
    public async clickBtnPlaceOrder(): Promise<void> {
        await this.btnPleaceOrder.waitForClickable({ timeout: 5000 });
        await this.btnPleaceOrder.click();
    }
   
}

export default new Car();
