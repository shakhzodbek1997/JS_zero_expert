'use strcit';

console.log('=================POL app===================');

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        // Get Answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write Option Number )`
            )
        );
        console.log(this.answer);
        
        // Register the Answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults();
        this.displayResults('string'); 
    },


    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            // Pool results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};
// poll.registerNewAnswer(); 

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3 ]}, 'string');
poll.displayResults.call({answers: [1,2,3,9,6,1]}, 'string')
poll.displayResults.call({answers: [1,2,3,9,6,1]})


