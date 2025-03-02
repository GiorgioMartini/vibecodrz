import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Cpu, Layers, Rocket, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="h-8 w-8 text-purple-500" />
          <span className="text-xl font-bold tracking-tight">Vibe Coderz</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#process" className="text-sm text-gray-300 hover:text-white transition-colors">
            Process
          </Link>
          <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:flex border-purple-500 text-purple-500 hover:bg-purple-950 hover:text-white"
        >
          Get Started
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-950/50 text-purple-400 text-sm font-medium mb-4">
            The Future of Development
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            VibeCoding as a Service
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Accelerate your digital transformation with AI-powered development. We build stunning prototypes and web
            applications in record time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400">
            We leverage cutting-edge AI tools and development methodologies to deliver exceptional results.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-500 mb-4" />
              <CardTitle>Rapid Prototyping</CardTitle>
              <CardDescription className="text-gray-400">
                Transform ideas into interactive prototypes in days, not weeks.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  User-centered design approach
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  Interactive mockups
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  Iterative feedback cycles
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <Cpu className="h-12 w-12 text-purple-500 mb-4" />
              <CardTitle>AI-Powered Development</CardTitle>
              <CardDescription className="text-gray-400">
                Harness the power of AI to accelerate development and enhance quality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  AI-assisted code generation
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  Automated testing
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  Intelligent optimization
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <Rocket className="h-12 w-12 text-purple-500 mb-4" />
              <CardTitle>Full-Stack Web Apps</CardTitle>
              <CardDescription className="text-gray-400">
                End-to-end development of scalable, high-performance web applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  Modern tech stack
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  Responsive design
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                  Scalable architecture
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Leverage AI</h2>
              <p className="text-gray-300 mb-6">
                At Vibe Coderz, we're at the forefront of the AI revolution in software development. Our approach
                combines human creativity with AI capabilities to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">AI-Assisted Code Generation</h3>
                    <p className="text-gray-400 text-sm">
                      We use advanced AI models to accelerate code writing, ensuring high quality and consistency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                    <Layers className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Intelligent Design Systems</h3>
                    <p className="text-gray-400 text-sm">
                      Our AI tools help create cohesive, accessible, and visually stunning user interfaces.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Automated Testing & Optimization</h3>
                    <p className="text-gray-400 text-sm">
                      We employ AI to rigorously test applications and optimize performance at every level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl"></div>
              <div className="relative aspect-video rounded-xl bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-24 w-24 text-purple-500 opacity-50" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-sm font-mono text-purple-400">
                    <span className="text-gray-500">// Vibe Coderz AI</span>
                    <br />
                    <span>
                      function <span className="text-blue-400">createAmazingProduct</span>() &#123;
                    </span>
                    <br />
                    <span>
                      &nbsp;&nbsp;const <span className="text-green-400">result</span> ={" "}
                      <span className="text-blue-400">ai</span>.<span className="text-purple-300">enhance</span>
                      (humanCreativity);
                    </span>
                    <br />
                    <span>
                      &nbsp;&nbsp;return <span className="text-green-400">result</span>;
                    </span>
                    <br />
                    <span>&#125;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-400">
            We've streamlined our workflow to deliver high-quality results in record time.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800 hidden md:block"></div>
          <div className="space-y-12 relative">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-12 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                  <p className="text-gray-400">
                    We begin by understanding your vision, goals, and requirements through collaborative sessions.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0"></div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:col-start-2">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-12 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Rapid Prototyping</h3>
                  <p className="text-gray-400">
                    Using AI-powered tools, we quickly create interactive prototypes to visualize the solution.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0"></div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-12 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accelerated Development</h3>
                  <p className="text-gray-400">
                    Our AI-enhanced development process allows us to build features at unprecedented speed.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0"></div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:col-start-2">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-12 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Testing & Refinement</h3>
                  <p className="text-gray-400">
                    Rigorous automated and manual testing ensures your application is robust and user-friendly.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0"></div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-12 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 z-10">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Deployment & Support</h3>
                  <p className="text-gray-400">
                    We handle the deployment process and provide ongoing support to ensure your application thrives.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-950">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">We've helped companies of all sizes accelerate their development process.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-900 flex items-center justify-center">
                    <span className="text-purple-300 font-bold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Jane Doe</h3>
                    <p className="text-sm text-gray-400">CTO, TechStart</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Vibe Coderz transformed our concept into a fully functional MVP in just two weeks. Their AI-powered
                  approach saved us months of development time."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-900 flex items-center justify-center">
                    <span className="text-purple-300 font-bold">MS</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Michael Smith</h3>
                    <p className="text-sm text-gray-400">Founder, InnovateCo</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The quality of work delivered by Vibe Coderz exceeded our expectations. Their team's expertise in
                  AI-powered development is truly impressive."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-900 flex items-center justify-center">
                    <span className="text-purple-300 font-bold">AL</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Amanda Lee</h3>
                    <p className="text-sm text-gray-400">Product Manager, EnterpriseX</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Working with Vibe Coderz has been a game-changer for our product development cycle. They've helped us
                  reduce time-to-market by 60%."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl"></div>
            <div className="relative bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to accelerate your development?</h2>
                  <p className="text-gray-400 mb-6">
                    Get in touch with our team to discuss how we can help bring your vision to life with VibeCoding.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full md:w-auto">
                    Schedule a Consultation
                  </Button>
                </div>
                <div className="bg-black/50 p-6 rounded-lg">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-bold">Vibe Coderz</span>
              </div>
              <p className="text-gray-400 text-sm">
                Accelerating development with AI-powered solutions. Building the future, one line of code at a time.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Rapid Prototyping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    AI-Powered Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Full-Stack Web Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Mobile Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vibe Coderz. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

