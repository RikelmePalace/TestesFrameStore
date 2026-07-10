# 1. Jogo no Carrinho

**Cenário 1: Adicionar um novo jogo ao carrinho com sucesso**

**Dado** que o usuário está logado e na página inicial do sistema;
**Quando** o usuário selecionar o jogo "ARC Raiders" e clicar em "Adicionar ao Carrinho";
**Então** o sistema deve incluir o jogo no carrinho com sucesso;
**E** o contador do carrinho deve exibir "1" item.

# **Cenário 2: Tentativa de adicionar um jogo que já está no carrinho**

**Dado** que o usuário está logado e na página inicial do sistema;
**E** que o jogo "ARC Raiders" já foi adicionado ao carrinho anteriormente;
**Quando** o usuário tentar clicar novamente para colocar o jogo "ARC Raiders" no carrinho;
**Então** o sistema deve exibir a mensagem: "Este jogo já está no carrinho";
**E** a quantidade de itens no carrinho não deve sofrer alterações.

# **Cenário 3: Remoção de um jogo do carrinho**

**Dado** que o usuário está na tela do carrinho de compras;
**E** possui o jogo "ARC Raiders" listado em seu pedido;
**Quando** o usuário clicar no botão de remover o jogo;
**Então** o item deve desaparecer da lista;
**E** o valor total do carrinho deve ser atualizado para zero.

# 2. Botão de Logoff da Conta

**Cenário 1: Realizar logoff com sucesso**

**Dado** que o usuário está autenticado e navegado na sua conta da loja
**Quando** o usuário clicar no botão "Sair" (Logoff) no menu de perfil
**Então** o sistema deve encerrar a sessão atual do usuário
**E** redirecionar o usuário para a página inicial da loja como visitante anonimizado

**Cenário 2: Bloqueio de acesso à Homepage após o logoff**

**Dado** que o usuário acabou de realizar o logoff da sua conta;
**Quando** o usuário tentar forçar o acesso digitando a URL direta da "homepage.html";
**Então** o sistema deve bloquear o carregamento da página;
**E** mantê-lo ou redirecioná-lo para a tela de Login.

**Cenário 3: Bloqueio de acesso à página de Perfil após o logoff**

**Dado** que o usuário realizou o logoff com sucesso;
**Quando** o usuário tentar navegar diretamente para a URL "perfil.html";
**Então** o sistema deve impedir a exibição dos dados do perfil;
**E** redirecionar o fluxo para a tela de Login.

# 3. Botão de Finalizar Compra

**Cenário 1: Finalizar compra com carrinho válido e usuário logado**

**Dado** que o usuário está logado em sua conta
**E** possui pelo menos um jogo adicionado ao carrinho de compras
**Quando** o usuário clicar no botão "Finalizar Compra"
**Então** o sistema deve direcionar o usuário para a tela de seleção de pagamento e endereço de entrega

**Cenário 2: Impedir finalização de compra com carrinho vazio**

**Dado** que o usuário está na página do carrinho de compras
**E** não há nenhum item ou jogo adicionado ao carrinho
**Quando** o usuário visualizar a página
**Então** o botão "Finalizar Compra" deve estar desabilitado (cinza)
**E** deve exibir a mensagem: "Seu carrinho está vazio. Adicione jogos para continuar."

**Cenário 3: Validação de fluxo completo até a tela de sucesso**

**Dado** que o usuário está na tela de pagamento após clicar em finalizar compra;
**Quando** o usuário selecionar a forma de pagamento e clicar no botão definitivo de fechar o pedido;
**Então** o sistema deve processar a transação e exibir a tela de confirmação de sucesso.
