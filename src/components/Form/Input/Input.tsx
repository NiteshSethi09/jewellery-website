interface InputProps {
  type: string;
  placeholder?: string;
  labelText?: string;
  classes?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  labelText,
  classes,
  type,
  value,
  placeholder,
}) => {
  return (
    <>
      <div className="mb-4">
        {labelText && <label className="block opacity-60">{labelText}</label>}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className={`${classes}`}
        />
      </div>
    </>
  );
};

export default Input;
