import { useState, useEffect } from 'react'
import { diffLines } from 'diff'
import './App.css'

function App() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [differences, setDifferences] = useState([])

  // Load default files on component mount
  useEffect(() => {
    const loadDefaultFiles = async () => {
      try {
        const [originalResponse, modifiedResponse] = await Promise.all([
          fetch('/lorem-original.txt'),
          fetch('/lorem-modified.txt')
        ])
        
        const originalText = await originalResponse.text()
        const modifiedText = await modifiedResponse.text()
        
        setText1(originalText)
        setText2(modifiedText)
        
        // Automatically show differences
        const diff = diffLines(originalText, modifiedText)
        setDifferences(diff)
      } catch (error) {
        console.error('Error loading default files:', error)
      }
    }
    
    loadDefaultFiles()
  }, [])

  const comparePaste = () => {
    const diff = diffLines(text1, text2)
    setDifferences(diff)
  }

  const handleFileUpload = (event, setText) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setText(e.target.result)
      }
      reader.readAsText(file)
    }
  }

  const clearAll = () => {
    setText1('')
    setText2('')
    setDifferences([])
  }

  const loadDefaultExample = async () => {
    try {
      const [originalResponse, modifiedResponse] = await Promise.all([
        fetch('/lorem-original.txt'),
        fetch('/lorem-modified.txt')
      ])
      
      const originalText = await originalResponse.text()
      const modifiedText = await modifiedResponse.text()
      
      setText1(originalText)
      setText2(modifiedText)
      
      // Automatically show differences
      const diff = diffLines(originalText, modifiedText)
      setDifferences(diff)
    } catch (error) {
      console.error('Error loading default files:', error)
    }
  }

  return (
    <div className="app">
      <h1>Text Difference Checker</h1>
      
      <div className="input-section">
        <div className="input-group">
          <h3>Text 1</h3>
          <input
            type="file"
            accept=".txt"
            onChange={(e) => handleFileUpload(e, setText1)}
            className="file-input"
          />
          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Paste or upload text 1..."
            className="text-input"
            rows={10}
          />
        </div>
        
        <div className="input-group">
          <h3>Text 2</h3>
          <input
            type="file"
            accept=".txt"
            onChange={(e) => handleFileUpload(e, setText2)}
            className="file-input"
          />
          <textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Paste or upload text 2..."
            className="text-input"
            rows={10}
          />
        </div>
      </div>
      
      <div className="button-group">
        <button onClick={comparePaste} className="compare-btn">
          Compare Texts
        </button>
        <button onClick={loadDefaultExample} className="example-btn">
          Load Example
        </button>
        <button onClick={clearAll} className="clear-btn">
          Clear All
        </button>
      </div>
      
      {differences.length > 0 && (
        <div className="results-section">
          <h3>Differences:</h3>
          <div className="diff-output">
            {differences.map((part, index) => (
              <div
                key={index}
                className={`diff-line ${
                  part.added ? 'added' : part.removed ? 'removed' : 'unchanged'
                }`}
              >
                {part.value.split('\n').map((line, lineIndex) => (
                  line && (
                    <div key={lineIndex} className="line">
                      <span className="line-marker">
                        {part.added ? '+' : part.removed ? '-' : ' '}
                      </span>
                      {line}
                    </div>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
