// Schedule.tsx

import React from 'react';
import { Form, Input, DatePicker, Button, notification } from 'antd';
import './Schedule.css';


const Schedule: React.FC = () => {

  const openNotification = (type: 'success' | 'error', message: string, description: string) => {
    notification[type]({
      message,
      description,
    });
  };

  /* onFinish function to send data to backend */
  const onFinish = (values: any) => {
    
    const fullName = values.fullName;
    const email = values.email;
    const phoneNumber = values.phoneNumber;
    const preferredDate = values.preferredDate;
    const comments = values.comments;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, phoneNumber, preferredDate, comments })
    };
    
    // Example success notification
    openNotification('success', 'Appointment Scheduled', 'Thank you for scheduling with FostersEstate. We will get in touch with you shortly.');

    // If there's an error, show an error notification
    // openNotification('error', 'Error', 'Failed to schedule appointment. Please try again.');
  }

  return (
    <div className='schedule-main-container'>
      <div className='schedule-image-container'>
        <div className='schedule-image'>
          <img src="formpage.jpg" alt="Cover" className="schedule-image" />
        </div>
      </div>
      <div className='schedule-container'>
        <h1>Schedule an Estate Sale</h1>
        <Form
          name="scheduleForm"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item className='schedule-form-item'
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className='schedule-form-item'
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className='schedule-form-item'
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className='schedule-form-item'
            label="Preferred Date"
            name="preferredDate"
            rules={[{ required: true, message: 'Please select a preferred date' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item className='schedule-form-item'
            label="Comments"
            name="comments"
            rules={[{ required: false }]}
          >
            <Input.TextArea style={{height: '70px'}} />
          </Form.Item>
          <Form.Item className='schedule-form-item'>
            <Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: "10px", height: "40px" }}>
              Schedule Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Schedule;
