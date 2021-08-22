export default function useValidations() {
    const validations = {

        isEmpty(msgErro) {
            return function(valor) {
                if (!valor.trim()) {
                    return msgErro;
                }

                return '';
            }
        },

        isCPF(msgErro, required = true) {
            return function(valor) {
                let validador = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
                if ((required || valor) && !validador.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        },

        isEmail(msgErro, required = true) {
            return function(valor) {
                let validadorEmail = /^[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[a-zA-Z0-9_+-]+@[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[.]{1,1}[a-zA-Z]{2,}$/;
                if ((required || valor) && !validadorEmail.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        },

        isTelefoneOuCelular(msgErro, required = true) {
            return function(valor) {
                let validador = /^\([0-9]{2}\) ?9?[0-9]{4}-[0-9]{4}$/;
                if ((required || valor) && !validador.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        },

        isTelefoneFixo(msgErro, required = true) {
            return function(valor) {
                let validador = /^\([0-9]{2}\) ?[0-9]{4}-[0-9]{4}$/;
                if ((required || valor) && !validador.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        },

        isCelular(msgErro, required = true) {
            return function(valor) {
                let validador = /^\([0-9]{2}\) ?9[0-9]{4}-[0-9]{4}$/;
                if ((required || valor) && !validador.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        },

        isData(msgErro, required = true) {
            return function(valor) {
                let validador = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
                if ((required || valor) && !validador.test(valor)) {
                    return msgErro;
                }

                return '';
            }
        },

    }

    return validations;
}