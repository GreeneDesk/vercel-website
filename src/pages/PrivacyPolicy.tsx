import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" description="GreeneDesk privacy policy. Learn how we handle your data, our Australian data residency commitments, and your privacy rights." canonical="/privacy-policy" />
      <article className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <p>
                GreeneDesk software is a provider of online software that is simple, smart and secure and gives health clubs and leisure facilities the ability to track their members, track important tasks and eliminate paper from operations.
              </p>

              <p>
                The Service involves the storage of data about a health club or leisure centre and of the members who use these facilities. That data can include personal information.
              </p>

              <p>
                Personal information is information about an identifiable individual and may include information like the individual's name, email address, telephone number and address, their progress and bookings.
              </p>

              <p>
                This is our privacy policy for both our clients and customers of our clients where those persons or entities are not located in the EU. If you are in the EU, please refer to our specific privacy policy 'EU Privacy Policy'. We aim to comply with the Australian Privacy Principles.
              </p>

              <p>
                This policy sets out how we collect, store and process your personal information. If you are a customer of one of our clients, for example, you are a member of a gym that uses our software platform, we only store and process your information, we do not own or control it. If you have a question about what data is collected, please contact directly the person requesting the data, for example, your gym.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Staying Anonymous</h2>
              <p>
                You can browse this website anonymously. If you identify yourself to us, at that point we will collect your personal information.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">How do we collect data?</h2>
              <p>
                At all times we try to only collect the minimum information we need.
              </p>
              <p>
                We may collect information about our clients when they engage with us. For example, if they make an enquiry through our website, contact us or sign up for our services.
              </p>
              <p>We may receive personal information about customers of our clients when information is captured by us. For instance, when:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>a booking is made</li>
                <li>a GreeneDesk user account is established</li>
                <li>an online enrolment form is completed</li>
                <li>a telephone inquiry is recorded</li>
                <li>an individual requests information</li>
              </ul>
              <p>
                The information we hold about end users may include data on the pages they access, computer IP address, device identifiers, the type of operating system being used, their location, mobile network information and standard web log data (including browser and traffic to and from sites).
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Use of Personal Information</h2>
              <p>
                We use personal information stored by us to provide customers and end-users with a secure, smooth, efficient, and customised experience. We may use your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>to deliver our services</li>
                <li>to provide customer support</li>
                <li>to resolve disputes</li>
                <li>to collect fees</li>
                <li>for troubleshooting problems</li>
                <li>to enforce our User Agreement</li>
                <li>for research and survey to identify and analyse the ongoing needs of customers and end users</li>
                <li>as required by law, for example if we receive a legal notice requiring us to disclose information</li>
                <li>as required for our business functioning, for example, for accounting or professional advice, to give access for IT work to be completed</li>
                <li>to share with third party plug-ins or other related functions required to deliver our services, for example, our live chat function, our payment platform partners, any apps or other plug-ins we develop</li>
              </ul>
              <p>
                For our own business purposes, we may also aggregate your non-personally identifiable data and use this separately or with anonymised personal data. This use is not governed by our privacy policy as it does not identify you.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Data Storage & Security</h2>
              <p>
                Unless otherwise stipulated, we will store your information as long as required for our business purposes.
              </p>
              <p>
                GreeneDesk holds your personal information on servers located in Sydney Australia. Daily back up procedures take place to protect customer data and take place on servers within Australia.
              </p>
              <p>
                We protect customer and end-user personal information using physical, technical, and administrative security measures to reduce the risks of loss, misuse, unauthorized access, disclosure and alteration. Some of the safeguards we use are firewalls and data encryption, physical access controls to our data centers, and information access authorisation controls.
              </p>
              <p>
                We take reasonable precautions to protect personal information from unauthorised access, modification or disclosure.
              </p>
              <p>
                Your personal information is stored on secure servers that have SSL Certificates issued by leading certificate authorities and all data transferred between you and the service is encrypted.
              </p>
              <p>
                We have procedures in place to deal with any suspected personal data breach and will notify our client (who will notify you) and any applicable regulator of a breach if we are legally required to.
              </p>
              <p className="text-sm bg-muted p-4 rounded-lg">
                <strong>DISCLAIMER:</strong> While we do our best to ensure the security of your data, no storage is 100% secure and we cannot guarantee the safety of your data. If you feel this is not sufficient, please do not provide us with your personal information, or, if you have already provided personal information, please contact us and we will securely destroy it.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Password Policy</h2>
              <p>
                GreeneDesk's password policy is developed to ensure that end user's content and information is kept secure. All passwords must meet the following criteria:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>minimum 6 characters</li>
                <li>at least one number</li>
                <li>at least 1 symbol</li>
              </ul>
              <p>
                End users can change their password at any time via the edit profile link within their login. If an end user loses their password, they can use the password retrieval system. The password retrieval system requires the end user to enter their registered email address and a password re-set link will automatically be sent to the users registered email.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Testimonials</h2>
              <p>
                If you provide us with a testimonial, you give us your consent for the use of your name and the date to be displayed on our website or in our other marketing material, together with the content of the testimonial that you provide.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Social Networking Services and links to other websites</h2>
              <p>
                We may provide links to other websites or use social networking services such as Twitter and Facebook to communicate with the public about our work. These sites have their own privacy policies. When you communicate with us using these services, we may collect your personal information. We will only use it to help us to communicate with you and the public. The social networking service will also handle your personal information for its own purposes.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Collecting sensitive information</h2>
              <p>
                We do not actively collect sensitive information about you, including information about your health, racial or ethnic origin, political opinions, religious beliefs, sexual orientation or criminal history. If you provide this information to our client and we are to store it, we will take steps to appropriately protect it.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">How we use Cookies and other identifiers</h2>
              <p>
                We use a range of tools provided by third parties including search engine browsers and our web hosting company, to collect or view website traffic information. These sites have their own privacy policies. We also use cookies and session tools to improve your experience when accessing our websites or to offer services like live chat.
              </p>
              <p>
                Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. Some website features may not function properly without cookies.
              </p>
              <p>
                The information collected by these tools may include the IP address of the device you are using and information about sites that IP address has come from, the pages accessed on our site and the next site visited. We use the information to help to track your use of our websites to improve your user experience and the quality of our services. To find out how to opt-out of tailored advertising please check the options available at{" "}
                <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  networkadvertising.org/choices
                </a>.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Accessing and correcting your personal information</h2>
              <p>
                You may request copies of the information we hold about you, which will only be provided electronically. You have the ability to make a request to amend or correct that information. If we do not agree with your requested change, we will keep a copy of your request with our information.
              </p>
              <p>
                End-users have the ability to "opt-out" of email and or SMS communications by following the unsubscribe link within communications or through the edit information section within their system login. Please note that we may not be able to deliver all of our services if you opt-out of receiving communications from us.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Problems?</h2>
              <p>
                If you have any concerns about our use of your personal information, please write to{" "}
                <a href="mailto:support@greenedesk.com" className="text-primary hover:underline">support@greenedesk.com</a>{" "}
                and let us know what the problem is. We will respond to your concerns within 30 days.
              </p>
              <p>
                If you are not happy with how we manage your concerns, you can contact the Australian Privacy Commission, available at{" "}
                <a href="http://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  oaic.gov.au
                </a>.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Schedule</h2>
              <p>
                Where used in this privacy policy, "we" and "us" means:<br />
                <strong>GreeneDesk Pty Ltd</strong><br />
                ABN 80 161 808 144<br />
                36 Catherine Avenue, Mount Waverley, VIC 3149
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Contact Details</h2>
              <p>
                If you have questions, require more information, have a complaint to register or details to amend, correct or delete in relation to your personal information, please contact our Privacy Compliance Officer via email at:{" "}
                <a href="mailto:support@greenedesk.com" className="text-primary hover:underline">support@greenedesk.com</a>
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">Policy Updates</h2>
              <p>
                We regularly review this policy and may make updates from time to time. Any amended policy is effective from the date it is posted to this Website. We aim to communicate any significant changes to you via email or notification via the service however we encourage you to regularly check our privacy policy for updates if this is important to you. Your continued use of our website or services will be deemed acceptance of any amended policy.
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default PrivacyPolicy;
