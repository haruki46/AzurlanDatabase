import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import React from "react";
export default function RarityDropdown() {
    const [selectedRarity, setSelectedRarity] = React.useState(new Set(["Rarity"]));
  const selectedValueRarity = React.useMemo(
    () => Array.from(selectedRarity).join(", ").replaceAll("_", " "),
    [selectedRarity]
  );
 return(
    <Dropdown className="bg-slate-900 flex items-center gap-4" placement="bottom-end">
  
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValueRarity}
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="bg-slate-900 left-0"
        aria-label="Rarity Sections"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedRarity}
        onSelectionChange={(keys) => setSelectedRarity(keys as Set<string>)}
      >
        <DropdownItem 
          key="Ultra Rare"
          startContent=""
        >  
          Ultra Rare</DropdownItem>
        <DropdownItem 
          key="Super Rare"
          startContent=""
        >
          Super Rare</DropdownItem>
        <DropdownItem key="Elite">Elite</DropdownItem>
        <DropdownItem key="Rare">Rare</DropdownItem>
        <DropdownItem key="Normal">normal</DropdownItem>
      </DropdownMenu>
      </Dropdown>
 )
}