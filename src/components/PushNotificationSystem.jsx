import React, { useState, useEffect } from 'react';
import { Toast } from "@/components/ui/toast";
import { Bell } from "lucide-react";

const PushNotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating receiving notifications
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        title: 'إشعار جديد',
        message: 'لديك عرض جديد متاح!',
      };
      setNotifications(prev => [...prev, newNotification]);
    }, 10000); // New notification every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" dir="rtl">
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          title={notification.title}
          description={notification.message}
          icon={<Bell className="h-4 w-4" />}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

export default PushNotificationSystem;
