import React from 'react';
import { Modal, Button } from 'antd';
import {CreatePostForm} from './CreatePostForm';

export class CreatePostButton extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });

    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  saveFormRef = (formInstance) => {
    this.form = formInstance;
  }

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Create New Post
        </Button>
        <Modal
          title="Create New Post"
          visible={visible}
          onOk={this.handleOk}
          okTest="Create"
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <CreatePostForm ref={this.saveFormRef}/>
        </Modal>
      </div>
    );
  }
}

