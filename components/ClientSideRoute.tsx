"use client";

import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  route: string;
}

function ClientSideRoute({ children, route }: Props) {
  return <Link href={route}>{children}</Link>;
}

export default ClientSideRoute;
