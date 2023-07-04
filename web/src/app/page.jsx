"use client";

import { Header } from "@/components/Header";
import { NoTasks } from "@/components/NoTasks";
import { fetchData } from "@/utils/fetchData";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchData(setData);
  }, []);

  const handleEditClick = () => {
    setEdit(!edit);
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
                  className="flex items-center justify- w-full py-2 px-4 bg-dark-900 rounded-2xl text-light"
                >
                  <input
                    type="text"
                    value={task.title}
                    className={
                      !edit
                        ? "flex-1 bg-transparent text-lg outline-none cursor-not-allowed"
                        : "flex-1 bg-transparent text-lg outline-none text-pink"
                    }
                    readOnly={!edit}
                  />
                  <div className="flex gap-4 text-lg font-bold">
                    <button
                      onClick={() => handleEditClick(!edit)}
                      className="bg-gradient-to-tr from-pink to-purple bg-clip-text text-transparentWebkit text-pink uppercase duration-500 cursor-pointer hover:text-pink/80 active:text-pink/60"
                    >
                      {edit ? "Save" : "Edit"}
                    </button>
                    <button className="text-crimson uppercase duration-500 cursor-pointer hover:text-crimson/80 active:text-crimson/60">
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
