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
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setContactForm({ name: '', email: '', message: '', projectType: '' });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

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

      {/* Collaboration Section */}
      <section id="collaborate" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Let's Collaborate</h2>
            <p className="text-xl text-muted-foreground">
              Available for freelance projects and cloud consulting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
              <p className="text-muted-foreground">Help businesses migrate to AWS/Azure with zero downtime and optimized costs.</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DevOps Automation</h3>
              <p className="text-muted-foreground">Implement CI/CD pipelines and infrastructure automation for faster deployments.</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <p className="text-muted-foreground">Strategic cloud architecture planning and best practices implementation.</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Client Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">What Clients Say</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">A</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        "Excellent work on our cloud migration. Shivam helped us reduce our AWS costs by 40% while improving performance."
                      </p>
                      <p className="font-semibold text-sm">- Anonymous Client</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">B</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        "Professional and reliable. The CI/CD pipeline implementation was flawless and delivery was on time."
                      </p>
                      <p className="font-semibold text-sm">- Anonymous Client</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Current Availability</h3>
              <Card className="p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-foreground font-semibold">Status</span>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-600 font-semibold">Available</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-semibold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Start</span>
                    <span className="font-semibold">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timezone</span>
                    <span className="font-semibold">IST (UTC+5:30)</span>
                  </div>
                </div>
              </Card>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Remote Work</Badge>
                <Badge variant="secondary">Long-term Projects</Badge>
                <Badge variant="secondary">Consulting</Badge>
                <Badge variant="secondary">24/7 Support</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your next cloud project? Let's discuss how I can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={contactForm.projectType}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select project type</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="devops-automation">DevOps Automation</option>
                    <option value="ci-cd-pipeline">CI/CD Pipeline</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitMessage && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                    <p className="text-green-800 dark:text-green-200">{submitMessage}</p>
                  </div>
                )}
              </form>
            </Card>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect Directly</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:roninshivam2001@gmail.com" className="text-blue-600 hover:underline">
                        roninshivam2001@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+918757808001" className="text-green-600 hover:underline">
                        +91 8757808001
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Patna, Bihar - 800007, India</p>
                    </div>
                  </div>
                </Card>

                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Button size="lg" asChild>
                      <a href="https://www.linkedin.com/in/shivam-singh8757" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="https://github.com/shivamsinghtech" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shivam Singh</h3>
              <p className="text-slate-400 mb-4">Cloud Developer specializing in AWS, Azure, and DevOps automation.</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/shivam-singh8757" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/shivamsinghtech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:roninshivam2001@gmail.com" className="text-slate-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Cloud Migration</li>
                <li>DevOps Automation</li>
                <li>CI/CD Pipelines</li>
                <li>Infrastructure as Code</li>
                <li>Cloud Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-slate-400">
                <li>AWS & Azure</li>
                <li>Docker & Kubernetes</li>
                <li>Python & Linux</li>
                <li>MongoDB & Firebase</li>
                <li>CI/CD Tools</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="text-center">
            <p className="text-slate-400">
              © 2024 Shivam Singh. Built with React, TypeScript, Tailwind CSS, and Three.js. Made with <Heart className="w-4 h-4 inline text-red-500" /> in India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
