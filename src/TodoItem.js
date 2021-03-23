import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    // �Ż�����
    this.handleLiDeleteClick = this.handleLiDeleteClick.bind(this);
  }

  handleLiDeleteClick() {
    // �ṹ��ֵ��ɾ������ ��Դ�ڸ�����ĺ���
    const { handleLiClick, index } = this.props;
    // ִ��ɾ��
    handleLiClick(index);
  }

  render() {

    const { content } = this.props;

    return (
      // ���ʱ����ɾ��
      <li onClick={this.handleLiDeleteClick}>
         {content}
      </li>
    )
  }
}

export default TodoItem;