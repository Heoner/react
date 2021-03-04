import React from 'react';

class QuestionButton extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedAnswer: undefined
    };
  }

  setAnswer = (e) => {
    this.setState({ selectedAnswer: e.target.value });
  };

  getValue = (text) => {
    return text.slice(0, 1);
  };

  setStyle = () => {
    if (this.state.selectedAnswer === undefined){
      return 'questionButton'
    }else if(this.state.selectedAnswer === this.props.correctAnswer){
      return 'goodAnswer'
    }else return 'wrongAnswer'
  }


  render() {
    return (
      <div>
          <button
            value={this.getValue(this.props.answerText)}
            className={this.setStyle()}
            onClick={(e) => this.setAnswer(e)}
          >
            {this.props.answerText}
          </button>
            <div>
            
            </div>
      </div>
    );
  }
}

export default QuestionButton;
