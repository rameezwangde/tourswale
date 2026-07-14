import LegalLayout from '../../components/legal/LegalLayout';

export default function CookiePolicy() {
  const sections = [
    { id: "what-are-cookies", title: "1. What Cookies Are" },
    { id: "types-of-cookies", title: "2. Types of Cookies That May Be Used" },
    { id: "essential-cookies", title: "3. Essential Cookies" },
    { id: "analytics-cookies", title: "4. Analytics Cookies" },
    { id: "preference-cookies", title: "5. Preference Cookies" },
    { id: "marketing-cookies", title: "6. Marketing Cookies" },
    { id: "third-party", title: "7. Third-Party Services" },
    { id: "managing-cookies", title: "8. Managing Cookies" },
    { id: "policy-updates", title: "9. Policy Updates" },
    { id: "contact", title: "10. Contact Information" }
  ];

  return (
    <LegalLayout 
      title="Cookie Policy"
      seoTitle="Cookie Policy | Tourswale"
      lastUpdated="[Insert Date Before Launch]"
      sections={sections}
    >
      <section id="what-are-cookies">
        <h2>1. What Cookies Are</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work securely and efficiently, as well as to provide reporting information.
        </p>
      </section>

      <section id="types-of-cookies">
        <h2>2. Types of Cookies That May Be Used</h2>
        <p>
          We categorize cookies into four main types depending on their function. Note that not all of these categories may be currently active on our website.
        </p>
      </section>

      <section id="essential-cookies">
        <h2>3. Essential Cookies</h2>
        <p>
          These cookies are strictly necessary to provide you with services available through our website and to use some of its features. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our site functions.
        </p>
      </section>

      <section id="analytics-cookies">
        <h2>4. Analytics Cookies</h2>
        <p>
          <em>[Developer Note: This section is prepared for future integration and must be updated if/when Google Analytics or similar tools are added before launch.]</em>
          <br /><br />
          These cookies collect information that is used either in aggregate form to help us understand how our website is being used, or how effective our marketing campaigns are, or to help us customize our website for you.
        </p>
      </section>

      <section id="preference-cookies">
        <h2>5. Preference Cookies</h2>
        <p>
          These cookies allow a website to remember choices you have made in the past, like what language you prefer or what region you are in.
        </p>
      </section>

      <section id="marketing-cookies">
        <h2>6. Marketing Cookies</h2>
        <p>
          These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
        </p>
      </section>

      <section id="third-party">
        <h2>7. Third-Party Services</h2>
        <p>
          In some cases, we may use third-party services (such as map embeds, newsletter forms, or video players) that may also set cookies on your device. We do not have direct control over the cookies placed by these third-party services.
        </p>
      </section>

      <section id="managing-cookies">
        <h2>8. Managing Cookies</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our Cookie Consent banner upon your first visit. Additionally, you can set or amend your web browser controls to accept or refuse cookies at any time.
        </p>
      </section>

      <section id="policy-updates">
        <h2>9. Policy Updates</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
        </p>
      </section>

      <section id="contact">
        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> [Insert Verified Email]
        </p>
      </section>
    </LegalLayout>
  );
}
