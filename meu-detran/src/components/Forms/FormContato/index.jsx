import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import useValidations from '../../../hooks/useValidations';
import useFormValidator from '../../../hooks/useFormValidator';

export default function FormContato() {
    const { isCPF, isEmpty, isEmail, isTelefoneOuCelular } = useValidations();
    const { values, errors, isFormValid, validate, resetValidator } = useFormValidator({
        cpf: isCPF('CPF inválido!'),
        nome: isEmpty('Nome completo é obrigatório!'),
        email: isEmail('E-mail é obrigatório!'),
        tel: isTelefoneOuCelular('Telefone/Celular inválido!')
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
                    <Form.Control type="text" placeholder="CPF *" name="cpf" onBlur={ validate } onChange={ validate } isInvalid={errors.cpf} isValid={values.cpf && !errors.cpf} />
                    <Form.Control.Feedback type="invalid">
                        { errors.cpf }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="Nome completo *" className="mb-3">
                    <Form.Control type="text" placeholder="Nome completo *" name="nome" onBlur={ validate } onChange={ validate } isInvalid={errors.nome} isValid={values.nome && !errors.nome} />
                    <Form.Control.Feedback type="invalid">
                        { errors.nome }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="E-mail *" className="mb-3">
                    <Form.Control type="email" placeholder="E-mail *" name="email" onBlur={ validate } onChange={ validate } isInvalid={errors.email} isValid={values.email && !errors.email} />
                    <Form.Control.Feedback type="invalid">
                        { errors.email }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="Telefone ou Celular *" className="mb-3">
                    <Form.Control type="tel" placeholder="Telefone ou Celular *" name="tel" onBlur={ validate } onChange={ validate } isInvalid={errors.tel} isValid={values.tel && !errors.tel} />
                    <Form.Control.Feedback type="invalid">
                        { errors.tel }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group>
                <Button disabled={!isFormValid} type="submit" variant="success" className="w-100 py-3" size="lg">
                    Enviar
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
