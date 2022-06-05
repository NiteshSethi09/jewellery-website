import Button from './Button/Button';
import Input from './Input/Input';
import Textarea from './Textarea/Textarea';

const Form: React.FC = () => {
  return (
    <>
      <form
        method="post"
        className=" min-h-full rounded-2xl border-4 border-[#eec668] p-8"
      >
        <Input type="text" labelText="Name" classes="form-input" />
        <Input type="text" labelText="Phone Number" classes="form-input" />
        <Textarea labelText="Message" classes="form-input" />
        <Button
          value="Send"
          classes="border-[#000] rounded-full border-2 px-12 py-3"
        />
      </form>
    </>
  );
};

export default Form;
