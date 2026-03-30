import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  Check,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Please fill in required fields",
        description: "First name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <Layout>
      <SEO
        title="Contact Us – Get in Touch with GreeneDesk"
        description="Contact GreeneDesk for gym, swim school, or sports centre software enquiries. Call 1 300 181 665 or email support@greenedesk.com. Serving Australia, New Zealand, and beyond."
        canonical="/contact"
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Get in <span className="text-gradient-primary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Whether you're in Australia, New Zealand, or anywhere in the
                world — we'd love to hear from you.
              </p>
              <p className="text-muted-foreground">
                Book a demo, ask a question, or explore how GreeneDesk can power
                your centre's operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">
                Send us a message
              </h2>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl border border-primary/30 bg-primary-light text-center">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you as soon as
                    possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        jobTitle: "",
                        subject: "",
                        message: "",
                      });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        First Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        maxLength={255}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="jobTitle"
                        className="block text-sm font-medium mb-2"
                      >
                        Job Title
                      </label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder="e.g. Centre Manager"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this about?"
                        maxLength={200}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Leave us a message..."
                      rows={5}
                      maxLength={2000}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              <div className="mt-8 p-6 rounded-xl bg-surface-section border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have a question, comment, or request to delete your account?
                  <br />
                  Use the form above to send us a message or contact us by email
                  at:{" "}
                  <a
                    href="mailto:support@greenedesk.com"
                    className="text-primary hover:underline font-medium"
                  >
                    support@greenedesk.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">
                  Contact Details
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone (Australia)</h3>
                      <a
                        href="tel:1300181665"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        1 300 181 665
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:anita.w@greenedesk.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        anita.w@greenedesk.com
                      </a>
                      <br />
                      <a
                        href="mailto:support@greenedesk.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        support@greenedesk.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Support Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        7 am – 7 pm AEST, Monday – Friday
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Head Office</h3>
                      <p className="text-muted-foreground text-sm">
                        36 Catherine Avenue
                        <br />
                        Mount Waverley, VIC 3149
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Serving Globally</h3>
                      <p className="text-muted-foreground text-sm">
                        Headquartered in Australia with customers across
                        Australia, New Zealand, and growing internationally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Region cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border text-center">
                  <span className="text-3xl mb-2 block">🇦🇺</span>
                  <p className="font-semibold text-sm">Australia</p>
                  <p className="text-xs text-muted-foreground">Head Office</p>
                </div>
                <div className="p-4 rounded-xl border border-border text-center">
                  <span className="text-3xl mb-2 block">🇳🇿</span>
                  <p className="font-semibold text-sm">New Zealand</p>
                  <p className="text-xs text-muted-foreground">Active Market</p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-3">
                  Ready for a demo?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  See how GreeneDesk can transform your centre's operations with
                  a personalised walkthrough.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/demo">
                    Request a Demo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
