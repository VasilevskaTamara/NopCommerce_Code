import { CheckoutPage } from "../page-objects/checkoutPage";
import { LoginPage } from "../page-objects/loginPage";
import { MainPage } from "../page-objects/mainPage";
import { RegisterPage } from "../page-objects/registerPage";
import { ShoppingCartPage } from "../page-objects/shoppingCartPage";

class Pages {
    constructor(){
        this.mainPage = new MainPage(),
        this.registerPage = new RegisterPage(),
        this.loginPage = new LoginPage(),
        this.shoppingCartPage = new ShoppingCartPage(),
        this.checkoutPage = new CheckoutPage()
    }
}

export const pages = new Pages()