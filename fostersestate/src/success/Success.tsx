import { Button, Result } from 'antd';
import { SchedulePropsData } from '../Types';
import './Success.css'


const Success = (props : SchedulePropsData) => (
    <Result className='success-container'
    status="success"
    title={`Thank you, ${props.fullName}. Your appointment has been scheduled.`}
    subTitle={`Order number: ${props.orderNumber}. We will send you a confirmation email at ${props.email}.`}
   
  />
);

export default Success;
