import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Lock,
  Eye,
  Zap,
  BarChart,
  CheckCircle,
  Bell,
  Cloud,
  Key,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="grid w-full place-content-center bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
                  FortKnox Features
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the powerful features that make FortKnox the ultimate
                  cybersecurity solution for your enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Lock className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Advanced Encryption</CardTitle>
                  <CardDescription>
                    Protect your sensitive data with state-of-the-art encryption
                    algorithms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>AES-256 encryption for data at rest</li>
                    <li>TLS 1.3 for data in transit</li>
                    <li>End-to-end encryption for communications</li>
                    <li>Quantum-resistant encryption options</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Eye className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Intrusion Detection</CardTitle>
                  <CardDescription>
                    Real-time monitoring and alerts for potential security
                    breaches.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>Network and host-based IDS</li>
                    <li>Behavioral analysis</li>
                    <li>Signature-based detection</li>
                    <li>Automated threat response</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>AI-Powered Intelligence</CardTitle>
                  <CardDescription>
                    Leverage cutting-edge AI for predictive threat analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>Machine learning-based anomaly detection</li>
                    <li>Predictive threat modeling</li>
                    <li>Automated incident classification</li>
                    <li>Continuous learning from new threats</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Compliance Management</CardTitle>
                  <CardDescription>
                    Ensure adherence to industry standards and regulations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>GDPR, HIPAA, and PCI DSS compliance tools</li>
                    <li>Automated compliance reporting</li>
                    <li>Policy enforcement</li>
                    <li>Audit trail and documentation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Vulnerability Scanning</CardTitle>
                  <CardDescription>
                    Proactively identify and mitigate security weaknesses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>Continuous vulnerability assessment</li>
                    <li>Web application scanning</li>
                    <li>Network and system scanning</li>
                    <li>Prioritized remediation recommendations</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Security Audits</CardTitle>
                  <CardDescription>
                    Comprehensive assessments to ensure a robust security
                    posture.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>Regular automated security audits</li>
                    <li>Compliance gap analysis</li>
                    <li>Risk assessment and mitigation planning</li>
                    <li>Third-party vendor security evaluation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Bell className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Real-Time Alerts</CardTitle>
                  <CardDescription>
                    Stay informed with instant notifications on security events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>Customizable alert thresholds</li>
                    <li>Multi-channel notifications (email, SMS, push)</li>
                    <li>Severity-based alert prioritization</li>
                    <li>Integration with incident response workflows</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Cloud className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Cloud Security</CardTitle>
                  <CardDescription>
                    Extend your security perimeter to cloud environments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>Multi-cloud security management</li>
                    <li>Cloud-native firewall and WAF</li>
                    <li>Data loss prevention for cloud storage</li>
                    <li>Cloud access security broker (CASB) functionality</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Key className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Access Control</CardTitle>
                  <CardDescription>
                    Manage and secure access to your systems and data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm">
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Single sign-on (SSO) integration</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Privileged access management (PAM)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Secure Your Enterprise?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join the ranks of secure enterprises. Start your journey with
                  FortKnox today and experience unparalleled protection for your
                  digital assets.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 min-[400px]:flex-row">
                  <input
                    className="flex h-10 w-full flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-muted-foreground">
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
