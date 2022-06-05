interface ButtonProps {
  value: string;
  classes?: string;
}
const Button: React.FC<ButtonProps> = ({ value, classes }) => {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <input
          type="button"
          value={value}
          className={`cursor-pointer hover:bg-black hover:text-white ${classes}`}
        />
      </div>
    </>
  );
};
export default Button;
