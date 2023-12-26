import React from 'react';
import { Modal, Spin } from 'antd';

interface LoadingModalProps {
  visible: boolean;
  closeModal: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = (props: LoadingModalProps) => (
  <Modal
    title={null}
    open={props.visible}
    centered
    closable={false}
    maskClosable={false}
    className='loading-modal' // Add a custom class for styling
    cancelButtonProps={{ style: { display: 'none' } }}
    okButtonProps={{ style: { display: 'none' } }}
  >
    <div style={{ textAlign: 'center' }}>
      <p style={{ marginTop: 16, fontSize: 20 }}>Scheduling Appointment...</p>
      <Spin style={{ margin: 10 }} size="large" />
    </div>
  </Modal>
);

export default LoadingModal;
