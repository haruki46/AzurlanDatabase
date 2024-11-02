'use client'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Battleship} from "./asset/Battleship";
import {AddNoteIcon} from "./asset/iconship";
import React from "react";
export default function Home() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  //Select Menu
  const [selectedRarity, setSelectedRarity] = React.useState(new Set(["Rarity"]));
  const [selectedClass, setSelectedClass] = React.useState(new Set(["Classification"]));

  const selectedValueRarity = React.useMemo(
    () => Array.from(selectedRarity).join(", ").replaceAll("_", " "),
    [selectedRarity]
  );

  const selectedValueClass = React.useMemo(
    () => Array.from(selectedClass).join(", ").replaceAll("_", " "),
    [selectedClass]
  );
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-60 font-[family-name:var(--font-geist-sans)]">
      <Card className="text-white bg-slate-900  w-full max-w-[400px]">
        <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col ">
          <p className="text-2xl">Azur lane Database </p>
        </div>
        </CardHeader>
        <Divider/>
      <CardBody>
      <div className="flex w-full flex-wrap gap-4">
        <Input type="title" label="Ship Name" placeholder="Enter your email" />
        <Input type="img" label="Image Ship" placeholder="Enter your email" />
      <Dropdown className="bg-slate-900">
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValueRarity}
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="bg-slate-900"
        aria-label="Rarity Sections"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedRarity}
        onSelectionChange={(keys) => setSelectedRarity(keys as Set<string>)}
      >
        <DropdownItem 
          key="Ultra Rare"
          startContent={<Battleship className={iconClasses}/>}
        >  
          Ultra Rare</DropdownItem>
        <DropdownItem 
          key="Super Rare"
          startContent={<AddNoteIcon className={iconClasses}/>}
        >
          Super Rare</DropdownItem>
        <DropdownItem key="Elite">Elite</DropdownItem>
        <DropdownItem key="Rare">Rare</DropdownItem>
        <DropdownItem key="Normal">normal</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      <Dropdown className="bg-slate-900">
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValueClass}
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="bg-slate-900"
        aria-label="Rarity Sections"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedClass}
        onSelectionChange={(keys) => setSelectedClass(keys as Set<string>)}
      >
        <DropdownItem key="Destroyer">Destroyer</DropdownItem>
        <DropdownItem key="Light Cruiser">Light Cruiser</DropdownItem>
        <DropdownItem key="Heavy Cruiser">Heavy Cruiser</DropdownItem>
        <DropdownItem key="Large Cruiser">Large Cruiser</DropdownItem>
        <DropdownItem key="Battleship">Battleship</DropdownItem>
        <DropdownItem key="Battlecruiser">Battlecruiser</DropdownItem>
        <DropdownItem key="Aviation Battleship">Aviation Battleship</DropdownItem>
        <DropdownItem key="Aircraft Carrier">Aircraft Carrier</DropdownItem>
        <DropdownItem key="Light Aircraft Carrier">Light Aircraft Carrier</DropdownItem>
        <DropdownItem key="Submarine">Submarine</DropdownItem>
        <DropdownItem key="Submarine Carrier">Submarine Carrier</DropdownItem>
        <DropdownItem key="Repair Ship">Repair Ship</DropdownItem>
        <DropdownItem key="Munition Ship">Repair Ship</DropdownItem>
        <DropdownItem key="Guided-Missile Destroyer">Guided-Missile Destroyer</DropdownItem>
        <DropdownItem key="Sailing Frigate">Sailing Frigate</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </div>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
      </Card>
    </div>
  );
}
