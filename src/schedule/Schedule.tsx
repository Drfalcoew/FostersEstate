// Schedule.tsx

import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import './Schedule.css';
import { useNavigate } from 'react-router-dom';
import { EmailRecipient, SchedulePropsData } from '../Types';
import LoadingModal from '../common/LoadingModal';
import { notification } from 'antd';

interface ScheduleProps {
  onAppointmentScheduled: (data: SchedulePropsData) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onAppointmentScheduled }) => {

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const showLoadingModal = () => {
    setLoading(true);
  };

  const hideLoadingModal = () => {
    setLoading(false);
  };

  /* onFinish function to send data to backend */
  const onFinish = async (values: any) => {
    
    const fullName = values.fullName;
    const email = values.email;
    const phoneNumber = values.phoneNumber;
    const preferredDate = values.preferredDate;
    const comments = values.comments;

    let orderNumber = null;
    
    // const phoneNumber = values.phoneNumber;
    // const preferredDate = values.preferredDate;
    // const comments = values.comments;

    showLoadingModal();

    // Send email to customer
    const emailProps : EmailRecipient = {
      recipientEmail: email,
      recipientName: fullName,
      phoneNumber: phoneNumber,
      subject: "Your appointment has been scheduled",
      message: `Thank you, ${fullName}. Please wait for a confirmation email from us.`,
      comments: comments,
      address: values.address,
      preferredDate: preferredDate,
    };

    // Sending email with default subject and message
    try {

      console.log('Sending email to customer with api url: ', process.env.REACT_APP_API_URL || 'http://localhost:8080');

      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

      const response = await fetch(`${apiUrl}/api/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailProps),
      });

      // Check if the response status is OK (status code 2xx)
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        orderNumber = result.orderNumber;
      } else {
        // If the response status is not OK, handle the error
        console.error('Error:', response.status, response.statusText);
        // Show an error notification
        notification.error({
          message: 'Error',
          description: `Failed to schedule appointment: ${response.statusText}`,
        })
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // Show an error notification
      notification.error({
        message: 'Fetch Error',
        description: 'Failed to fetch data. Please try again later.',
      });
      return;
    } finally {
      hideLoadingModal();
    }
    
 
    if (orderNumber) { // This navigates to the success page
      onAppointmentScheduled({
        fullName: values.fullName,
        email: values.email,
        orderNumber: orderNumber,
      });

      navigate('/success');
    }
  }

  return (
    <div className='schedule-main-container'>
      <div className='schedule-image-container'>
        <div className='schedule-image'>
          <img src="covers/fosters_estate_8.jpg" alt="Cover" className="schedule-image" />
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
            label="Address (Street, City, State, Zip)"
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input allowClear={true}/>
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
            rules={[{ required: false, message: 'Please enter any comments', max: 200 }]}
          >
            <Input.TextArea style={{height: '70px', maxHeight: '200px'}} />
          </Form.Item>
          <Form.Item className='schedule-form-item'>
            <Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: "10px", height: "40px" }}>
              Schedule Now
            </Button>
          </Form.Item>
        </Form>
      </div>
      <LoadingModal visible={loading} closeModal={hideLoadingModal} />
    </div>
  );
};

export default Schedule;
