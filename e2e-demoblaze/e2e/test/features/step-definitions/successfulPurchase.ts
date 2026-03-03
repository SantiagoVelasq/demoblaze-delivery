import { Given, When, Then } from '@cucumber/cucumber';
import Page from '../../page-objects/page';
import ProductStore from '../../page-objects/productStore';
import ProductDescription from '../../page-objects/productDescription';
import NavigationComponent from '../../page-objects/navigationComponent';
import car from '../../page-objects/car';
import purchaseForm from '../../page-objects/purchaseForm';


Given('que el usuario ingresa a la pagina de Demoblaze' , async function () {
    await Page.open();    
});

When('agrega dos producto al carrito', async function () {
    await ProductStore.clickBtnLaptops();
    await ProductDescription.clickBtnAddToCart();    
    await NavigationComponent.clickLinkHome();    
    await ProductStore.clickBtnSonyVaioI5();
    await ProductDescription.clickBtnAddToCart(); 
});
When('visualiza el carrito', async function () {
    await ProductDescription.clickBtnCart();    
});
When('realiza el pedido', async function () {
    await car.clickBtnPlaceOrder();    
})
When('completa el formulario de compra con datos validos', async function () {
    await purchaseForm.fillPurchaseForm();    
});
When('finaliza la compra', async function () {
    await purchaseForm.clickPurchaseButton();    
});
Then('se muestra un mensaje de confirmacion', async function () {
    await expect(purchaseForm.purchaseMessage).toBeExisting();
});



