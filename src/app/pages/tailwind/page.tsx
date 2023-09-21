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

      <div className="flex flex-col gap-5 px-40">
        <Card update={update} />
        <div className="w-1/4">
          <Button
            title={update ? "BG-Gray" : " BG-Neutral"}
            style={update ? "success" : "primary"}
            size="large"
            onClick={() => setUpdate(!update)}
            className="transition duration-300 ease-in-out active:scale-105 active:duration-100"
          />
        </div>
      </div>
    </div>
  );
}
