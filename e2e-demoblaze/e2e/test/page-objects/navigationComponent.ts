class NavigationComponent {
    //Selecotores   
    get linkHome() {
        return $("a[href='index.html']")
    }
    get linkCart() {
        return $("#cartur")
    }
    //Acciones
   
    public async clickLinkHome(): Promise<void> {
        await this.linkHome.waitForClickable({ timeout: 5000 });
        await this.linkHome.click();       
    }
    public async clickBtnCart(): Promise<void> {
        await this.linkCart.waitForClickable({ timeout: 5000 });
        await this.linkCart.click();        
    }
       
}
export default new NavigationComponent();