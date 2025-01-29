import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();
  isAddingTask = signal(false);

  tasks = signal([
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

  selectedUserTasks = computed(() =>
    this.tasks().filter((task) => task.userId === this.userId())
  );

  onCompleteTask(id: string): void {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(taskData: NewTaskData) {
    const newTask = {
      id: new Date().getTime().toString(),
      userId: this.userId(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    };

    this.tasks.update((values) => [newTask, ...values]);

    this.isAddingTask.set(false);
  }
}
