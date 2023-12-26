import { Button, Result } from 'antd';
import { SchedulePropsData } from '../Types';
import './Success.css'


const Success = (props : SchedulePropsData) => (
    <Result className='success-container'
    status="success"
    title={`Thank you, ${props.fullName}. Your appointment request has been submitted.`}
    subTitle={`We will send you a confirmation email at ${props.email}.`}
   
  />
);

export default Success;
