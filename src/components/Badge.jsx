const Badge = ({ children, css }) => (
    <span className={`${css} text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold rounded`}>{children}</span>
)

export default Badge