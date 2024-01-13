describe('Форма логина и пароля', function () {
    
    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled')
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled')
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon');
         })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type ('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
         })

    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio13');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
         })

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('marselo777@qa.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
         })

     it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('germandolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
         })

     it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('GERMan@Dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio17');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
         })
})
