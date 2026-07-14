import LegalLayout from '../../components/legal/LegalLayout';

export default function CancellationPolicy() {
  const sections = [
    { id: "general-principle", title: "1. General Principle" },
    { id: "cancellation-requests", title: "2. Cancellation Requests" },
    { id: "supplier-charges", title: "3. Supplier Charges" },
    { id: "non-refundable", title: "4. Non-Refundable Components" },
    { id: "date-changes", title: "5. Date Changes" },
    { id: "name-changes", title: "6. Traveller Name Changes" },
    { id: "visa-refusal", title: "7. Visa Refusal" },
    { id: "force-majeure", title: "8. Force Majeure and Unforeseen Events" },
    { id: "refund-processing", title: "9. Refund Processing" },
    { id: "written-confirmation", title: "10. Written Confirmation" },
    { id: "contact", title: "11. Contact Information" }
  ];

  return (
    <LegalLayout 
      title="Cancellation and Amendment Policy"
      seoTitle="Cancellation Policy | Tourswale"
      lastUpdated="[Insert Date Before Launch]"
      sections={sections}
    >
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 text-charcoal/80 text-sm font-semibold">
        Final cancellation and amendment terms must be provided in the confirmed quotation or booking documentation. Cancellation charges depend on the confirmed package, travel date, supplier policies, and services already booked.
      </div>

      <section id="general-principle">
        <h2>1. General Principle</h2>
        <p>
          We understand that travel plans can change unexpectedly. Our cancellation policy is designed to be as transparent as possible, reflecting the actual costs incurred by Tourswale and our third-party suppliers when a booking is modified or cancelled.
        </p>
      </section>

      <section id="cancellation-requests">
        <h2>2. Cancellation Requests</h2>
        <p>
          All requests for cancellations or amendments must be submitted to Tourswale in writing. Verbal cancellations will not be accepted. The date the written request is received during our standard working hours determines the applicable cancellation tier.
        </p>
      </section>

      <section id="supplier-charges">
        <h2>3. Supplier Charges</h2>
        <p>
          Many travel components, such as flights, hotels, and permits, are subject to strict cancellation rules dictated by the respective suppliers. Any charges levied by these suppliers will be passed on to the traveller in addition to any applicable Tourswale service fees.
        </p>
      </section>

      <section id="non-refundable">
        <h2>4. Non-Refundable Components</h2>
        <p>
          Certain services may be entirely non-refundable immediately after booking. This often includes low-cost airline tickets, peak-season hotel bookings, specialized permits, and promotional or discounted packages. These details will be communicated in your specific booking terms.
        </p>
      </section>

      <section id="date-changes">
        <h2>5. Date Changes</h2>
        <p>
          Requests to change travel dates are treated as amendments. Depending on proximity to the departure date and supplier flexibility, amendments may incur fees. If a date change requires cancelling and rebooking certain services, standard cancellation charges may apply.
        </p>
      </section>

      <section id="name-changes">
        <h2>6. Traveller Name Changes</h2>
        <p>
          Changing the name of a traveller after a booking is confirmed is often restricted, particularly by airlines. Where permitted, name changes may incur administrative fees imposed by the supplier.
        </p>
      </section>

      <section id="visa-refusal">
        <h2>7. Visa Refusal</h2>
        <p>
          Tourswale is not responsible for the approval or denial of visas by immigration authorities. If a traveller must cancel a trip due to a visa refusal, the standard cancellation policy applies. Travellers are advised to apply for visas well in advance.
        </p>
      </section>

      <section id="force-majeure">
        <h2>8. Force Majeure and Unforeseen Events</h2>
        <p>
          In the event of cancellation due to force majeure (such as natural disasters, pandemics, or government travel restrictions), Tourswale will endeavour to recover funds from suppliers or secure travel credits. However, cash refunds cannot be guaranteed where suppliers do not provide them.
        </p>
      </section>

      <section id="refund-processing">
        <h2>9. Refund Processing</h2>
        <p>
          Where a refund is due, the amount will be calculated after deducting applicable cancellation charges and administrative fees. Refunds will generally be processed back to the original method of payment. Processing timelines depend on the relevant suppliers and banking institutions.
        </p>
      </section>

      <section id="written-confirmation">
        <h2>10. Written Confirmation</h2>
        <p>
          Your specific cancellation schedule, outlining the percentage or amount retained at various time intervals prior to departure, will be documented in your formal booking confirmation. That specific schedule supersedes this general policy.
        </p>
      </section>

      <section id="contact">
        <h2>11. Contact Information</h2>
        <p>
          To submit a cancellation request or enquire about specific terms, please contact:
        </p>
        <p>
          <strong>Email:</strong> [Insert Verified Email]<br/>
          <strong>Phone:</strong> [Insert Verified Phone Number]
        </p>
      </section>
    </LegalLayout>
  );
}
