import { useState, useEffect } from 'react'

function HackerTerminal({ commands = [], className = "" }) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const defaultCommands = [
    "$ whoami",
    "nitika-kalirawna",
    "$ ls -la skills/",
    "python-mastery.py",
    "ai-algorithms.js", 
    "cybersecurity-tools.sh",
    "devops-automation.yml",
    "$ cat about.txt",
    "Passionate developer specializing in AI & Cybersecurity",
    "$ python3 -c 'print(\"Hello, World!\")'",
    "Hello, World!",
    "$ ./deploy-portfolio.sh",
    "Portfolio deployed successfully! 🚀"
  ]

  const commandsToUse = commands.length > 0 ? commands : defaultCommands

  useEffect(() => {
    if (!isTyping) return

    const currentCommand = commandsToUse[currentCommandIndex]
    if (!currentCommand) return

    if (currentText.length < currentCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentCommand.slice(0, currentText.length + 1))
      }, Math.random() * 100 + 50)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentCommandIndex((prev) => (prev + 1) % commandsToUse.length)
        setCurrentText('')
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [currentText, currentCommandIndex, commandsToUse, isTyping])

  return (
    <div className={`terminal-text ${className}`}>
      <div className="terminal-prompt">
        {currentText}
        <span className="terminal-cursor">_</span>
      </div>
    </div>
  )
}

export default HackerTerminal

