import { NoteBlank } from "@phosphor-icons/react";

export function NoTasks() {
  return (
    <div className="flex flex-col items-center w-full">
      <NoteBlank className="w-44 h-44 text-grey/30" />
      <h3 className="text-5xl text-grey/30 font-normal">No Tasks</h3>
    </div>
  );
}
