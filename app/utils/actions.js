    'use server';

import prisma from './db';
import { revalidatePath } from 'next/cache';

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get('content');
  // some validation here

  await prisma.task.create({
    data: {
      content,
    },
  });

  revalidatePath('/tasks');
};

export const deleteTask = async (formData) => {
    const id = formData.get('id');
    await prisma.task.delete({ where: { id } });
    revalidatePath('/tasks');
  };