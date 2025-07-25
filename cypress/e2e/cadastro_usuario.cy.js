///<reference types="cypress" />

import { faker, Faker } from '@faker-js/faker'

import cadastro_page from '../support/pages/cadastro_usuario_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import home_page from '../support/pages/home_page'
import login_page from '../support/pages/login_page'

const user_data = require('../fixtures/cadastro_usuario.json')
const error_messages_data = require('../fixtures/error_messages.json')
const success_messages_data = require('../fixtures/success_messages.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        login_page.acessarCadastroUsario()
    })

    it('Todos os campos vazios', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro(error_messages_data.campos_vazios)
    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.preencheEmail(user_data.usuarios.valido.email)
        cadastro_usuario_page.preencheSenha(user_data.usuarios.valido.senha)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro(error_messages_data.nome_vazio)
    })

    it('Campo e-mail vazio', () => {
        cadastro_usuario_page.preencheNome(user_data.usuarios.valido.nome)
        cadastro_usuario_page.preencheSenha(user_data.usuarios.valido.senha)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro(error_messages_data.email_vazio)
    })

    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.preencheNome(user_data.usuarios.valido.nome)
        cadastro_usuario_page.preencheEmail(user_data.usuarios.email_invalido.email)
        cadastro_usuario_page.preencheSenha(user_data.usuarios.valido.senha)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro(error_messages_data.email_invalido)
    })

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencheNome(user_data.usuarios.valido.nome)
        cadastro_usuario_page.preencheEmail(user_data.usuarios.valido.email)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro(error_messages_data.senha_vazia)
    })

    it('Cadastro de usuário comum - com sucesso', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha(user_data.usuarios.valido.senha)
        cadastro_page.clicarCadastrar()
        cadastro_page.validaMensagemCadastroSucesso(success_messages_data.cadastro_sucesso)
    })

    it('Cadastro email repetido', () => {
        const nome = faker.person.fullName()
        const email = faker.internet.email()

        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.preencheEmail(email)
        cadastro_usuario_page.preencheSenha(user_data.usuarios.valido.senha)
        cadastro_page.clicarCadastrar()
        home_page.sairDoSistema()
        login_page.acessarCadastroUsario()
        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.preencheEmail(email)
        cadastro_usuario_page.preencheSenha(user_data.usuarios.valido.senha)
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro(error_messages_data.email_repetido)
    })

    it('Cadastro de usuário administrador - com sucesso', () => {
        const nome = faker.person.fullName()
        
        cadastro_usuario_page.preencheNome(nome)
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha(user_data.usuarios.valido.senha)
        cadastro_usuario_page.defineComoAdministrador()
        cadastro_page.clicarCadastrar()
        home_page.verifcaSeEntrouNoSistema(success_messages_data.bem_vindo +  nome)
    
    })

    it('Redirecionamento do Entrar da tela de cadastro de usuário para a tela de login', () => {
        cadastro_usuario_page.redirecionarParaLogin()
        home_page.verificaTelaLogin()
    })

})
