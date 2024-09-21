import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Bell } from "lucide-react";

const PushNotificationSystem = () => {
  const [permission, setPermission] = useState('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      if (result === 'granted') {
        toast.success("Push notifications enabled!");
      } else {
        toast.error("Push notifications not allowed.");
      }
    }
  };

  const sendTestNotification = () => {
    if (permission === 'granted') {
      new Notification('Test Notification', {
        body: 'This is a test push notification.',
        icon: '/favicon.ico'
      });
    } else {
      toast.error("Push notifications are not enabled.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Push Notifications</h2>
      {permission === 'default' && (
        <Button onClick={requestPermission}>
          <Bell className="mr-2 h-4 w-4" />
          Enable Push Notifications
        </Button>
      )}
      {permission === 'granted' && (
        <Button onClick={sendTestNotification}>Send Test Notification</Button>
      )}
      {permission === 'denied' && (
        <p className="text-sm text-red-500">
          Push notifications are blocked. Please enable them in your browser settings.
        </p>
      )}
    </div>
  );
};

export default PushNotificationSystem;