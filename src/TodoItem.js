import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    // 优化性能
    this.handleLiDeleteClick = this.handleLiDeleteClick.bind(this);
  }

  handleLiDeleteClick() {
    // 结构赋值出删除函数 来源于父组件的函数
    const { handleLiClick, index } = this.props;
    // 执行删除
    handleLiClick(index);
  }

  render() {

    const { content } = this.props;

    return (
      // 点击时触发删除
      <li onClick={this.handleLiDeleteClick}>
         {content}
      </li>
    )
  }
}

export default TodoItem;