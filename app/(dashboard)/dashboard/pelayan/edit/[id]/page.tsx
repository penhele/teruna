import EditPelayan from "@/components/admin/edit-pelayan";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const pelayanId = (await params).id;
  if (!pelayanId) return notFound();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EditPelayan pelayanId={pelayanId} />
    </Suspense>
  );
};

export default EditPage;
