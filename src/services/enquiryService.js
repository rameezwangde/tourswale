/**
 * Enquiry Service
 * 
 * Abstraction layer for form submissions.
 * Currently uses a development-safe mock handler as no backend or EmailJS 
 * configuration has been verified. 
 * 
 * TODO: Integrate actual backend (e.g., API route, EmailJS, Formspree).
 * IMPORTANT: Do not claim this form sends real emails in production yet.
 */

export const submitGeneralEnquiry = async (payload) => {
  // Simulate network delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Basic mock validation to ensure payload is somewhat valid
      if (!payload.name || !payload.email || !payload.phone) {
        reject(new Error("Required fields missing"));
      } else {
        console.log("Mock Enquiry Submitted Successfully:", payload);
        resolve({ success: true, message: "Enquiry received successfully." });
      }
    }, 1500); // 1.5 second simulated delay
  });
};
