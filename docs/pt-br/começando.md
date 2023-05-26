---
title: Começando
description: Começando o seu primeiro projeto Pipe!
lang: pt-br
---

# Começando
Nesta página, você aprenderá os fundamentos da linguagem Pipe. Ela possui uma sintaxe simples e intuitiva, facilitando o aprendizado e diminuindo a curva de aprendizado.

## Fundamentos
A linguagem Pipe é focada em ter uma curva de aprendizado muito pequena devido à sua sintaxe fácil e codificação intuitiva. Ela é voltada para o controle de dados e gerenciamento de pipelines, mas não se limita apenas a isso. Vamos colocar a mão na massa.

## Usando o Pipe Hub
Para utilizar o Pipe, você deve instalar o Pipe Hub, onde é possível instalar e gerenciar suas versões do Pipe e seus projetos.

¨pipe_hub_installer_block()¨

1. Execute o instalador do Pipe Hub.
2. Após a instalação, configure seu perfil no Pipe Hub.
3. Na página "Instalações", clique no botão com o símbolo "+" para configurar uma nova instalação do Pipe.
4. Selecione a opção "Latest" (versão mais recente) e clique em "Instalar". Aguarde até que a instalação seja concluída.
5. Acesse a página "Projetos" e clique no botão "+". Escolha um nome para o projeto e selecione a versão do Pipe que deseja usar. Preencha os outros campos, se desejar, e clique em "Criar".
6. Após a criação do arquivo, a página "Editor" será aberta. Nessa página, você encontrará duas partes: "Explorador" e "Código". No "Explorador", serão exibidos os arquivos do projeto, e no "Código", você poderá editar o conteúdo dos arquivos abertos.

## Codificando
A sintaxe do Pipe é bastante similar à do Python e JavaScript. Vamos começar explorando como criar variáveis e funções.

### Variáveis
Para criar uma variável, utilize a seguinte sintaxe: `nome: valor`.
```pipe
variavel1: "Eu sou uma variável!"
variavel2: 10
```
No exemplo acima, estamos criando duas variáveis. A primeira recebe uma string com o valor "Eu sou uma variável!", e a segunda recebe o valor numérico 10.

### Funções
As funções no Pipe são definidas com a palavra-chave func. Veja um exemplo:

```pipe
func saudacao(nome):
    mensagem: "Olá, " + nome + "!"
    return mensagem

resultado: saudacao("Maria")
```
Nesse exemplo, definimos uma função saudacao que recebe um parâmetro nome. Dentro da função, criamos a variável mensagem que concatena o nome fornecido com a string "Olá, " e o ponto de exclamação. Por fim, retornamos a mensagem.

## Primeiro projeto
Agora que você sabe as bases da linguagem Pipe, vamos criar uma aplicação simples para jogarmos um quiz:
```pipe
perguntas: ["Qual a captal da França?", "Onde fica a torre de Pisa?", "Quantas casas tem um tabuleiro de xadres?"]
respostas: ["Paris","Itália",64]

func Perguntar():
  pergunta: perguntas.Any()
  resposta: respostas[perguntas.IndexOf(pergunta)]
  
  resposta_jogador: Ask(pergunta)
  if(reposta_jogador == resposta):
    Write("Correta!")
    Perguntar()
  else:
    Write("Errada.")
    Perguntar()
    
Write("Vamos começar?")
Perguntar()
```

Vamos analisar:
```pipe`
perguntas: ["Qual a captal da França?", "Onde fica a torre de Pisa?", "Quantas casas tem um tabuleiro de xadres?"]
respostas: ["Paris","Itália",64]
``
Aqui temos a definição de duas variáveis: perguntas e respostas. A variável perguntas é uma lista que armazena três perguntas diferentes, enquanto a variável respostas é uma lista correspondente com as respostas correspondentes a cada pergunta. Essas listas são chamadas de arrays.

```pipe
func Perguntar():
    pergunta: perguntas.Any()
    resposta: respostas[perguntas.IndexOf(pergunta)]
```
Aqui temos a definição de uma função chamada Perguntar. Essa função não recebe nenhum parâmetro. Dentro da função, estamos usando a função Any para selecionar aleatoriamente uma pergunta da lista perguntas e atribuí-la à variável pergunta. Em seguida, usamos a função IndexOf para encontrar o índice da pergunta selecionada na lista perguntas e usamos esse índice para obter a resposta correspondente na lista respostas, que é atribuída à variável resposta.

```pipe
    resposta_jogador: Ask(pergunta)
    if(resposta_jogador == resposta):
        Write("Correta!")
        Perguntar()
    else:
        Write("Errada.")
        Perguntar()
```
Dentro da função Perguntar, estamos solicitando ao jogador que responda à pergunta usando a função Ask e armazenando a resposta na variável resposta_jogador. Em seguida, comparamos a resposta do jogador com a resposta correta (armazenada na variável resposta). Se as respostas forem iguais, exibimos a mensagem "Correta!" usando a função Write e chamamos novamente a função Perguntar para fazer outra pergunta aleatória. Caso contrário, exibimos a mensagem "Errada." e chamamos novamente a função Perguntar para fazer outra pergunta.

```pipe
Write("Vamos começar?")
Perguntar()
```
Fora da função Perguntar, exibimos a mensagem "Vamos começar?" usando a função Write e chamamos a função Perguntar para iniciar o jogo de perguntas.

Esse código implementa um jogo de perguntas e respostas em que o jogador é apresentado a uma pergunta aleatória e deve fornecer a resposta correta. O jogo continua fazendo perguntas até que o jogador acerte a resposta. Se o jogador errar, uma nova pergunta é feita.

### Compilar
Para executar nosso jogo utilizaremos o Pipe Hub, é muito simples:
1. Na parte superior, clique em "Compilar para PAST"
2. Após completar a compilação, uma pasta "bin" será criada, nela terá um arquivo .past que, ao executar, uma janela do terminal de comando será aberta e irá exibir "Vamos começar?" e uma pergunta aleatória, ao clicar Ctrl+C 2 vezes ou fechar a janela, o código é encerrado

Se quiser, pode usar o shortcut Ctrl+Shift+C para compilar o código e executá-lo logo em seguida.

## Conclusão
Agora você já sabe programar em Pipe! Estude mais para criar coisas incríveis e descobrir cada vez mais possibilidades!
