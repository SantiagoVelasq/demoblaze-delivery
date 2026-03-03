import { faker } from '@faker-js/faker';
class PurchaseForm {
  get nameInput() {
    return $('#name');
  }
  get countryInput() {
    return $('#country');
  }
  get cityInput() {
    return $('#city');
  }
  get creditCardInput() {
    return $('#card');
  }

  get monthInput() {
    return $('#month');
  }

  get yearInput() {
    return $('#year');
  }

  get purchaseButton() {
    return $('button[onclick="purchaseOrder()"]');
  }
  get purchaseMessage() {
    return $('=Thank you for your purchase!');
  }
  //Acciones
  public async fillPurchaseForm() {
    await this.nameInput.setValue(faker.person.fullName());
    await this.countryInput.setValue(faker.location.country());
    await this.cityInput.setValue(faker.location.city());
    await this.creditCardInput.setValue(faker.finance.creditCardNumber());
    await this.monthInput.setValue((faker.date.future().getMonth() + 1).toString());
    await this.yearInput.setValue(faker.date.future().getFullYear().toString());

  }

  public async clickPurchaseButton() {
    await this.purchaseButton.waitForClickable({ timeout: 5000 });
    await this.purchaseButton.click();    
  }
  
}
export default new PurchaseForm();