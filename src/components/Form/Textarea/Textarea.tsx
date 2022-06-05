interface TextareaProps {
  placeholder?: string;
  labelText?: string;
  classes?: string;
}

const Textarea: React.FC<TextareaProps> = ({ labelText, classes }) => {
  return (
    <>
      <div className="">
        {labelText && <label className="block opacity-60">{labelText}</label>}
        <textarea name="" id="" className={`resize-none ${classes}`} />
      </div>
    </>
  );
};

export default Textarea;
