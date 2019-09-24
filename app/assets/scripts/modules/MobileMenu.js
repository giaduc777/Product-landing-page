import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".header__mobile-button");
    this.menuIconTop = $(".header__mobile-button__top");
    this.menuIconMiddle = $(".header__mobile-button__middle");
    this.menuIconBottom = $(".header__mobile-button__bottom");
    this.menuScreen = $(".mobile-screen");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    
    //this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIconTop.toggleClass("header__mobile-button__top--line");
    this.menuIconMiddle.toggleClass("header__mobile-button__middle--line");
    this.menuIconBottom.toggleClass("header__mobile-button__bottom--line");
    this.menuScreen.toggleClass("mobile-screen--is-visible");
  }
}

export default MobileMenu;