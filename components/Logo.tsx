import Image from "next/image";
import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        alt="logo"
        src="https://links.papareact.com/1m8"
      />
      <>{renderDefault?.(props)}</>
    </div>
  );
}

export default Logo;
