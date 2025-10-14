import EditJadwalIbadah from "@/components/admin/edit-jadwal-ibadah";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Edit Jadwal Ibadah",
};

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const jadwalIbadahId = (await params).id;
  if (!jadwalIbadahId) return notFound();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EditJadwalIbadah jadwalIbadahId={jadwalIbadahId} />
    </Suspense>
  );
};

export default EditPage;
