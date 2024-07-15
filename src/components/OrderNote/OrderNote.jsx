import { FormGroup, Input, Label } from "reactstrap";

export default function OrderNote({ setNote }) {
  const handleChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4">
        <h3 className="text-lg font-bold mt-4">Sipariş Notu</h3>
        <FormGroup>
          <Input
            className="bg-[#FAF7F2]"
            onChange={handleChange}
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Siparişine eklemek istediğin bir not var mı ?"
          />
        </FormGroup>
      </div>
    </div>
  );
}
