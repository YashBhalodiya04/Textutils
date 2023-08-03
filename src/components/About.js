import React from 'react'

export default function About(props) {

  // const [mystyle, setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })

  let mystyle = {
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'#071f40':'white',
  }
  
  
  return (
    <div>
      <div className="container py-2">
      <h2 className="py-1" style={mystyle}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <p>Textutils gives you to a way to analyze your text quickly and efficiently. Be it word count, Charachters count or </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <p>Textutils is a free Charachter counter tool that provides instant Charachter count & word count statistics for a given text. Textutils reports the number of words and Charachter. Thus it is suitable for writing text with word/ Charachter limit.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatoble</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <p>This word counter software works in any web browsers such as Crome, Firefox, Inter Explorer, Safari, Opera. It suits to count Charachter in facebook, blog, books, excel document, pdf document, essays, etc.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
