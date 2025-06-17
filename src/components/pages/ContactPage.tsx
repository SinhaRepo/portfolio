
import { useState } from "react";
import { Mail, Phone, Linkedin, Map, Send, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm just a message away.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form - Takes 3 columns */}
          <Card className="lg:col-span-3 bg-gradient-to-br from-slate-800/90 to-slate-900/95 border-slate-700/50 shadow-xl animate-fade-in backdrop-blur-sm">
            <CardHeader className="pb-0">
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-slate-700/70 border-slate-600/50 text-white placeholder-gray-400 focus-visible:ring-blue-500 focus-visible:border-blue-500 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-slate-700/70 border-slate-600/50 text-white placeholder-gray-400 focus-visible:ring-blue-500 focus-visible:border-blue-500 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this regarding?"
                    required
                    className="bg-slate-700/70 border-slate-600/50 text-white placeholder-gray-400 focus-visible:ring-blue-500 focus-visible:border-blue-500 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, job opportunity, or just say hello!"
                    required
                    rows={5}
                    className="bg-slate-700/70 border-slate-600/50 text-white placeholder-gray-400 focus-visible:ring-blue-500 focus-visible:border-blue-500 resize-none backdrop-blur-sm"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg font-medium transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-purple-900/20 group"
                >
                  <span className="flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-slate-700/50 shadow-xl backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <a href="mailto:anshsinha2509@gmail.com" className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-slate-700/30 group">
                    <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">anshsinha2509@gmail.com</p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                  </a>

                  <a href="tel:+919327107562" className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-slate-700/30 group">
                    <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 group-hover:bg-purple-500/20 transition-all duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+91 9327107562</p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/anshsinha2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-slate-700/30 group"
                  >
                    <div className="p-3 bg-blue-600/10 rounded-full text-blue-400 group-hover:bg-blue-600/20 transition-all duration-300">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <p className="text-white font-medium">linkedin.com/in/anshsinha2005</p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-slate-700/30">
                    <div className="p-3 bg-green-500/10 rounded-full text-green-400 group-hover:bg-green-500/20 transition-all duration-300">
                      <Map className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Surat, Gujarat, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-slate-700/50 shadow-xl backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-white text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="inline-block p-1.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full">
                    <span className="block h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  Available for Opportunities
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Currently open to freelance projects, full-time positions and collaborative ventures.
                  Let's create something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-gray-400 text-lg">
            Expected response time: <span className="text-white font-medium">24-48 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
