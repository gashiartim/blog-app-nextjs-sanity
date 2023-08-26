import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-sm text-[#F7AB0A] " />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
