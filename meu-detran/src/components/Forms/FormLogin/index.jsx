import React, { useContext, useState } from 'react';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
import useValidations from '../../../hooks/useValidations';
import useFormValidator from '../../../hooks/useFormValidator';
import useMasks from '../../../hooks/useMasks';
import AuthService from '../../../services/AuthService';
import AuthContext from '../../../contexts/AuthContext';

export default function FormLogin() {
    const [msgForm, setMsgForm] = useState('');
    const [isLogando, setLogando] = useState(false);
    const { setAutenticado } = useContext(AuthContext);

    const { cpfMask } = useMasks();
    const { isCPF, isEmpty } = useValidations();
    const { values, errors, isFormValid, validate, resetValidator } = useFormValidator({
        cpf: isCPF('CPF inválido!'),
        senha: isEmpty('Senha é obrigatória!')
    });

    const handleFormLogin = async (e) => {
        try 
        {
            e.preventDefault();
            const cpf = e.target.cpf.value;
            const senha = e.target.senha.value;
            setMsgForm('');
            setLogando(true);

            await AuthService.autenticar(cpf, senha);
            
            e.target.reset();
            resetValidator();
            setAutenticado(true);
        }
        catch(e)
        {
            setMsgForm(e.message);
            setLogando(false);
        }
    }

    return (
        <Form onSubmit={handleFormLogin}>
            { msgForm && <Alert variant="danger">{msgForm}</Alert> }

            <Form.Group className="mb-3">
                <FloatingLabel label="CPF *" className="mb-3">
                    <Form.Control type="text" placeholder="CPF *" name="cpf" onInput={ cpfMask } onBlur={ validate } onChange={ validate } isInvalid={errors.cpf} isValid={values.cpf && !errors.cpf} />
                    <Form.Control.Feedback type="invalid">
                        { errors.cpf }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="Senha *" className="mb-3">
                    <Form.Control type="password" placeholder="Senha *" name="senha" onBlur={ validate } onChange={ validate } isInvalid={errors.senha} isValid={values.senha && !errors.senha} />
                    <Form.Control.Feedback type="invalid">
                        { errors.senha }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group>
                <Button disabled={!isFormValid || isLogando} type="submit" variant="success" className="w-100 py-3" size="lg">
                    { isLogando ? 'Aguarde...' : 'Entrar' }
                </Button>
            </Form.Group>

            <Form.Group>
                <Form.Text as="p" className="text-center py-2 m-0">
                    Campos com (<strong>*</strong>) são obrigatórios!
                </Form.Text>
            </Form.Group>
        </Form>
    )
}
