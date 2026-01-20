describe('Проверка авторизации', function () { //это блок группировки тестов

    it('Верный логин и верный пароль', function () { //это функция для описания отдельного тестового сценария 
        cy.visit('https://10.0.206.80:11960'); //Заходим на сайт
        cy.get('#lg').type('ilya_f');
        cy.get('.input-actions-form-control > #pd').type('Iva#Sbc789');
        cy.get('.d-grid > .btn').click();
        cy.url().should('eq', 'https://10.0.206.80:11960/dashboard/proxying-servers')
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://10.0.206.80:11960'); //Заходим на сайт
        cy.get('#lg').type('ilya_f'); //Находим и заполняем поле логин
        cy.get('.input-actions-form-control > #pd').type('Iva#Sbc789214'); //Находим и заполняем поле пароль
        cy.wait(2000); //Подождать 2 секунды
        cy.get('.d-grid > .btn').click(); //Находим копку Войти и кликаем по ней
        cy.wait(2000); //Подождать 2 секунды
        cy.get('.mb-3').contains('Вы ввели неверный логин или пароль'); //Проверить вывод текста
        cy.get('.mb-3').should('be.visible'); //Проверить что текст выден пользователю
        cy.get('.mb-3').should('have.css', 'color', 'rgb(237, 84, 77)');

    })

})