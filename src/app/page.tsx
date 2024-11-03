'use client'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Button} from "@nextui-org/react";
import React from "react";
import DropdownTest, {} from '../../components/Nations'
import ShipClass_DropDown from "../../components/Ship_Classification";
import RarityDropdown from "../../components/rarity";
export default function Home() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
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
        <Input type="title" label="Ship Name" placeholder="Enter Ship name" />
        <Input type="img" label="Image Ship" placeholder="Enter Image url" />
      <RarityDropdown/>
      <ShipClass_DropDown/>
      <DropdownTest/>
      <div className="w-full flex justify-center">
        <Button color="primary">
          Submit
        </Button>
      </div>
      </div>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/haruki46/AzurlanDatabase/tree/master"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
      </Card>
    </div>
  );
}
