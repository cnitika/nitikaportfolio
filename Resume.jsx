import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Crown, Mail, Github, MapPin, Phone, Calendar, Star, Award, Code, Briefcase, GraduationCap } from 'lucide-react'
import nitikaPhoto from '../assets/nitika.jpg'

function Resume({ theme = 'belle' }) {
  const personalInfo = {
    name: "Nitika Kalirawna",
    title: "BTech CSE Student | Python Developer | AI & Cybersecurity Enthusiast",
    email: "nitika.kalirawna@example.com",
    phone: "+91 XXXXX XXXXX",
    location: "India",
    github: "github.com/nitika-kalirawna",
    linkedin: "linkedin.com/in/nitika-kalirawna-08bb4135a"
  }

  const summary = "Passionate BTech Computer Science Engineering student in final year, specializing in AI, cybersecurity, and automation. Experienced in building innovative solutions including AI tools, automation systems, and voice-controlled assistants. Strong background in Python development, DevOps practices, and cybersecurity solutions with 77+ open source contributions."

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "University Name",
      duration: "2021 - 2025",
      status: "Final Year Student",
      details: "Specializing in AI, Cybersecurity, and Automation. Working on cutting-edge projects in machine learning and DevOps."
    }
  ]

  const experience = [
    {
      title: "Linux & DevOps Intern",
      company: "Linux World under Vimal Daga Sir",
      duration: "2024 - Present",
      description: "Gaining hands-on experience in Linux system administration, DevOps practices, and cloud technologies. Learning advanced automation, containerization, and infrastructure management under industry expert guidance."
    },
    {
      title: "AI & Automation Developer",
      company: "Personal Projects",
      duration: "2023 - Present",
      description: "Developing AI tools, automation systems, and voice-controlled assistants. Focus on Python-based solutions and DevOps practices."
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Community",
      duration: "2022 - Present",
      description: "Active contributor to open source projects with 77+ contributions in the last year. Created 11 repositories and 48 commits."
    }
  ]

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "SQL"],
    "AI/ML Technologies": ["Machine Learning", "Natural Language Processing", "Computer Vision", "OpenCV"],
    "DevOps & Cloud": ["Docker", "Linux", "Automation", "CI/CD"],
    "Web Technologies": ["Streamlit", "React", "HTML/CSS"],
    "Cybersecurity": ["Security Best Practices", "System Administration"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Jupyter"]
  }

  const projects = [
    {
      name: "AI Voice Assistant",
      description: "Python-based voice-controlled assistant with natural language processing capabilities",
      technologies: ["Python", "Streamlit", "Voice Recognition", "AI"]
    },
    {
      name: "DevOps Automation Suite",
      description: "Comprehensive automation tools for deployment and infrastructure management",
      technologies: ["Python", "Docker", "DevOps", "Automation"]
    },
    {
      name: "Machine Learning Toolkit",
      description: "Collection of ML algorithms and data analysis tools for various applications",
      technologies: ["AI", "Python", "Machine Learning", "Data Science"]
    },
    {
      name: "Computer Vision Healthcare",
      description: "Medical image analysis system using OpenCV and deep learning",
      technologies: ["Python", "OpenCV", "Computer Vision", "Healthcare"]
    },
    {
      name: "NLP Text Analyzer",
      description: "Advanced text processing and sentiment analysis application",
      technologies: ["Python", "NLP", "Streamlit", "Text Analysis"]
    }
  ]

  const achievements = [
    "77+ contributions to open source projects in the last year",
    "Created 11 repositories with 48 commits",
    "Specialized in AI, Cybersecurity, and Automation",
    "Active member of GitHub community",
    "Hands-on experience with Linux and DevOps practices"
  ]

  return (
    <div className="max-w-4xl mx-auto p-8 bg-background text-foreground">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={nitikaPhoto} 
                alt="Nitika Kalirawna" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-primary" />
            {personalInfo.email}
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            {personalInfo.phone}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            {personalInfo.location}
          </div>
          <div className="flex items-center">
            <Github className="h-4 w-4 mr-2 text-primary" />
            {personalInfo.github}
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="h-5 w-5 mr-2 text-primary" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{summary}</p>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <GraduationCap className="h-5 w-5 mr-2 text-primary" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary pl-4 pb-4">
              <h3 className="font-semibold text-lg">{edu.degree}</h3>
              <p className="text-primary font-medium">{edu.institution}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {edu.duration} • {edu.status}
              </div>
              <p className="text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-primary" />
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-4 pb-6 last:pb-0">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {exp.duration}
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="h-5 w-5 mr-2 text-primary" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2 text-primary">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="h-5 w-5 mr-2 text-primary" />
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-primary pl-4 pb-4 last:pb-0">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-primary" />
            Key Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <Star className="h-4 w-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground mt-8 pt-4 border-t border-border">
        <p>References available upon request</p>
        <p className="mt-2">Generated with Disney Princess Magic ✨</p>
      </div>
    </div>
  )
}

export default Resume

