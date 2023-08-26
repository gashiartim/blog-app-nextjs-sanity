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
        <Link href="/" className="text-[#30EFA6] flex items-center">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-sm text-[#30EFA6] " />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
