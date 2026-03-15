import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ArrowRight, Building2, Users, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const benefits = [
  "Short, practical walkthrough",
  "No pressure sales pitch",
  "We'll map your programs, setup and integrations",
];

const centreTypes = [
  "Gym / Fitness Centre",
  "Swim School",
  "Recreation Centre",
  "Martial Arts School",
  "Sports Club",
  "Council / Local Government",
  "School",
  "Other",
];

const Demo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organisation: "",
    centreType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Demo request submitted!",
      description: "We'll be in touch within 1 business day.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organisation: "",
      centreType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEO title="Request a Demo" description="See GreeneDesk in action. Book a short, practical walkthrough tailored to your gym, swim school, or sports centre." canonical="/demo" />
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-hover mb-8">
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                See how GreeneDesk would work in{" "}
                <span className="text-gradient-primary">your centre</span>
              </h1>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid sm:grid-cols-3 gap-4 p-6 rounded-xl bg-surface-section">
                <div className="text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">100+ Centres</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">50,000+ Members</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Australian Hosted</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-2xl border border-border bg-background p-8 shadow-lg">
                <h2 className="font-display text-2xl font-bold mb-6">Request a Demo</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organisation">Organisation name *</Label>
                    <Input
                      id="organisation"
                      required
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="centreType">Centre type *</Label>
                    <Select
                      value={formData.centreType}
                      onValueChange={(value) => setFormData({ ...formData, centreType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your centre type" />
                      </SelectTrigger>
                      <SelectContent>
                        {centreTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Anything specific you'd like to discuss?</Label>
                    <Textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request a Demo"}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. We'll only use your information to contact you about GreeneDesk.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;