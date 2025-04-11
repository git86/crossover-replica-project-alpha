
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-8">
                Last updated: April 9, 2025
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
              <p>
                Welcome to USS Agency's Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                We are committed to protecting your personal information and your right to privacy. Please read this privacy policy carefully to understand our practices regarding your personal data and how we will treat it.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Create an account or user profile</li>
                <li>Apply for positions on our platform</li>
                <li>Complete assessments</li>
                <li>Communicate with us</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, resume, work history, skills, educational background, assessment results, and other information relevant to job applications and placements.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Match you with appropriate job opportunities</li>
                <li>Evaluate your skills and qualifications</li>
                <li>Provide and improve our services</li>
                <li>Communicate with you about your account or our services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-4">4. Sharing Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Potential employers or clients when you apply for positions</li>
                <li>Service providers who help us operate our platform</li>
                <li>Legal and regulatory authorities when required by law</li>
                <li>Professional advisers such as lawyers, accountants, and insurers</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              <p>
                While we take reasonable steps to secure your information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">7. Changes to this Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@ussagency.com<br />
                Address: 100 Innovation Drive, Tech City, CA 94000, USA<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
