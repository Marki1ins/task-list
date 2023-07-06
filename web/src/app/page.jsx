"use client";

import { DeleteButton } from "@/components/DeleteButton";
import { Header } from "@/components/Header";
import { NoTasks } from "@/components/NoTasks";
import { TaskTitleInput } from "@/components/TaskTitleInput";
import { fetchData } from "@/utils/fetchData";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  const handleUpdate = async () => {
    await fetchData(setData);
  };

  return (
    <main className="gap-2 min-w-full min-h-screen bg-dark-700 text-white">
      {/* Criar um botão para mudar tema para Dark/Light */}

      <div className="flex flex-col items-start justify-center gap-10 w-2/3 mx-auto">
        <Header />
        <div className="w-full">
          <h2 className="text-2xl text-grey font-light mb-2">Tasks</h2>
          <div className="flex flex-col items-start justify-center gap-3">
            {data.length === 0 ? (
              <NoTasks />
            ) : (
              data.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-dark-900 rounded-2xl text-light"
                >
                  <TaskTitleInput
                    value={task.title}
                    taskId={task.id}
                    onUpdate={handleUpdate}
                  />
                  <DeleteButton taskId={task.id} onUpdate={handleUpdate} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
