import React from "react";
import prisma from "@/utils/db";

// Function to handle Prisma tasks (fetch and create)
const prismaHandlers = async () => {
  // Create a new task
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });

  // Fetch all tasks ordered by creation date
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // Return fetched tasks
  return allTasks;
};

// Component for rendering PrismaPage
const PrismaPage = async () => {
  // Fetch tasks from prismaHandlers
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text-7xl">PrismaPage</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaPage;
