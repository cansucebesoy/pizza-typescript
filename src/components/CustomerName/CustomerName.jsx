import { FormGroup, Input } from "reactstrap";
export default function CustomerName({ name, setName }) {
  const handleInput = (e) => {
    setName(e.target.value.trim());
  };
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4">
        <h3 className="text-lg font-bold mt-4">
          İsminiz
          <span className="text-sm font-normal text-[#CE2829] ml-4">
            {name.length < 3 ? "En az 3 karakter girilmelidir" : ""}
          </span>
        </h3>
        <FormGroup>
          <Input
            data-cy="customer-name-text"
            className="bg-[#FAF7F2]"
            onChange={handleInput}
            invalid={name.length < 3}
            id="exampleText"
            name="text"
            type="text"
            placeholder="İsminiz"
          />
        </FormGroup>
      </div>
    </div>
  );
}
