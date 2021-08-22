import { useState } from "react";

export default function useFormValidator(validations) {
    const [errors, setErrors] = useState(createInitialState());
    const [values, setValues] = useState(createInitialState());
    const [isFormValid, setFormValid] = useState(false);

    function createInitialState() {
        const defaultValues = {};

        for (let propriedade in validations)
        {
            defaultValues[propriedade] = '';
        }

        return defaultValues;
    }

    function validate(event) {
        const { name, value } = event.target;
        errors[name] = validations[name](value);
        values[name] = value;
        let status = Object.entries(values).every(function([propriedade, valor]) {
            return validations[propriedade](valor) === '';
        });

        setErrors({ ...errors });
        setValues({ ...values });
        setFormValid(status);
    }

    function resetValidator() {
        setFormValid(false);
        setErrors(createInitialState());
        setValues(createInitialState());
    }

    return { values, errors, isFormValid, validate, resetValidator };
}