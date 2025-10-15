import EditTeruna from "@/components/admin/edit-teruna";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Edit Teruna",
};

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const terunaId = (await params).id;
  if (!terunaId) return notFound();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EditTeruna terunaId={terunaId} />
    </Suspense>
  );
};

export default EditPage;
