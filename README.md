# App

GymPass style app.

## RFs (Requisitos funcionais)

- [X] Deve ser possivel se cadastrar
- [ ] Deve ser possivel se autenticar
- [ ] Deve ser possivel obter o perdil de um usuario logado
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado
- [ ] Deve ser possivel o usuario obter seu historico de check-ins
- [ ] Deve ser possivel o usuario buscar academias proximas
- [ ] Deve ser possivel o usuario buscar academias pelo nome
- [ ] Deve ser possivel o usuario realizar check-in em uma academia
- [ ] Deve ser possivel validar o ckeck-in de um usuario
- [ ] Deve ser possivel cadastrar uma academia

## RNs (Regras de negócio)

- [X] O usuario não deve pode se cadastrar com um -mail duplicado
- [ ] O usuario não pode fazer 2 check-ins no mesmo dia
- [ ] O usuario não pode fazer check-ins se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado até 20 minutos apos criado
- [ ] O check-in só pode ser validado por administradores
- [ ] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não-funcionais)

- [X] A senha so usuario precisa estar criptografadas
- [X] Os dados da aplicação precisa estar persistidos em um banco PostgreSQL
- [ ] Todas listas de dados precisam estar pafinadas com 20 itens por pagina
- [ ] O usuario deve ser identificado por um JWT (JSON web token)
