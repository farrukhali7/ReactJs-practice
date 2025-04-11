import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState(null)
  const [index, setIndex] = useState(0)
  const [error, setError] = useState(false)
  const [result, setResult] = useState(0);

  const input = useRef([]);
  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setQuestions(res)
      }).catch((err) => {
        console.log(err);
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  function shuffleArray(arr) {
    const emptyArr = []
    const shuffleArr = []
    for (let i = 0; i < arr.length; i++) {
      const randomNumber = Math.floor(Math.random() * arr.length)
      if (emptyArr.includes(randomNumber)) {
        i--
      } else {
        emptyArr.push(randomNumber)
        shuffleArr[randomNumber] = arr[i]
      }
    }
    return shuffleArr
  }

  function nextQuestion() {
    const selectedOption = input.current.find(item => item && item.checked);
    if (!selectedOption) {
      Swal.fire({
        icon: "error",
        title: "Please select an answer",
        text: "Input field can't be left empty!",
      });
    }

    console.log(selectedOption.value);

    if (questions[index].correctAnswer === selectedOption.value) {
      setResult(result + 10)
    }

    index < questions.length - 1 ? setIndex(index + 1) : null
  }

  return (
    <>
      <h1 className='text-center mt-3 bg-dark text-white p-4 rounded'>QUIZ APP</h1>
      {loading && <div className="d-flex justify-content-center mt-7">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}
      {error && <h1 className="text-center text-danger">Error occurred</h1>}
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        {questions && <div className="bg-gradient shadow-lg rounded p-4 w-75" style={{ background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)' }}>
          <div className="bg-white text-dark p-4 rounded mb-4">
            <h2 className="mb-0">{`Q${index + 1})`} {questions[index].question.text}</h2>
          </div>
          {shuffleArray([...questions[index].incorrectAnswers, questions[index].correctAnswer]).map((item, idx) => {
            return (
              <div key={idx} className="text-dark fw-bold mt-3 bg-light p-3 rounded" style={{ border: '2px solid #2575fc' }}>
                <input type="radio" name="question" value={item} id={item} ref={el => input.current[idx] = el} />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
          <h3 className="d-flex justify-content-end mt-4">
            <span className="bg-success text-white p-2 fw-bold rounded">
              Result: {result} / 100
            </span>
          </h3>
          <button onClick={nextQuestion} className="btn btn-gradient w-100 mt-4" style={{ background: '#2575fc', color: 'white', fontWeight: 'bold', height:'50px', fontSize:'20px' }}>
            Next Question
          </button>
        </div>}
      </div>
    </>
  );
}

export default App;

