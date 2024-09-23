import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

const SocialSharing = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Share2 className="ml-2" />
          شارك مكافآتك وإنجازاتك
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">شارك نجاحاتك مع أصدقائك واكسب نقاطًا إضافية!</p>
        <Button className="w-full">مشاركة الآن</Button>
      </CardContent>
    </Card>
  );
};

export default SocialSharing;
