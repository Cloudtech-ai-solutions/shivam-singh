import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CloudScene3D } from "@/components/CloudScene3D";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  ExternalLink,
  Cloud,
  Server,
  Database,
  Code,
  Award,
  Calendar,
  Send,
  Users,
  Briefcase,
  MessageSquare,
  Heart,
  Star,
  Zap
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const skills = {
    "Cloud & DevOps": ["AWS EC2, S3", "Microsoft Azure", "Docker & CI/CD Pipelines", "Firebase"],
    "Programming": ["Python", "MongoDB", "Linux (Basic Commands & Server Operations)"],
    "Networking": ["Cisco Packet Tracer", "Network Configuration", "Postman (API Testing)"],
    "File Management": ["FileZilla (FTP/SFTP Management)", "PuTTY (Remote Server Access via SSH)"]
  };

  const experiences = [
    {
      title: "Intern - Solitaire Infosys Pvt. Ltd.",
      duration: "6 Months",
      description: "Gained practical experience in Networking and Cloud Computing. Worked on server management, AWS deployments, and troubleshooting network issues."
    }
  ];

  const projects = [
    {
      title: "Live Server Hosting",
      description: "Set up a remote server using FileZilla for secure file transfers (FTP/SFTP) and PuTTY for SSH-based server management. Managed domain configurations, ensured secure deployment, and optimized server performance for hosting websites and applications.",
      technologies: ["FileZilla", "PuTTY", "FTP/SFTP", "SSH", "Server Management"]
    },
    {
      title: "Face Recognition AI System",
      description: "Developed an AI-based face recognition system using Python, OpenCV, and TensorFlow. Implemented real-time face detection and recognition functionalities. Built the user interface using Tkinter for easy interaction and control.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Tkinter", "AI/ML"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Global Group of Institutes, Amritsar",
      duration: "2021 - 2025"
    },
    {
      degree: "12th (Science)",
      institution: "Amritchand Balika Uchh Vidyalaya, Ara",
      duration: "2019 - 2020"
    },
    {
      degree: "10th",
      institution: "KPS Public School, Patna",
      duration: "2017 - 2018"
    }
  ];

  const certifications = [
    "Cloud Computing and Networking – Solitaire Infosys Pvt. Ltd.",
    "Python Programming – ThinkNext Pvt. Ltd."
  ];

  const softSkills = [
    "Team Collaboration",
    "Time Management", 
    "Adaptability",
    "Leadership Qualities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-foreground">Shivam Singh</div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#skills">Skills</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#collaborate">Collaborate</a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2d871d7251d8403996debf058453a0d1%2F189894b8149f4cb09f9c6e1505ecbb8e?format=webp&width=800"
              alt="Shivam Singh"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-lg object-cover"
            />
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Shivam Singh
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">Cloud Developer</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Cloud and DevOps Enthusiast with hands-on experience in deploying and managing applications on AWS and Azure cloud platforms. Skilled in designing and automating CI/CD pipelines for efficient software delivery using tools like Docker and scripting in Linux environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                Patna, Bihar - 800007
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                8757808001
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                roninshivam2001@gmail.com
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a href="https://www.linkedin.com/in/shivam-singh8757" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/shivamsinghtech" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:roninshivam2001@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Cloud Scene */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cloud Infrastructure Visualization</h2>
            <p className="text-muted-foreground">Interactive 3D representation of cloud architecture</p>
          </div>
          <CloudScene3D />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">About Me</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate Cloud and DevOps Enthusiast with hands-on experience in deploying and managing applications on AWS and Azure cloud platforms. My expertise includes designing and automating CI/CD pipelines for efficient software delivery using tools like Docker and scripting in Linux environments.
              </p>
              <br />
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am proficient in containerization, infrastructure automation, and cloud-based deployments with experience in supporting production systems, troubleshooting cloud-based services, and ensuring high availability in Agile-driven environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {category === "Cloud & DevOps" && <Cloud className="w-5 h-5 mr-2 text-blue-600" />}
                    {category === "Programming" && <Code className="w-5 h-5 mr-2 text-green-600" />}
                    {category === "Networking" && <Server className="w-5 h-5 mr-2 text-purple-600" />}
                    {category === "File Management" && <Database className="w-5 h-5 mr-2 text-orange-600" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Soft Skills */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {project.title}
                    <ExternalLink className="w-4 h-4 ml-2 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="flex items-center text-foreground">
                        <Award className="w-5 h-5 mr-3 text-yellow-600" />
                        {cert}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to bring your cloud infrastructure to the next level? Let's discuss your project!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.linkedin.com/in/shivam-singh8757" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="mailto:roninshivam2001@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://github.com/shivamsinghtech" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Shivam Singh. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
