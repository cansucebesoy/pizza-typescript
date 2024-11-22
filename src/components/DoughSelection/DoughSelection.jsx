import { FormGroup, Input, Label } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
export default function DoughSelection({ dough, setDough }) {
  const handleDoughClick = (e) => {
    setDough(e.target.value);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="w-1/2">
      <h3 className="font-bold text-lg my-4">
        Hamur Seç <span className="text-[#CE2829]">*</span>
      </h3>
      <div>
        <Dropdown className="w-full" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            data-cy="dough-toggle"
            className="w-full flex space-between items-center bg-[#FAF7F2] border-none hover:bg-[#FDC913]"
            size="sm"
            caret
          >
            <div className="w-full text-middle text-[#5F5F5F] font-bold m-1">
              {!dough ? "Hamur Kalınlığı Seç" : dough}
            </div>
          </DropdownToggle>
          <DropdownMenu className="w-full bg-[#FAF7F2]  ">
            <DropdownItem
              data-cy="thin-dough"
              active={dough == "İnce"}
              value="İnce"
              onClick={handleDoughClick}
            >
              İnce
            </DropdownItem>
            <DropdownItem
              data-cy="medium-dough"
              active={dough == "Orta"}
              value="Orta"
              onClick={handleDoughClick}
            >
              Orta
            </DropdownItem>
            <DropdownItem
              data-cy="thick-dough"
              active={dough == "Kalın"}
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
}
