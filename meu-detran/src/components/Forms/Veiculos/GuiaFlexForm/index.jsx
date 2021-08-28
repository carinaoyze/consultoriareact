import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFormValidator from '../../../../hooks/useFormValidator';
import useValidations from '../../../../hooks/useValidations';

export default function GuiaFlexForm({ className: classe }) {
    const { isEmpty } = useValidations();
    const { values, errors, isFormValid, validate } = useFormValidator({
        placa: isEmpty('Placa é obrigatório!'),
        renavam: isEmpty('Renavam é obrigatório!')
    });

    return (
        <>
            <h3 className="mb-4">Guia Flex</h3>
            <Form className={ classe }>
                <Form.Group className="mb-3">
                    <FloatingLabel label="Placa *" className="mb-3">
                        <Form.Control type="text" placeholder="Placa *" name="placa" onBlur={validate} onChange={validate} isInvalid={errors.placa} isValid={values.placa && !errors.placa} />
                        <Form.Control.Feedback type="invalid">
                            {errors.placa}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                    <FloatingLabel label="Renavam *" className="mb-3">
                        <Form.Control type="text" placeholder="Renavam *" name="renavam" onBlur={validate} onChange={validate} isInvalid={errors.renavam} isValid={values.renavam && !errors.renavam} />
                        <Form.Control.Feedback type="invalid">
                            {errors.renavam}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group>
                    <Button disabled={!isFormValid} type="submit" variant="success" className="w-100 py-3" size="lg">
                        Consultar
                    </Button>
                </Form.Group>

                <Form.Group>
                    <Form.Text as="p" className="text-center py-2 m-0">
                        Campos com (<strong>*</strong>) são obrigatórios!
                    </Form.Text>
                </Form.Group>
                <Button type="button" variant="outline-success" className="w-100 py-3 mt-3">
                    Regras Gerais
                </Button>
            </Form>
        </>
    )
}
