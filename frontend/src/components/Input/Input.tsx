import "./Input.css"

export interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    className?: string;
    value?: string;
}

export const Input = (props: InputProps): JSX.Element => {
    return (
        <input
            className={"input " + props.className}
            value={props.value}
            onChange={props.onChange}
            {...props}
        />
    ) as JSX.Element;
};
