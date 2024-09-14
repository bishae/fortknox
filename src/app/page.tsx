import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Lock, Eye, Zap, BarChart, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="grid w-full place-content-center bg-primary py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Your Digital Fortress with FortKnox
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Comprehensive cybersecurity platform providing advanced threat
                  protection, secure data management, and real-time
                  vulnerability monitoring for enterprises.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button className="bg-white text-primary hover:bg-gray-200">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Lock className="h-8 w-8 text-primary" />
                <h3 className="text-center text-xl font-bold">
                  Advanced Encryption
                </h3>
                <p className="text-center text-sm text-gray-500">
                  State-of-the-art encryption to protect your sensitive data
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Eye className="h-8 w-8 text-primary" />
                <h3 className="text-center text-xl font-bold">
                  Intrusion Detection
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Real-time monitoring and alerts for potential security
                  breaches
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-center text-xl font-bold">
                  AI-Powered Intelligence
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Cutting-edge AI algorithms for predictive threat analysis
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <BarChart className="h-8 w-8 text-primary" />
                <h3 className="text-center text-xl font-bold">
                  Compliance Management
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Ensure adherence to industry standards and regulations
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-center text-xl font-bold">
                  Vulnerability Scanning
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Proactive identification and mitigation of security weaknesses
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <h3 className="text-center text-xl font-bold">
                  Security Audits
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Comprehensive assessments to ensure robust security posture
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose FortKnox?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <h3 className="text-center text-xl font-bold">
                  End-to-End Security
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Comprehensive protection for all your digital assets
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <h3 className="text-center text-xl font-bold">
                  Real-Time Monitoring
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Instant alerts and responses to potential threats
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <h3 className="text-center text-xl font-bold">
                  Scalable Solutions
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Tailored security measures that grow with your business
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <h3 className="text-center text-xl font-bold">
                  Compliance Ready
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Stay ahead of regulatory requirements with ease
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <h3 className="text-center text-xl font-bold">
                  24/7 Expert Support
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Round-the-clock assistance from security professionals
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <h3 className="text-center text-xl font-bold">
                  Cost-Effective
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Maximize security while minimizing operational costs
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-primary py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to Fortify Your Digital Assets?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  Join the ranks of secure enterprises. Start your journey with
                  FortKnox today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <Input
                    className="max-w-lg flex-1 bg-white"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-white text-primary hover:bg-gray-200"
                    type="submit"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
