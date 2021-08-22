import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import useValidations from '../../../hooks/useValidations';
import useFormValidator from '../../../hooks/useFormValidator';
import useMasks from '../../../hooks/useMasks';

export default function FormLogin() {
    const { cpfMask } = useMasks();
    const { isCPF, isEmpty } = useValidations();
    const { values, errors, isFormValid, validate, resetValidator } = useFormValidator({
        cpf: isCPF('CPF inválido!'),
        senha: isEmpty('Senha é obrigatória!')
    });

    const handleFormLogin = (e) => {
        e.preventDefault();
        
        e.target.reset();
        resetValidator();
    }

    return (
        <Form onSubmit={handleFormLogin}>
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
                <Button disabled={!isFormValid} type="submit" variant="success" className="w-100 py-3" size="lg">
                    Entrar
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
