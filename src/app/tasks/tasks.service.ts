import { computed, Injectable, signal } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTask(userId: string) {
    return computed(() =>
      this.tasks().filter((task) => task.userId === userId)
    );
  }

  addTask(taskData: NewTaskData, userId: string): void {
    const newTask = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    };

    this.tasks.update((values) => [newTask, ...values]);
    this.saveTask();
  }

  removeTask(id: string): void {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
    this.saveTask();
  }

  private saveTask(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
