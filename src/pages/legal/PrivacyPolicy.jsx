import LegalLayout from '../../components/legal/LegalLayout';

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-collection", title: "2. Information We May Collect" },
    { id: "information-use", title: "3. How Information May Be Used" },
    { id: "enquiry-forms", title: "4. Enquiry and Contact Forms" },
    { id: "cookies-analytics", title: "5. Cookies and Analytics" },
    { id: "third-party", title: "6. Third-Party Services" },
    { id: "data-retention", title: "7. Data Retention" },
    { id: "data-security", title: "8. Data Security" },
    { id: "your-choices", title: "9. Your Choices" },
    { id: "childrens-privacy", title: "10. Children’s Privacy" },
    { id: "changes", title: "11. Changes to This Policy" },
    { id: "contact", title: "12. Contact Information" }
  ];

  return (
    <LegalLayout 
      title="Privacy Policy"
      seoTitle="Privacy Policy | Tourswale"
      lastUpdated="[Insert Date Before Launch]"
      sections={sections}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Tourswale. We respect your privacy and are committed to protecting any personal data you may provide to us. 
          This Privacy Policy explains how we may collect, use, and safeguard your information when you visit our website or communicate with us regarding holiday planning services.
        </p>
      </section>

      <section id="information-collection">
        <h2>2. Information We May Collect</h2>
        <p>
          Depending on the services used, we may collect the following types of information:
        </p>
        <ul>
          <li><strong>Personal Details:</strong> Name, email address, phone number, and departure city when submitted through our enquiry forms.</li>
          <li><strong>Travel Preferences:</strong> Destination interests, preferred travel dates, budget estimates, and group size (adults/children).</li>
          <li><strong>Technical Data:</strong> IP address, browser type, operating system, and basic usage data collected automatically when navigating the site.</li>
        </ul>
      </section>

      <section id="information-use">
        <h2>3. How Information May Be Used</h2>
        <p>We may use the collected information to:</p>
        <ul>
          <li>Provide customized holiday quotations and travel itineraries.</li>
          <li>Communicate with you regarding your travel enquiries and bookings.</li>
          <li>Improve our website performance, layout, and user experience.</li>
          <li>Send occasional travel inspiration or updates, provided you have consented to such communication.</li>
        </ul>
      </section>

      <section id="enquiry-forms">
        <h2>4. Enquiry and Contact Forms</h2>
        <p>
          Information submitted via our General Enquiry Form or Contact Page is used strictly to assist with your travel planning request. Submitting an enquiry does not constitute a confirmed booking or obligate you to purchase a package. We handle this information confidentially to prepare your personalized proposal.
        </p>
      </section>

      <section id="cookies-analytics">
        <h2>5. Cookies and Analytics</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance user experience and analyze site traffic. You can choose to accept or decline non-essential cookies via our Cookie Consent banner. For detailed information, please review our <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </section>

      <section id="third-party">
        <h2>6. Third-Party Services</h2>
        <p>
          We do not sell or rent your personal information to third parties. We may share necessary details with trusted third-party suppliers (e.g., hotels, airlines, local transport operators) solely for the purpose of fulfilling your confirmed travel arrangements.
        </p>
      </section>

      <section id="data-retention">
        <h2>7. Data Retention</h2>
        <p>
          We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws and regulations for business and accounting records.
        </p>
      </section>

      <section id="data-security">
        <h2>8. Data Security</h2>
        <p>
          We implement reasonable organizational and technical measures to protect the information we collect. However, no internet transmission is entirely secure, and we cannot guarantee absolute security of data transmitted to our website.
        </p>
      </section>

      <section id="your-choices">
        <h2>9. Your Choices</h2>
        <p>
          You may request access to, correction of, or deletion of the personal data you have provided to us. If you receive marketing communications from Tourswale, you may opt out at any time by contacting us or using the unsubscribe link provided in the communication.
        </p>
      </section>

      <section id="childrens-privacy">
        <h2>10. Children’s Privacy</h2>
        <p>
          Our website and services are not directed at children under the age of 18 without parental consent. We do not knowingly collect personal information directly from children. If we become aware that we have collected such data, we will take steps to delete it.
        </p>
      </section>

      <section id="changes">
        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised "Last Updated" date.
        </p>
      </section>

      <section id="contact">
        <h2>12. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> [Insert Verified Email]<br/>
          <strong>Phone:</strong> [Insert Verified Phone Number]
        </p>
      </section>
    </LegalLayout>
  );
}
