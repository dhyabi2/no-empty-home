import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between py-2 border-b">
      <div className="flex items-center">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <Button variant="ghost" size="icon" onClick={() => onDelete(todo.id)}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
};

export default TodoItem;