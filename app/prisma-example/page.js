import React from "react";
import prisma from "../utils/db";

// Function to handle Prisma tasks (fetch and create)
const prismaHandlers = async () => {
  console.log("prisma example");

  // Fetch all tasks ordered by creation date
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Return fetched tasks
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }
};

// Component for rendering PrismaPage
const PrismaPage = async () => {
  // Fetch tasks from prismaHandlers
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text-7xl">PrismaPage</h1>
      {tasks.length === 0 ? (
        <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
      ) : (
        tasks.map((task) => {
          return (
            <h2 key={task.id} className="text-xl py-2">
              {task.content}
            </h2>
          );
        })
      )}
    </div>
  );
};

export default PrismaPage;
