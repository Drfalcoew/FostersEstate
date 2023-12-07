import { Calendar, Typography } from 'antd';
import { ScheduleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Schedule = () => {
  return (
    <div>
      <Title level={2}>
        <ScheduleOutlined /> Schedule
      </Title>
      <Calendar />
    </div>
  );
};

export default Schedule;
