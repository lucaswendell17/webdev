const DevWeb = {
    carregar: function () {
        
        this.atribuirEventos();
    },
    atribuirEventos: function () {

        $('#lorem-ipsum').on('click', function () {
            var el = document.querySelector('#page');
            $(".opcoes-menu a").removeClass("active");
            $(this).addClass('active');
                $('#page').load("../pages/lorem.html");
        });

        $('#utilizador').on('click', function () {
            var el = document.querySelector('#page');
            $(".opcoes-menu a").removeClass("active");
            $(this).addClass('active');
                $('#page').load("../pages/utilizador.html");
        });

        $('#quantum-solum').on('click', function () {
            var el = document.querySelector('#page');
            $(".opcoes-menu a").removeClass("active");
            $(this).addClass('active');
                $('#page').load("../pages/quantum.html");
        });

        $('#marcus-tremer').on('click', function () {
            var el = document.querySelector('#page');
            $(".opcoes-menu a").removeClass("active");
            $(this).addClass('active');
                $('#page').load("../pages/marcus.html");
        });

        
    },
    checarForm: function () {
        
        let email = document.getElementsByName('email')[0].value;
        let password = document.getElementsByName('password')[0].value;
        let telefone = document.getElementsByName('fone')[0].value;

        let ischeckMarcado = $('.accordion-body').find("input[type='checkbox']:checked").length > 0;

        if (!ischeckMarcado){
            this.mostrarMensagem('Precisa selecionar um tipo de Utilizador.')
            return;
        }

        if (email === '' || !this.validarEmail(email)){
            this.mostrarMensagem('Email inválido, por favor insira um email válido.')
            return;
        }

        if (password === '' || password.length < 6){
            this.mostrarMensagem('Senha precisa ter no mínimo 6 caracteres.')
            return;
        }

        if (telefone === ''){
            this.mostrarMensagem('É obrigatório informar um telefone.')
            return;
        }

        this.mostrarMensagem("Cadastro efetuado com sucesso!", "success", "Sucesso")
        this.limparForm();

    },
    validarEmail: function (email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    mostrarMensagem: function (msg, tipo = 'error', titulo = 'Atenção!') {
        Swal.fire({
            title: titulo,
            text: msg,
            icon: tipo,
            confirmButtonText: 'Ok'
          })
    },
    limparForm: function () {
        document.getElementsByName('email')[0].value = "";
        document.getElementsByName('password')[0].value = "";
        document.getElementsByName('fone')[0].value = "";
    }
}
