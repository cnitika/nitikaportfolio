import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Github, Mail, Download, Star, GitBranch, Users, Crown, Sparkles, Heart, FileText } from 'lucide-react'
import Resume from './components/Resume.jsx'
import MatrixBackground from './components/MatrixBackground.jsx'
import HackerTerminal from './components/HackerTerminal.jsx'
import nitikaPhoto from './assets/nitika.jpg'
import './App.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState('default')
  const [currentView, setCurrentView] = useState('portfolio') // 'portfolio' or 'resume'

  const themes = [
    { id: 'default', name: 'Default', icon: '✨' },
    { id: 'belle', name: 'Golden', icon: '📚' },
    { id: 'ariel', name: 'Ocean', icon: '🧜‍♀️' },
    { id: 'cinderella', name: 'Royal', icon: '👗' },
    { id: 'aurora', name: 'Rose', icon: '🌹' },
    { id: 'snow-white', name: 'Classic', icon: '🍎' },
    { id: 'elsa', name: 'Ice', icon: '❄️' }
  ]

  useEffect(() => {
    document.body.className = currentTheme === 'default' ? '' : `theme-${currentTheme}`
  }, [currentTheme])

  const projects = [
    {
      title: "AI Voice Assistant",
      description: "Python-based voice-controlled assistant with natural language processing capabilities",
      tags: ["Python", "Streamlit", "Voice Recognition", "AI"],
      icon: "🎤",
      github: "https://github.com/nitika-kalirawna/ai-voice-assistant"
    },
    {
      title: "DevOps Automation Suite",
      description: "Comprehensive automation tools for deployment and infrastructure management",
      tags: ["Python", "Docker", "DevOps", "Automation"],
      icon: "🚀",
      github: "https://github.com/nitika-kalirawna/devops-automation-suite"
    },
    {
      title: "Machine Learning Toolkit",
      description: "Collection of ML algorithms and data analysis tools for various applications",
      tags: ["AI", "Python", "Machine Learning", "Data Science"],
      icon: "🤖",
      github: "https://github.com/nitika-kalirawna/ml-toolkit"
    },
    {
      title: "Computer Vision Healthcare",
      description: "Medical image analysis system using OpenCV and deep learning",
      tags: ["Python", "OpenCV", "Computer Vision", "Healthcare"],
      icon: "🏥",
      github: "https://github.com/nitika-kalirawna/cv-healthcare"
    },
    {
      title: "NLP Text Analyzer",
      description: "Advanced text processing and sentiment analysis application",
      tags: ["Python", "NLP", "Streamlit", "Text Analysis"],
      icon: "📝",
      github: "https://github.com/nitika-kalirawna/nlp-text-analyzer"
    }
  ]

  // Function to download resume as PDF
  const downloadResume = () => {
    // Create a new window with the resume content
    const resumeWindow = window.open('', '_blank');
    const resumeContent = document.querySelector('.resume-content');
    
    if (resumeWindow && resumeContent) {
      resumeWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Nitika Kalirawna - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; }
            .section { margin-bottom: 25px; }
            .section h2 { color: #333; border-bottom: 2px solid #333; padding-bottom: 5px; }
            .contact-info { display: flex; justify-content: center; gap: 20px; margin: 10px 0; }
            .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .skill-item { display: flex; justify-content: space-between; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Nitika Kalirawna</h1>
            <p>BTech CSE Student | Python Developer | AI & Cybersecurity Enthusiast</p>
            <div class="contact-info">
              <span>📧 nitika.kalirawna@example.com</span>
              <span>📱 +91 XXXXX XXXXX</span>
              <span>📍 India</span>
              <span>🔗 github.com/nitika-kalirawna</span>
            </div>
          </div>
          
          <div class="section">
            <h2>Professional Summary</h2>
            <p>Passionate BTech Computer Science Engineering student in final year, specializing in AI, cybersecurity, and automation. Experienced in building innovative solutions including AI tools, automation systems, and voice-controlled assistants. Strong background in Python development, DevOps practices, and cybersecurity solutions with 77+ open source contributions.</p>
          </div>
          
          <div class="section">
            <h2>Education</h2>
            <h3>Bachelor of Technology in Computer Science Engineering</h3>
            <p><strong>University Name</strong> | 2021 - 2025 | Final Year Student</p>
            <p>Specializing in AI, Cybersecurity, and Automation. Working on cutting-edge projects in machine learning and DevOps.</p>
          </div>
          
          <div class="section">
            <h2>Experience</h2>
            <h3>Linux & DevOps Intern</h3>
            <p><strong>Linux World under Vimal Daga Sir</strong> | 2024 - Present</p>
            <p>Gaining hands-on experience in Linux system administration, DevOps practices, and cloud technologies.</p>
            
            <h3>Open Source Contributor</h3>
            <p><strong>GitHub Community</strong> | 2022 - Present</p>
            <p>Active contributor to open source projects with 77+ contributions in the last year.</p>
          </div>
          
          <div class="section">
            <h2>Skills & Expertise</h2>
            <div class="skills-grid">
              <div class="skill-item"><span>Python</span><span>95%</span></div>
              <div class="skill-item"><span>AI/ML</span><span>90%</span></div>
              <div class="skill-item"><span>DevOps</span><span>85%</span></div>
              <div class="skill-item"><span>Docker</span><span>80%</span></div>
              <div class="skill-item"><span>Linux</span><span>88%</span></div>
              <div class="skill-item"><span>Cybersecurity</span><span>82%</span></div>
            </div>
          </div>
          
          <div class="section">
            <h2>Featured Projects</h2>
            <h3>AI Voice Assistant</h3>
            <p>Python-based voice-controlled assistant with natural language processing capabilities</p>
            <p><strong>Technologies:</strong> Python, Streamlit, Voice Recognition, AI</p>
            
            <h3>DevOps Automation Suite</h3>
            <p>Comprehensive automation tools for deployment and infrastructure management</p>
            <p><strong>Technologies:</strong> Python, Docker, DevOps, Automation</p>
            
            <h3>Machine Learning Toolkit</h3>
            <p>Collection of ML algorithms and data analysis tools for various applications</p>
            <p><strong>Technologies:</strong> AI, Python, Machine Learning, Data Science</p>
            
            <h3>Computer Vision Healthcare</h3>
            <p>Medical image analysis system using OpenCV and deep learning</p>
            <p><strong>Technologies:</strong> Python, OpenCV, Computer Vision, Healthcare</p>
            
            <h3>NLP Text Analyzer</h3>
            <p>Advanced text processing and sentiment analysis application</p>
            <p><strong>Technologies:</strong> Python, NLP, Streamlit, Text Analysis</p>
          </div>
        </body>
        </html>
      `);
      resumeWindow.document.close();
      
      // Trigger print dialog
      setTimeout(() => {
        resumeWindow.print();
      }, 500);
    }
  }

  const openGitHub = () => {
    window.open('https://github.com/nitika-kalirawna', '_blank');
  }

  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/nitika-kalirawna', '_blank');
  }

  const skills = [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "AI/ML", level: 90, icon: "🧠" },
    { name: "DevOps", level: 85, icon: "⚙️" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "Linux", level: 88, icon: "🐧" },
    { name: "Cybersecurity", level: 82, icon: "🔒" }
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${currentTheme === 'default' ? '' : `theme-${currentTheme}`}`}>
      <MatrixBackground />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Nitika Kalirawna</span>
            </div>       <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentView('portfolio')} 
                className={`hover:text-primary transition-colors ${currentView === 'portfolio' ? 'text-primary font-semibold' : ''}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => setCurrentView('resume')} 
                className={`hover:text-primary transition-colors ${currentView === 'resume' ? 'text-primary font-semibold' : ''}`}
              >
                Resume
              </button>
              {currentView === 'portfolio' && (
                <>
                  <a href="#about" className="hover:text-primary transition-colors">About</a>
                  <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                  <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                  <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                  <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </>
              )}
            </nav>
            
            <Select value={currentTheme} onValueChange={setCurrentTheme}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Choose Theme" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme.id} value={theme.id}>
                    <div className="flex items-center space-x-2">
                      <span>{theme.icon}</span>
                      <span>{theme.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>

      {/* Conditional Content */}
      {currentView === 'resume' ? (
        <div className="py-8">
          <Resume theme={currentTheme} />
        </div>
      ) : (
        <>
          {/* Portfolio Content */}

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden magic-particles">
        <div className="hero-gradient absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 float">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={nitikaPhoto} 
                  alt="Nitika Kalirawna" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 sparkle">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <div className="absolute -bottom-2 -left-2 sparkle" style={{animationDelay: '1s'}}>
              <Crown className="h-5 w-5 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text scale-in">
            Nitika Kalirawna
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="text-lg px-4 py-2 fade-in-up stagger-1">
              <Crown className="h-4 w-4 mr-2" />
              BTech CSE Student
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 fade-in-up stagger-2">
              🐍 Python Developer
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 fade-in-up stagger-3">
              <Heart className="h-4 w-4 mr-2" />
              AI & Cybersecurity Enthusiast
            </Badge>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about building AI tools, automation systems, and voice-controlled assistants. 
            Specializing in Python development, DevOps practices, and cybersecurity solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="group button-hover fade-in-up stagger-4" onClick={() => setCurrentView('resume')}>
              <FileText className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              View Resume
            </Button>
            <Button variant="outline" size="lg" className="group button-hover fade-in-up stagger-5">
              <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group button-hover fade-in-up stagger-6">
              <Github className="h-5 w-5 mr-2 group-hover:rotate-slow" />
              View GitHub
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center fade-in-up stagger-1">
              <div className="text-3xl font-bold text-primary bounce-gentle">77+</div>
              <div className="text-sm text-muted-foreground">Contributions</div>
              <div className="text-xs text-muted-foreground">Last Year</div>
            </div>
            <div className="text-center fade-in-up stagger-2">
              <div className="text-3xl font-bold text-primary bounce-gentle" style={{animationDelay: '0.5s'}}>11</div>
              <div className="text-sm text-muted-foreground">Repositories</div>
              <div className="text-xs text-muted-foreground">Created</div>
            </div>
            <div className="text-center fade-in-up stagger-3">
              <div className="text-3xl font-bold text-primary bounce-gentle" style={{animationDelay: '1s'}}>Open</div>
              <div className="text-sm text-muted-foreground">Source</div>
              <div className="text-xs text-muted-foreground">Contributor</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate BTech Computer Science Engineering student in my final year, specializing in AI, 
                  cybersecurity, and automation. I love building innovative solutions that make technology more 
                  accessible and powerful.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-primary" />
                      What I'm Working On
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">🤖</span>
                        AI tools and automation systems
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">🎤</span>
                        Voice-controlled assistants
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">⚙️</span>
                        DevOps and containerization
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-primary" />
                      Learning Focus
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">🧠</span>
                        Advanced AI and Machine Learning
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">🐧</span>
                        Linux system administration
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">🔒</span>
                        Cybersecurity best practices
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <p className="text-center italic">
                    "I'm passionate about creating technology that solves real-world problems. Whether it's automating 
                    repetitive tasks, building AI-powered applications, or securing digital infrastructure, I believe 
                    in the power of code to make life better for everyone."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <span className="text-2xl mr-3 group-hover:animate-bounce">{project.icon}</span>
                      {project.title}
                    </CardTitle>
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:animate-pulse" />
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs group-hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Skills & Expertise</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="p-6 card-hover group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3 group-hover:animate-pulse">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden progress-bar"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 shimmer"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in-up">Experience & Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">BTech Computer Science Engineering</h3>
                  <p className="text-primary font-medium">Final Year Student</p>
                  <p className="text-sm text-muted-foreground mb-2">2021 - 2025</p>
                  <p className="text-muted-foreground">
                    Specializing in AI, Cybersecurity, and Automation. Working on cutting-edge projects 
                    in machine learning and DevOps.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Linux & DevOps Intern</h3>
                  <p className="text-primary font-medium">Linux World under Vimal Daga Sir</p>
                  <p className="text-sm text-muted-foreground mb-2">2024 - Present</p>
                  <p className="text-muted-foreground">
                    Gaining hands-on experience in Linux system administration, DevOps practices, and cloud technologies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Open Source Contributor</h3>
                  <p className="text-primary font-medium">GitHub Community</p>
                  <p className="text-sm text-muted-foreground mb-2">2022 - Present</p>
                  <p className="text-muted-foreground">
                    Active contributor to open source projects with 77+ contributions in the last year.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 fade-in-up">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="group">
              <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="h-5 w-5 mr-2 group-hover:animate-spin" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Nitika Kalirawna. Built with React & Disney Princess Magic ✨
          </p>
        </div>
      </footer>
        </>
      )}
    </div>
  )
}

export default App

