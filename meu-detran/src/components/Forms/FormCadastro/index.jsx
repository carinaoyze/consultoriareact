import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import useValidations from '../../../hooks/useValidations';
import useFormValidator from '../../../hooks/useFormValidator';

export default function FormCadastro() {
    const { isCPF, isEmpty, isEmail, isCelular, isData } = useValidations();
    const { values, errors, isFormValid, validate, resetValidator } = useFormValidator({
        cpf: isCPF('CPF inválido!'),
        nome: isEmpty('Nome completo é obrigatório!'),
        rg: isEmpty('RG/Órgão é obrigatório!'),
        datanasc: isData('Data de Nascimento é obrigatório!'),
        email: isEmail('E-mail inválido!'),
        confirmarEmail: isEmail('Confirmação de E-mail inválido!'),
        emailAlternativo: isEmail('E-mail alternativo inválido!', false),
        celular: isCelular('Celular/WhatsApp inválido!'),
        ativacao: isEmpty('Escolha um tipo de ativação para seu cadastro!')
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
                <FloatingLabel label="RG/Órgão Emissor *" className="mb-3">
                    <Form.Control type="text" placeholder="RG/Órgão Emissor *" name="rg" onBlur={ validate } onChange={ validate } isInvalid={errors.rg} isValid={values.rg && !errors.rg} />
                    <Form.Control.Feedback type="invalid">
                        { errors.rg }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="Data de Nascimento *" className="mb-3">
                    <Form.Control type="text" placeholder="Data de Nascimento *" name="datanasc" onBlur={ validate } onChange={ validate } isInvalid={errors.datanasc} isValid={values.datanasc && !errors.datanasc} />
                    <Form.Control.Feedback type="invalid">
                        { errors.datanasc }
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
                <FloatingLabel label="Confirmar e-mail *" className="mb-3">
                    <Form.Control type="email" placeholder="Confirmar e-mail  *" name="confirmarEmail" onBlur={ validate } onChange={ validate } isInvalid={errors.confirmarEmail} isValid={values.confirmarEmail && !errors.confirmarEmail} />
                    <Form.Control.Feedback type="invalid">
                        { errors.confirmarEmail }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="E-mail alternativo" className="mb-3">
                    <Form.Control type="email" placeholder="E-mail alternativo" name="emailAlternativo" onBlur={ validate } onChange={ validate } isInvalid={errors.emailAlternativo} isValid={values.emailAlternativo && !errors.emailAlternativo} />
                    <Form.Control.Feedback type="invalid">
                        { errors.emailAlternativo }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="Celular/WhatsApp *" className="mb-3">
                    <Form.Control type="tel" placeholder="Celular/WhatsApp *" name="celular" onBlur={ validate } onChange={ validate } isInvalid={errors.celular} isValid={values.celular && !errors.celular} />
                    <Form.Control.Feedback type="invalid">
                        { errors.celular }
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <FloatingLabel label="Ativação do Cadastro por *" className="mb-3">
                    <Form.Select name="ativacao" placeholder="Ativação do Cadastro por *" onBlur={ validate } onChange={ validate } isInvalid={errors.ativacao} isValid={values.ativacao && !errors.ativacao}>
                        <option value="">Selecione</option>
                        <option value="E-mail">E-mail</option>
                        <option value="SMS">SMS</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        { errors.ativacao }
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