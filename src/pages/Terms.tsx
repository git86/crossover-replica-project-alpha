
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-8">
                Last updated: April 9, 2025
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using USS Agency's website, platform, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">2. Service Description</h2>
              <p>
              USS Agency provides a platform that connects companies with remote professionals around the world. Our services include talent assessment, matching, placement, and management tools.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">3. User Accounts</h2>
              <p>
                To access certain features of our services, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p>
                You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">4. User Conduct</h2>
              <p>
                In using our services, you agree not to:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Engage in fraudulent activities</li>
                <li>Interfere with the proper functioning of the services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for any illegal purpose</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-4">5. Intellectual Property</h2>
              <p>
                Our website, platform, and services, including all content, features, and functionality, are owned by USS Agency and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our materials without our express written consent.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">6. Payment Terms</h2>
              <p>
                For companies using our hiring services, payment terms will be as specified in your service agreement. For talent, payment will be processed according to the terms of your work agreement.
              </p>
              <p>
                All fees are non-refundable unless otherwise specified in writing or required by law.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">7. Disclaimer of Warranties</h2>
              <p>
                Our services are provided on an "as is" and "as available" basis. USS Agency makes no warranties, expressed or implied, regarding the operation or availability of the services.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, USS Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless USS Agency and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these terms.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on our website and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-4">
                Email: legal@ussagency.com<br />
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

export default Terms;
