import React, { Component, Fragment } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };
    // 优化执行性能
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      // list补充输入值
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      // 接受input框输入的值
      inputValue: e.target.value
    })
  }

  handleLiClick(index) {
    // 操作state推荐做法  拷贝一份副本
    const list = [...this.state.list];
    // 去除数组中的某个值
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  getTodoListItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            key={index}
            index={index}
            content={item}
            // 删除函数  父组件传递给子组件props，之后子组件传参回来，实现删除
            handleLiClick={this.handleLiClick}
          />
        )
      })
    )
  }

  render() {
    return (
      // 去掉外围的div标签 用React.Fragment替代
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className="red-btn" onClick={this.handleButtonClick}>添加</button>
        </div>
        <ul> {this.getTodoListItem()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
