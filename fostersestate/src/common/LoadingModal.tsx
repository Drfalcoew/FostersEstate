import { Spin, Modal } from 'antd'
import './Common.css'

const LoadingModal = (visible = true, time = 3) => {

    setTimeout(() => {
        visible = false
    }, time * 1000)


    return (
        <Modal
        open={visible}
        closable={false}
        footer={null}
        centered={true}
        width={100}
        style={{ textAlign: 'center' }}
        >
        <Spin size='large' />
        </Modal>
    )
}

export default LoadingModal;