"use client";

import Header from "../../components/header";
import Card from "../../components/card";
import Button from "@/app/components/button";
import { useState } from "react";

export default function Tailwind() {
  const [update, setUpdate] = useState(false);

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col gap-2">
        <Header level="h1" text="Tailwind CSS" />
        <Header
          level="h4"
          text="Inline Classes VS CSS StyleSheets"
          className="text-gray-400"
        />
      </div>

      <div className="px-40 gap-5 flex flex-col">
        <Card update={update} />
        <div className="w-1/4">
          <Button
            title={update ? "BG-Gray" : " BG-Neutral"}
            color="green"
            size="large"
            onClick={() => setUpdate(!update)}
            className="active:scale-105 transition ease-in-out duration-100"
          />
        </div>
      </div>
    </div>
  );
}
