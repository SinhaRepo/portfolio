import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_ia31gqt',
      'template_kjs33x7',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'nRZ3OZ0HOYKxRXUpJ'
    )

      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast({
          title: "Something went wrong!",
          description: "Please try again later.",
          variant: "destructive",
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss exciting opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border border-slate-600">
                  <Mail className="text-blue-400 w-6 h-6" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">anshsinha9054233024@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border border-slate-600">
                  <div className="text-blue-400 w-6 h-6 flex items-center justify-center text-sm font-bold">
                    📱
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 9327107562</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border border-slate-600">
                  <Linkedin className="text-blue-400 w-6 h-6" />
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/anshsinha2005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      linkedin.com/in/anshsinha2005
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-white text-lg font-semibold mb-3">Let's Build Something Amazing</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to work on innovative projects and collaborate with like-minded individuals.
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
