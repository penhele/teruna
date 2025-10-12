import { DeletePengurus } from "@/lib/action";
import React from "react";
import { IoPencil, IoPencilOutline, IoTrashOutline } from "react-icons/io5";

type DeleteButtonProps = {
  id: string;
  action: (id: string) => Promise<void>; // server action mana pun
};

export const DeleteButton = ({ id, action }: DeleteButtonProps) => {
  const deleteWithId = action.bind(null, id);

  return (
    <form action={deleteWithId}>
      <button
        type="submit"
        className="p-1 hover:bg-gray-200 rounded-sm cursor-pointer"
      >
        <IoTrashOutline />
      </button>
    </form>
  );
};

export const UpdateButton = ({ id }: { id: string }) => {
  // const deletePengurusWithId = DeletePengurus.bind(null, id)

  return (
    <form action="">
      <button
        type="submit"
        className="p-1 hover:bg-gray-200 rounded-sm cursor-pointer"
      >
        <IoPencilOutline />
      </button>
    </form>
  );
};
