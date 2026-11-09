type FormFieldProps = {
    id: string;
    label: string;
    placeholder: string;
    type?: "text" | "email" | "textarea";
};

const labelClass = "text-lg font-normal text-white lg:text-[20px]";

const FormField = ({ id, label, placeholder, type = "text" }: FormFieldProps) => {
    return (
        // label -> input gap 16px
        <div className="flex flex-col gap-4">
            <label htmlFor={id} className={labelClass}>
                {label}
            </label>

            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    className="h-[240px] w-full resize-none rounded-[32px] border border-white/40 bg-transparent p-8 text-xs font-normal text-white outline-none transition-colors duration-200 placeholder:text-white/80 focus:border-white"
                />
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    className="h-[60px] w-full rounded-[60px] border border-white/40 bg-transparent px-8 text-xs font-normal text-white outline-none transition-colors duration-200 placeholder:text-white/80 focus:border-white"
                />
            )}
        </div>
    );
};

export default FormField;