import React from 'react';

import Button from '../button/Button';

import './InfoContent.css';

class InfoContent extends React.Component {
  state = {
    viewContent: false,
  };

  toggleContent() {
    const wrapper = document.querySelector('.overflow-wrapper');

    if (this.state.viewContent) {
      wrapper.style.height = '150px';
    } else {
      wrapper.style.height = 'auto';
      const height = wrapper.clientHeight;
      wrapper.style.height = '150px';
      setTimeout(() => {
        wrapper.style.height = `${height}px`;
      }, 0);
    }

    this.setState({ viewContent: !this.state.viewContent });
  }

  render(state) {
    console.log(state);
    return (
      <div
        className={`overflow-wrapper ${this.state.viewContent ? 'show' : ''}`}
      >
        <p>{this.props.content}</p>

        <div className="button-wrapper" onClick={this.toggleContent.bind(this)}>
          <Button
            label={this.state.viewContent ? 'See Less' : 'See More'}
            small={true}
            outlined={true}
          />
        </div>
      </div>
    );
  }
}

export default InfoContent;
