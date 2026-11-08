type IconProps = {
    size?: number | string;
    strokeWidth?: number | string;
    className?: string;
};

const Svg = ({ size = 24, strokeWidth = 1.6, className, children }: IconProps & { children: React.ReactNode }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {children}
    </svg>
);

/** $ inside a circle */
const Dollar = () => (
    <>
        <path d="M14.2 9.9c-.5-.7-1.3-1.1-2.2-1.1-1.3 0-2.3.7-2.3 1.7 0 2.3 4.7 1.2 4.7 3.5 0 1.1-1.1 1.8-2.4 1.8-1.1 0-2-.4-2.5-1.2" />
        <path d="M12 7.2v1.6M12 15.8v1.6" />
    </>
);

/** Circle with $ and an arrow leaving at the top-right (expense) */
export const ExpenseIcon = (props: IconProps) => (
    <Svg {...props}>
        <path d="M20.6 13.2A9 9 0 1 1 10.8 3.1" />
        <path d="M15 3h6v6M21 3l-6.5 6.5" />
        <Dollar />
    </Svg>
);

/** Circle with $ and a rotating arrow at the top-left (income) */
export const IncomeIcon = (props: IconProps) => (
    <Svg {...props}>
        <path d="M3.4 10.8A9 9 0 1 1 5.2 17.4" />
        <path d="M3 4v6.5h6.5" />
        <Dollar />
    </Svg>
);