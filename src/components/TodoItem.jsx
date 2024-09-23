import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b" dir="rtl">
      <div className="flex items-center">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="ml-2"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
        >
          {todo.text}
        </label>
      </div>
      <Button variant="ghost" size="sm" onClick={() => onDelete(todo.id)}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
