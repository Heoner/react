import React from 'react';
import Question from './question';

class Generator extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNumber: '',
      questionsAmount: '',
      baseLength: 200      
    };
  }

  losuj = () => {       
    let tabOfNumber = []
    while (tabOfNumber.length<this.state.questionsAmount){
        let numer = Math.ceil(Math.random()*this.state.baseLength)
        if(tabOfNumber.includes(numer)===true){
            continue;
        }else
        tabOfNumber.push(numer)
    }
        this.setState({questionNumber: tabOfNumber})
}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const questionBase = [
      {
        id: 1,
        chapter: 'Intensywna terapia',
        question: 'Skala Glasgow-Blatchford dotyczy chorych:',
        answers: [
          'A. z ostrym zapaleniem trzustki.',
          'B. po urazie głowy.',
          'C. z pozaszpitalnym zapaleniem płuc',
          'D. z krwawieniem do przewodu pokarmowego.',
          'E. we wstrząsie septycznym',
        ],
        correctAnswer: 'D',
      },
      {
        id: 2,
        chapter: 'Psychiatria',
        question:
          'Życzeniowe przekształcanie przeżyć, zachowań, oczekiwań na przyszłość pod wpływem nastawień emocjonalnych, które zwykle nie są odzwierciedleniem rzeczywistości to:',
        answers: [
          'A. syntymia.',
          'B. katatymia.',
          'C. hipotymia',
          'D. atymia.',
          'E. hipertymia.',
        ],
        correctAnswer: 'B',
      },
    ];
    
    return (
      <div>
        <div className='Generator'>
          <form className="selectBox">
            <select
              name='questionsAmount'
              value={this.state.questionsAmount}
              onChange={this.handleChange}
            >
              <option value=''>--Wybierz ilość pytań--</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
              <option value='150'>150</option>
              <option value='200'>200</option>
            </select>
          </form>
          <button onClick={this.losuj}>Generuj</button>
         
        </div> <h1>{this.state.questionNumber}</h1>
        {questionBase.map((question, id) => (
          <Question question={question} key={id}></Question>
        ))}
      </div>
    );
  }
}

export default Generator;
