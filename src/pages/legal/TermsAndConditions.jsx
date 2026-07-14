import LegalLayout from '../../components/legal/LegalLayout';

export default function TermsAndConditions() {
  const sections = [
    { id: "website-use", title: "1. Website Use" },
    { id: "travel-information", title: "2. Travel Information" },
    { id: "package-availability", title: "3. Package Availability" },
    { id: "pricing", title: "4. Pricing" },
    { id: "quotations", title: "5. Quotations" },
    { id: "booking-confirmation", title: "6. Booking Confirmation" },
    { id: "traveller-responsibilities", title: "7. Traveller Responsibilities" },
    { id: "passports-visas", title: "8. Passports and Visas" },
    { id: "health-insurance", title: "9. Health and Travel Insurance" },
    { id: "third-party", title: "10. Third-Party Suppliers" },
    { id: "changes-itineraries", title: "11. Changes to Itineraries" },
    { id: "limitation", title: "12. Limitation of Information" },
    { id: "intellectual-property", title: "13. Intellectual Property" },
    { id: "prohibited-use", title: "14. Prohibited Use" },
    { id: "governing-terms", title: "15. Governing Terms" },
    { id: "contact", title: "16. Contact Information" }
  ];

  return (
    <LegalLayout 
      title="Terms and Conditions"
      seoTitle="Terms and Conditions | Tourswale"
      lastUpdated="[Insert Date Before Launch]"
      sections={sections}
    >
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-charcoal/80 text-sm font-semibold">
        <strong>Important:</strong> Submitting an enquiry does not confirm a reservation. A booking is confirmed only after the traveller receives written confirmation and completes the required payment process.
      </div>

      <section id="website-use">
        <h2>1. Website Use</h2>
        <p>
          By accessing and using the Tourswale website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
        </p>
      </section>

      <section id="travel-information">
        <h2>2. Travel Information</h2>
        <p>
          Information provided on this website—including destinations, itineraries, weather patterns, and travel tips—is intended for general guidance. While we strive for accuracy, conditions can change rapidly. Travellers should verify essential details before departure.
        </p>
      </section>

      <section id="package-availability">
        <h2>3. Package Availability</h2>
        <p>
          All tour packages, accommodations, and services displayed on our website are subject to availability. Displaying a package on the website does not guarantee that it can be booked for your specific travel dates.
        </p>
      </section>

      <section id="pricing">
        <h2>4. Pricing</h2>
        <p>
          Prices mentioned on the website (if any) are indicative and may vary based on travel dates, group size, selected accommodation, and currency fluctuations. Final pricing will be provided in a formal quotation.
        </p>
      </section>

      <section id="quotations">
        <h2>5. Quotations</h2>
        <p>
          A quotation provided in response to an enquiry is valid for a limited period as specified in the proposal. Quotations are subject to change if the booking is not confirmed within the validity period.
        </p>
      </section>

      <section id="booking-confirmation">
        <h2>6. Booking Confirmation</h2>
        <p>
          A booking is only considered confirmed once Tourswale issues a formal written booking confirmation or invoice, and the required deposit or full payment has been successfully received.
        </p>
      </section>

      <section id="traveller-responsibilities">
        <h2>7. Traveller Responsibilities</h2>
        <p>
          It is the traveller's responsibility to provide accurate information during the enquiry and booking process, including names as they appear on passports and correct contact details.
        </p>
      </section>

      <section id="passports-visas">
        <h2>8. Passports and Visas</h2>
        <p>
          Travellers are solely responsible for ensuring they hold a valid passport (usually requiring at least 6 months validity from the date of return) and obtaining any necessary visas or entry permits for their destination. Tourswale is not liable for travel disruptions caused by incomplete or invalid documentation.
        </p>
      </section>

      <section id="health-insurance">
        <h2>9. Health and Travel Insurance</h2>
        <p>
          We strongly recommend that all travellers purchase comprehensive travel insurance covering medical expenses, trip cancellations, and lost baggage. Tourswale is not responsible for costs arising from medical emergencies or uninsured travel disruptions.
        </p>
      </section>

      <section id="third-party">
        <h2>10. Third-Party Suppliers</h2>
        <p>
          Tourswale acts as an agent connecting travellers with third-party suppliers (e.g., airlines, hotels, local transport). We are not liable for the acts, omissions, or service failures of these independent suppliers.
        </p>
      </section>

      <section id="changes-itineraries">
        <h2>11. Changes to Itineraries</h2>
        <p>
          Tourswale reserves the right to modify itineraries or substitute accommodations of a similar standard if unforeseen circumstances or supplier constraints dictate such changes.
        </p>
      </section>

      <section id="limitation">
        <h2>12. Limitation of Information</h2>
        <p>
          Tourswale shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or reliance on any information provided herein.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>13. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and layout, is the property of Tourswale and is protected by applicable copyright and intellectual property laws.
        </p>
      </section>

      <section id="prohibited-use">
        <h2>14. Prohibited Use</h2>
        <p>
          You may not use this website to transmit harmful code, conduct fraudulent activities, or systematically extract data without explicit written permission.
        </p>
      </section>

      <section id="governing-terms">
        <h2>15. Governing Terms Placeholder</h2>
        <p>
          [Developer Note: Jurisdiction and governing law details will be updated here once verified business details are provided.]
        </p>
      </section>

      <section id="contact">
        <h2>16. Contact Information</h2>
        <p>
          For queries regarding these Terms and Conditions, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> [Insert Verified Email]<br/>
          <strong>Phone:</strong> [Insert Verified Phone Number]
        </p>
      </section>
    </LegalLayout>
  );
}
