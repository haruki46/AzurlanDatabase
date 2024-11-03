import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User} from "@nextui-org/react";
import React from "react";
export default function NationsDropdown() {
    const [selectedRarity, setSelectedRarity] = React.useState(new Set(["Nations"]));
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
          key="Sakura Empire"
          startContent=""
        ><User
        name=""
        avatarProps={{
          size: "lg",
          radius: "sm",
          className: "h-6 w-6 justify-start",
          src: "https://azurlane.netojuu.com/images/thumb/e/e5/Jp_1.png/50px-Jp_1.png",
        }}
      />  
          Sakura Empire</DropdownItem>
        <DropdownItem 
          key="Eagle Union"
          startContent=""
        ><User
        name=""
        classNames={{
          name: "text-default-600",
          description: "text-default-500",
        }}
        avatarProps={{
          size: "lg",
          radius: "sm",
          className: "h-6 w-6 justify-start",
          src: "https://azurlane.netojuu.com/images/thumb/1/17/Us_1.png/50px-Us_1.png",
        }}
      />
          Eagle Union</DropdownItem>
        <DropdownItem 
          key="Royal Navy"
          startContent=""
          >
            <User
              name=""
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "lg",
                radius: "sm",
                className: "h-6 w-6 justify-start",
                src: "https://azurlane.netojuu.com/images/thumb/9/99/En_1.png/50px-En_1.png",
              }}
            />Royal Navy</DropdownItem>
        <DropdownItem 
          key="Iron Blood"
          startContent=""
          >
            <User
              name=""
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "lg",
                radius: "sm",
                className: "h-6 w-6 justify-start",
                src: "https://azurlane.netojuu.com/images/thumb/0/04/De_1.png/50px-De_1.png",
              }}
            />Iron Blood</DropdownItem>
        <DropdownItem 
          key="Dragon Empery"
          startContent=""
          >
            <User
              name=""
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "lg",
                radius: "sm",
                className: "h-6 w-6 justify-start",
                src: "https://azurlane.netojuu.com/images/thumb/2/26/Cn_1.png/50px-Cn_1.png",
              }}
            />Dragon Empery</DropdownItem>
        <DropdownItem 
          key="Northern Parliament"
          startContent=""
          >
            <User
              name=""
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "lg",
                radius: "sm",
                className: "h-6 w-6 justify-start",
                src: "https://azurlane.netojuu.com/images/thumb/0/0d/Sn_1.png/50px-Sn_1.png",
              }}
            />Northern Parliament</DropdownItem>
        <DropdownItem 
          key="Iris Libre"
          startContent=""
          >
            <User
              name=""
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "lg",
                radius: "sm",
                className: "h-6 w-6 justify-start",
                src: "https://azurlane.netojuu.com/images/thumb/7/78/Ff_1.png/50px-Ff_1.png",
              }}
            />Iris Libre</DropdownItem>
        <DropdownItem 
          key="Vichya Dominion"
          startContent=""
          >
            <User
              name=""
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "lg",
                radius: "sm",
                className: "h-6 w-6 justify-start",
                src: "https://azurlane.netojuu.com/images/thumb/a/a1/Vf_1.png/50px-Vf_1.png",
              }}
            />Vichya Dominion</DropdownItem>
        <DropdownItem 
          key="Sardegna Empire"
          startContent=""
          >
            <User
              name=""
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "lg",
                radius: "sm",
                className: "h-6 w-6 justify-start",
                src: "https://azurlane.netojuu.com/images/thumb/f/f1/Rn_1.png/50px-Rn_1.png",
              }}
            />
          Sardegna Empire
          </DropdownItem>
      </DropdownMenu>
      </Dropdown>
 )
}