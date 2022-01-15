import './input.css'

interface IInputProps {
    children?: React.ReactNode;
    type?: string
    placeholder?: string;
    width?: string | number;
    height?: string | number;
    label: string;
    error?: string;
    setValue?: any;
    value?: any;
}

export function Input({type = "text", placeholder, width, height, label, error, setValue, value}: IInputProps) {
    return (
        <div className="Input">
            {label ? <label>{label}</label> : null}
            <div>
                <input
                    type={type}
                    placeholder={placeholder}
                    style={{width: width, height: height}}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    value={value}
                />

            </div>
            {error ? <span>{error}</span> : null}
        </div>
    );
}