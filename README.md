Treinamento git
Primeiro sistema no git
Repositorio no Github

Entre no diretório que deseja controlar a versão e inicie o Git assim:
git init

Feito isso, seus arquivos ainda não estão sendo versionados, mas eles estão esperando para serem adicionados no estágio de controle. Para fazer isso digite o comando
git add nome-do-arquivo-incluindo-extensão

Se você precisa adicionar todos os arquivos do diretório, basta digitar:
git add .

Saber o status do projeto é importante. Com o comando abaixo você consegue ver quais arquivos estão fora do controle, quais foram modificados e estão esperando por uma descrição de modificação etc:
git status

Voltando ao estágio anterior do adicionamento:
git reset HEAD nome-do-arquivo

Commit – Comitando:
git commit -m "Mensagem do commit"

Adicionando e comitando ao mesmo tempo:
git commit -a -m "Mensagem do commit"

Voltar um commit:
git reset HEAD~1

Voltar dois commits:
git reset HEAD~2

Voltando um commit e deixando o arquivo no estagio anterior:
git reset HEAD~1 --soft

Voltando um commit e excluindo o arquivo, deixando no estágio anterior:
git reset HEAD~1 --hard

Verificando o histórico de commits:
git log

Verificando o que foi mudado, diferença entre um arquivo e outro:
git log -p

Verificando os 2 últimos commits:
git log -p -2

Mostrando as estatísticas de todos os commits:
git log --stat

Mostrando todos os commits, cada um em uma linha:
git log --pretty=oneline

Mostrando todos os commits dos últimos 2 dias até o momento atual
git log --since=2.days

Criando um branch – uma ramificação
git checkout -b nome-do-branch

Verificando em que branch você está
git branch

Voltando para o branch master
git checkout master

Jogando o branch criado no branch master
Entre como branch master:
git merge nome-do-branch-que-foi-criado

Grudando o branch criado no branch master sem o commit
Somente localmente – localhost, entre como branch master:
git rebase nome-do-branch-que-foi-criado

Removendo um branch:
git branch -D nome-do-branch

Vendo branchs remotos:
git branch -a

Mostrando o início do hash, quem comitou, quanto tempo atrás, mensagem: descrição do commit:
git log --pretty=format: "%h - %an, %ar : %s"

Deletando arquivos:
git rm nome-do-arquivo

Deletando todos os aquivos removidos ao mesmo tempo:
git ls-files --deleted | xargs git rm

Ignorando arquivos
Existem alguns arquivos que muito provavelmente você não vai precisar versionar, como por exemplo os arquivos de cache do SASS, arquivos de configuração e etc. Nesse caso você precisa fazer com que o controle de versão ignore estes arquivos. Para tanto, crie um arquivo chamado .gitignore. Feito isso, dentro deste arquivo, digite o nome ou o endereço das pastas que você quer ignorar.
senha.txt
bancodedados.sql
*.sql ignora todos arquivos .sql
O arquivo .gitignore fica na raiz do projeto.

Clonando e puxando alterações de projetos
Clonando um projeto remoto:
git clone url-do-projeto

Fazendo um clone de outros branchs:
git checkout -b nome-do-branch origin/ nome-do-branch

Trazendo, puxando as alterações feitas por outros usuários:
git pull origin master

Sincronizando tudo que está no repositório remoto:
git pull

Enviando o(s) projeto(s), arquivo(s) para o repositório:
git push origin master

Enviando um branch para o repositório:
git push origin nome-do-branch

Tags
As tags servem para marcar uma etapa. Imagine que você vai lançar uma versão, que resolve uma série de problemas. Você pode marcar aquela etapa criando uma tag. Assim fica simples de fazer qualquer rollback do projeto para uma tag específica em vez de voltar para um commit. Você sabe que tudo o que foi feito até aquela tag está funcionando.

Criando tags:
git tag versão-da-tag

Listando tags:
git tag -l

Enviando a tag para o repositório
git push origin master --tags

Removendo as tags criadas localmente:
git tag -d versão-da-tag

Removendo tag no repositório remoto:
git push origin :refs/tags/versão-da-tag