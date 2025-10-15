"use client";

import { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import React, { useActionState, useRef, useState, useTransition } from "react";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { BarLoader } from "react-spinners";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SaveKegiatan } from "@/lib/action";

const CreateFormKegiatan = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return;

    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);

    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();

        if (!response.ok) {
          setMessage(data.message || "Gagal mengunggah file");
          return;
        }

        const img = data as PutBlobResult;
        setImage(img.url);
      } catch (error) {
        console.error("Upload error:", error);
        setMessage("Terjadi kesalahan saat upload.");
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${image}`, {
          method: "DELETE",
        });

        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [state, formAction, isPending] = useActionState(
    SaveKegiatan.bind(null, image),
    null,
  );

  return (
    <form action={formAction}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <label
            htmlFor="input-file"
            className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative"
          >
            <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
              {pending ? <BarLoader /> : null}

              {image ? (
                <button
                  type="button"
                  onClick={() => deleteImage(image)}
                  className="flex items-center justify-center bg-transparent size-6 rounded-sm absolute right-1 top-1 text-white hover:bg-red-400 hover:text-white"
                >
                  <IoTrashOutline className="size-4 text-transparent hover:text-white" />
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <IoCloudUploadOutline className="size-8" />

                  <p className="mb-1 text-sm font-bold">select image</p>
                  {message ? (
                    <p className="text-xs text-red-500">{message}</p>
                  ) : (
                    <p className="text-xs">
                      SVG, PNG, JPG, GIF, or Others (max: 4MB)
                    </p>
                  )}
                </div>
              )}
            </div>

            {!image ? (
              <input
                type="file"
                id="input-file"
                ref={inputFileRef}
                onChange={handleUpload}
                className="hidden"
              />
            ) : (
              <Image
                src={image}
                alt="image"
                width={640}
                height={360}
                className="rounded-md  absolute aspect-video object-cover"
              />
            )}
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input name="title" placeholder="Title" />
            <span className="text-red-500">{state?.error?.title}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Alt</Label>
            <Input name="alt" placeholder="Alt" />
            <span className="text-red-500">{state?.error?.alt}</span>
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateFormKegiatan;
