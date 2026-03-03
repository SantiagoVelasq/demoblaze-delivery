class ProductDescription {
    //Selecotores
    get btnAddToCart() { 
        return $("=Add to cart") 
    }    
    get btnCart() {
        return $("#cartur")
    }
    //Acciones
    public async clickBtnAddToCart(): Promise<void> {
        await this.btnAddToCart.waitForClickable({ timeout: 5000 });
        await this.btnAddToCart.click();
       
    }   
    public async clickBtnCart(): Promise<void> {
        await this.btnCart.waitForClickable({ timeout: 5000 });
        await this.btnCart.click();
        
    }
       
}
export default new ProductDescription();