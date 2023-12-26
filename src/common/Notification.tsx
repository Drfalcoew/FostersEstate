import React from 'react';
import { Button, notification, Space } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    type: NotificationType;
    message: string;
    description: string;
  }

const Notification: React.FC<NotificationProps> = ({ type, message, description }) => {
      const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: message,
      description:
        description,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon}>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
      </Space>
    </>
  );
};

export default Notification;
