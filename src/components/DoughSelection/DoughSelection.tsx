import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";

type DoughSelectionProps = {
  dough: string;
  setDough: (value: string) => void;
};

const DoughSelection = ({ dough, setDough }: DoughSelectionProps) => {
  const { register, setValue, watch } = useForm();

  // Mevcut hamur değeri
  const selectedDough = watch("dough", dough);

  const handleDoughClick = (e: React.MouseEvent<HTMLElement>) => {
    const doughType = (e.target as HTMLButtonElement).value;
    setDough(doughType);
    setValue("dough", doughType);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="w-1/2">
      <h3 className="font-bold text-lg my-4 ">
        Hamur Seç <span className="text-[#CE2829]">*</span>
      </h3>
      <div>
        <Dropdown className="w-full py-2" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            data-cy="dough-toggle"
            className="w-full flex space-between items-center bg-[#FAF7F2] border-none hover:bg-[#FDC913]"
            size="sm"
            caret
          >
            <div className="w-full text-middle text-[#5F5F5F] font-bold m-1 ">
              {!selectedDough ? "Hamur Kalınlığı Seç" : selectedDough}
            </div>
          </DropdownToggle>
          <DropdownMenu className="w-full bg-[#FAF7F2]">
            <DropdownItem
              data-cy="thin-dough"
              active={selectedDough === "İnce"}
              value="İnce"
              onClick={handleDoughClick}
            >
              İnce
            </DropdownItem>
            <DropdownItem
              data-cy="medium-dough"
              active={selectedDough === "Orta"}
              value="Orta"
              onClick={handleDoughClick}
            >
              Orta
            </DropdownItem>
            <DropdownItem
              data-cy="thick-dough"
              active={selectedDough === "Kalın"}
              value="Kalın"
              onClick={handleDoughClick}
            >
              Kalın
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
export default DoughSelection;
