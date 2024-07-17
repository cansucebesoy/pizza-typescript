import { FormGroup, Input, Label } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useState } from "react";

export default function SizeSelection({ setSize, dough, setDough }) {
  const handleSizeClick = (e) => {
    setSize(e.target.value);
  };

  const handleDoughClick = (e) => {
    setDough(e.target.value);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-2/3 xl:w-2/5 px-4 flex">
        <div className="w-1/2">
          <h3 className="font-bold text-lg my-4">
            Boyut Seç <span className="text-[#CE2829]">*</span>
          </h3>
          <div className="text-sm space-y-2 flex">
            <FormGroup className="flex justify-start pl-0" check>
              <Label for="sizeRadio1" check className="flex items-center mt-2">
                <Input
                  className="hidden peer"
                  data-cy="kucuk-radio"
                  value="Küçük"
                  onClick={handleSizeClick}
                  id="sizeRadio1"
                  name="sizeRadio"
                  type="radio"
                />
                <div className="w-10 h-10 bg-[#FAF7F2] peer-checked:bg-[#FDC913] flex items-center justify-center rounded-full">
                  S
                </div>
              </Label>
            </FormGroup>
            <FormGroup className="flex justify-start" check>
              <Label for="sizeRadio2" check className="flex items-center">
                <Input
                  className="hidden peer"
                  data-cy="orta-radio"
                  value="Orta"
                  onClick={handleSizeClick}
                  id="sizeRadio2"
                  name="sizeRadio"
                  type="radio"
                />
                <div className="w-10 h-10 bg-[#FAF7F2] peer-checked:bg-[#FDC913] flex items-center justify-center rounded-full">
                  M
                </div>
              </Label>
            </FormGroup>
            <FormGroup className="flex justify-start" check>
              <Label for="sizeRadio3" check>
                <Input
                  className="hidden peer"
                  data-cy="buyuk-radio"
                  value="Büyük"
                  onClick={handleSizeClick}
                  id="sizeRadio3"
                  name="sizeRadio"
                  type="radio"
                />
                <div className="w-10 h-10 bg-[#FAF7F2] peer-checked:bg-[#FDC913] flex items-center justify-center rounded-full">
                  L
                </div>
              </Label>
            </FormGroup>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="font-bold text-lg my-4">
            Hamur Seç <span className="text-[#CE2829]">*</span>
          </h3>
          <div>
            <Dropdown className="w-full" isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                data-cy="dough-toggle"
                className="w-full flex space-between items-center"
                size="sm"
                caret
              >
                <div className="w-full text-start ">
                  {!dough ? "Hamur Kalınlığı Seç" : dough}
                </div>
              </DropdownToggle>
              <DropdownMenu className="w-full bg-[#FAF7F2]">
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
      </div>
    </div>
  );
}
