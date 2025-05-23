
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Cookie Policy</h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-8">
                Last updated: April 9, 2025
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how USS Agency ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">2. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, USS Agency) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">3. Why Do We Use Cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">4. Types of Cookies We Use</h2>
              <p>
                The specific types of first and third-party cookies served through our website and the purposes they perform include:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  <strong>Essential Website Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
                </li>
                <li>
                  <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                </li>
                <li>
                  <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                </li>
                <li>
                  <strong>Social Media Cookies:</strong> These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-4">5. How Can You Control Cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in our cookie notice banner.
              </p>
              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">6. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please email us at privacy@ussagency.com or contact us at:
              </p>
              <p className="mb-4">
                100 Innovation Drive<br />
                Tech City, CA 94000<br />
                United States<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
