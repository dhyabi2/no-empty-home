import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Trash2 } from "lucide-react";

const WishlistItem = ({ item, onRemove }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{item.name}</span>
          <Heart className="h-5 w-5 text-red-500 fill-current" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <p className="font-semibold mb-4">{item.points} points</p>
        <div className="flex justify-between">
          <Button variant="outline">View Details</Button>
          <Button variant="ghost" onClick={() => onRemove(item.id)}>
            <Trash2 className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WishlistItem;