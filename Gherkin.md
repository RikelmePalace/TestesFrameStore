# 1. Jogo no Carrinho

## Cenário 1: Adicionar um novo jogo ao carrinho com sucesso

**Dado** que o usuário está logado e na página inicial do sistema;

**Quando** o usuário selecionar o jogo "ARC Raiders" e clicar em "Adicionar ao Carrinho";

**Então** o sistema deve incluir o jogo no carrinho com sucesso;

**E** o contador do carrinho deve exibir "1" item.

## Cenário 2: Tentativa de adicionar um jogo que já está no carrinho

**Dado** que o usuário está logado e na página inicial do sistema;

**E** que o jogo "ARC Raiders" já foi adicionado ao carrinho anteriormente;

**Quando** o usuário tentar clicar novamente para colocar o jogo "ARC Raiders" no carrinho;

**Então** o sistema deve exibir a mensagem: "Este jogo já está no carrinho";

**E** a quantidade de itens no carrinho não deve sofrer alterações.

## Cenário 3: Remoção de um jogo do carrinho

**Dado** que o usuário está na tela do carrinho de compras;

**E** possui o jogo "ARC Raiders" listado em seu pedido;

**Quando** o usuário clicar no botão de remover o jogo;

**Então** o item deve desaparecer da lista;

**E** o valor total do carrinho deve ser atualizado para zero.


# 2. Botão de Logoff da Conta

## Cenário 1: Realizar logoff com sucesso

**Dado** que o usuário está autenticado e navegado na sua conta da loja;

**Quando** o usuário clicar no botão "Sair" (Logoff) no menu de perfil;

**Então** o sistema deve encerrar a sessão atual do usuário;

**E** redirecionar o usuário para a página inicial da loja como visitante anonimizado.

## Cenário 2: Bloqueio de acesso à Homepage após o logoff

**Dado** que o usuário acabou de realizar o logoff da sua conta;

**Quando** o usuário tentar acessar digitando a URL direta da "homepage.html";

**Então** o sistema deve bloquear o carregamento da página;

**E** mantê-lo ou redirecioná-lo para a tela de Login.

## Cenário 3: Bloqueio de acesso à página de Perfil após o logoff

**Dado** que o usuário realizou o logoff com sucesso;

**Quando** o usuário tentar navegar diretamente para
