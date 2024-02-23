import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [formValue, setFormValue] = useState(initialState)

    const reset = () => {
        setFormValue(initialState);
    }

    const handleChange = ({target}) => {
        setFormValue({
            ...formValue,
            [target.id]: target.value
        })
    }

    return [formValue, handleChange, reset]
}
