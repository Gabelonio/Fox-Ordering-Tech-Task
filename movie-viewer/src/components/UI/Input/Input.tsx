import { InputHTMLAttributes, forwardRef, Ref } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputRef?: Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ inputRef, ...props }, ref) => (
        <input
            {...props}
            ref={inputRef || ref}
        />
    )
);

export default Input;
