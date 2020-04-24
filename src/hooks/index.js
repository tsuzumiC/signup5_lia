import { useState } from "react";

export const useForm = (callback, data) => {
    const [values, setValues] = useState(data);
    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };
    const handleSubmit = (event, onSubmit) => {
        event.preventDefault();
        if (onSubmit) {
            setValues((values) => ({
                ...values,
                ...onSubmit,
            }));
        }
        callback(values);
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
};
