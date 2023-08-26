import React, { PropsWithChildren, Suspense } from "react";

function PreviewSuspense({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<div>Loading preview data</div>}>{children}</Suspense>
  );
}

export default PreviewSuspense;
