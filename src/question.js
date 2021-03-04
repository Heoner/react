import React from 'react';
import QuestionButton from './QuestionButton';

class Question extends React.Component {
  constructor() {
    super();
    this.state = { 
      
    };
  }


  render() {
    
    return (
      <div className='questionPlace'>
          <h3>
            {this.props.question.id}.{this.props.question.chapter}
            <br />
            {this.props.question.question}
            
          </h3>
          {this.props.question.answers.map((answer) => (
            <QuestionButton
              correctAnswer={this.props.question.correctAnswer}
              answerText={answer}
            ></QuestionButton>
          ))}
        
      </div>
    );
  }
}

export default Question;
