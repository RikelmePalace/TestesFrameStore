const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

jest.setTimeout(45000);

describe("Testes da Loja de Games - Funcionalidades do Carrinho", () => {
    let driver;
    const url = 'https://projeto-framestore-wip.onrender.com';

    beforeAll(async () => {
        const options = new chrome.Options();

        options.setUserPreferences({ 
            'autofill.profile_enabled': false,
            'credentials_enable_service': false,
            'profile.password_manager_enabled': false,
            'profile.password_manager_leak_detection': false,
            'password_manager.leak_detection_enabled': false 
        });
        options.addArguments("--disable-save-password-bubble");
        options.addArguments("--disable-features=PasswordLeakDetection");
        options.addArguments("--disable-popup-blocking");

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await driver.manage().window().maximize();
        await driver.get(url);

        const emailInput = await driver.wait(
            until.elementLocated(By.css('input[type="email"]')), 
            10000
        );
        await emailInput.sendKeys('teste@email.com');

        const senhaInput = await driver.findElement(By.css('input[type="password"]'));
        await senhaInput.sendKeys('teste123');

        const acessarButton = await driver.findElement(By.xpath("//button[contains(text(), 'Acessar')]"));
        await acessarButton.click();

        await driver.wait(until.urlContains('homepage.html'), 10000);
    });

    afterAll(async () => {
        if (driver) {
            await driver.quit();
        }
    });

    // test("1 - Cenário: Adicionar um novo jogo ao carrinho com sucesso", async () => {
    //     await driver.get(url);

    //     const jogoCard = await driver.wait(
    //         until.elementLocated(By.xpath("//h3[text()='ARC Raiders']/..")), 
    //         10000
    //     );
    //     await jogoCard.click();

    //     const addCarrinhoBtn = await driver.wait(
    //         until.elementLocated(By.xpath("//button[@onclick='adicionarAoCarrinho()']")), 
    //         10000
    //     );
    //     await driver.wait(until.elementIsVisible(addCarrinhoBtn), 10000);
    //     await addCarrinhoBtn.click();

    //     const contadorCarrinho = await driver.wait(
    //         until.elementLocated(By.css('.cart-badge, .action-badge.cart-badge')), 
    //         10000
    //     );
    //     expect(await contadorCarrinho.isDisplayed()).toBe(true);
    // });

    // test("2 - Cenário: Tentativa de adicionar um jogo que já está no carrinho", async () => {
    //     await driver.get(url);

    //     const jogoCard = await driver.wait(
    //         until.elementLocated(By.xpath("//h3[text()='ARC Raiders']/..")), 
    //         10000
    //     );
    //     await jogoCard.click();

    //     const addCarrinhoBtn = await driver.wait(
    //         until.elementLocated(By.xpath("//button[@onclick='adicionarAoCarrinho()']")), 
    //         10000
    //     );
    //     await driver.wait(until.elementIsVisible(addCarrinhoBtn), 10000);
    //     await addCarrinhoBtn.click();

    //     await driver.wait(until.alertIsPresent(), 5000);
    //     const alerta = await driver.switchTo().alert();
    //     const textoAlerta = await alerta.getText();
        
    //     expect(textoAlerta).toContain("Este jogo já está no seu carrinho.");
    //     await alerta.accept(); 
    // });

    // test("3 - Cenário: Remoção de um jogo do carrinho", async () => {

    //     await driver.get('https://projeto-framestore-wip.onrender.com/carrinho.html');

    //     const btnRemover = await driver.wait(
    //         until.elementLocated(By.xpath("//button[contains(text(), 'Remover')] | //*[contains(@class, 'btn-remove')] | //*[contains(@class, 'remove-item')]")), 
    //         10000
    //     );
    //     await driver.wait(until.elementIsVisible(btnRemover), 10000);
    //     await btnRemover.click();

    //     await driver.sleep(1000);

    //     const elementosRemover = await driver.findElements(By.xpath("//button[contains(text(), 'Remover')]"));
    //     expect(elementosRemover.length).toBe(0);
    // });


    //     test("4 - Cenário: Realizar logoff com sucesso através do menu de perfil", async () => {
    //     await driver.get(url);
    //     await driver.sleep(1500); 

    //     const perfilBadge = await driver.wait(
    //         until.elementLocated(By.xpath("//span[text()='JuninTestes'] | //a[contains(@class, 'profile-badge')]")), 
    //         10000
    //     );
    //     await driver.executeScript("arguments[0].scrollIntoView(true);", perfilBadge);
    //     await driver.wait(until.elementIsVisible(perfilBadge), 10000);
        
    //     try {
    //         await perfilBadge.click();
    //     } catch (e) {
    //         await driver.executeScript("arguments[0].click();", perfilBadge);
    //     }

    //     const abaMinhaConta = await driver.wait(
    //         until.elementLocated(By.xpath("//button[contains(text(), 'Minha Conta')]")), 
    //         10000
    //     );
    //     await driver.wait(until.elementIsVisible(abaMinhaConta), 10000);
    //     await abaMinhaConta.click();

    //     const btnLogout = await driver.wait(
    //         until.elementLocated(By.css('.btn-logout')), 
    //         10000
    //     );
    //     await driver.wait(until.elementIsVisible(btnLogout), 10000);
    //     await btnLogout.click();

    //     const btnAcessarLogin = await driver.wait(
    //         until.elementLocated(By.xpath("//button[contains(text(), 'Acessar')]")), 
    //         10000
    //     );
    //     expect(await btnAcessarLogin.isDisplayed()).toBe(true);
    // });

    // test("5 - Cenário: Bloqueio de acesso à Homepage após o logoff", async () => {

    //     await driver.get('https://projeto-framestore-wip.onrender.com/homepage.html');
    //     await driver.sleep(1000);

    //     const btnAcessarLogin = await driver.wait(
    //         until.elementLocated(By.xpath("//button[contains(text(), 'Acessar')]")), 
    //         10000
    //     );
    //     expect(await btnAcessarLogin.isDisplayed()).toBe(true);
    // });

    // test("6 - Cenário: Bloqueio de acesso à página de Perfil após o logoff", async () => {

    //     await driver.get('https://projeto-framestore-wip.onrender.com/perfil.html');
    //     await driver.sleep(1000);

    //     const btnAcessarLogin = await driver.wait(
    //         until.elementLocated(By.xpath("//button[contains(text(), 'Acessar')]")), 
    //         10000
    //     );
    //     expect(await btnAcessarLogin.isDisplayed()).toBe(true);
    // });


        // test("7 - Cenário: Finalizar compra com carrinho válido e usuário logado", async () => {
        // await driver.get(url);

        // const jogoCard = await driver.wait(
        //     until.elementLocated(By.xpath("//h3[text()='ARC Raiders']/..")), 
        //     10000
        // );
        // await jogoCard.click();

        // const addCarrinhoBtn = await driver.wait(
        //     until.elementLocated(By.xpath("//button[@onclick='adicionarAoCarrinho()']")), 
        //     10000
        // );
        // await driver.wait(until.elementIsVisible(addCarrinhoBtn), 10000);
        // await addCarrinhoBtn.click();

        // await driver.get('https://projeto-framestore-wip.onrender.com/carrinho.html');

        // const irPagamentoBtn = await driver.wait(
        //     until.elementLocated(By.css('.btn-checkout, .btn-finalizar-compra')), 
        //     10000
        // );
        // await driver.wait(until.elementIsVisible(irPagamentoBtn), 10000);
        // await irPagamentoBtn.click();

        // const selectElement = await driver.wait(
        //     until.elementLocated(By.id('coupon-select')), 
        //     10000
        // );
        // expect(await selectElement.isDisplayed()).toBe(true);
        // });

        // test("8 - Cenário: Impedir finalização de compra com carrinho vazio", async () => {
        // await driver.get('https://projeto-framestore-wip.onrender.com/carrinho.html');
        // await driver.sleep(2000);

        // try {
        //     const btnRemover = await driver.findElement(By.xpath("//button[contains(text(), 'Remover')]"));
        //     await btnRemover.click();
        //     await driver.sleep(1500); 
        // } catch (e) {

        // }

        // const corpoPagina = await driver.findElement(By.tagName('body')).getText();
        // expect(corpoPagina).not.toContain("ARC Raiders");
        // });

        // test("9 - Cenário: Validação de fluxo completo até a tela de sucesso", async () => {

        // await driver.get(url);

        // const jogoCard = await driver.wait(
        //     until.elementLocated(By.xpath("//h3[text()='ARC Raiders']/..")), 
        //     10000
        // );
        // await jogoCard.click();

        // const addCarrinhoBtn = await driver.wait(
        //     until.elementLocated(By.xpath("//button[@onclick='adicionarAoCarrinho()']")), 
        //     10000
        // );
        // await driver.wait(until.elementIsVisible(addCarrinhoBtn), 10000);
        // await addCarrinhoBtn.click();

        // await driver.get('https://projeto-framestore-wip.onrender.com/carrinho.html');
        
        // const finalizarCompraBtn = await driver.wait(
        //     until.elementLocated(By.id('btn-finalizar')), 
        //     10000
        // );
        // await driver.wait(until.elementIsVisible(finalizarCompraBtn), 10000);
        // await finalizarCompraBtn.click();

        // await driver.wait(until.alertIsPresent(), 5000);
        // const alerta = await driver.switchTo().alert();
        // const textoAlerta = await alerta.getText();
        
        // expect(textoAlerta).toContain("Saldo virtual insuficiente");
        // await alerta.accept();
        // });

});