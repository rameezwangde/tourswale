import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Container from '../common/Container';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // MOCK SUBMISSION HANDLER
    // TODO: Integrate actual newsletter backend (e.g., Mailchimp, SendGrid, etc.)
    // Note: Email addresses are not permanently stored in this demo handler.
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
      
      <Container className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Travel Inspiration, Delivered to Your Inbox
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Receive destination ideas, seasonal travel guides and selected holiday offers from Tourswale.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative mb-6">
          <div className="relative flex items-center">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              disabled={status === 'loading' || status === 'success'}
              placeholder="Enter your email address"
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-full py-4 pl-6 pr-40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors disabled:opacity-50"
            />
            
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-gold hover:bg-yellow-600 text-white px-6 rounded-full text-sm font-bold transition-all flex items-center gap-2 disabled:opacity-50 disabled:hover:bg-gold"
            >
              {status === 'loading' ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending</>
              ) : status === 'success' ? (
                <><CheckCircle2 className="w-4 h-4" /> Joined</>
              ) : (
                <><Send className="w-4 h-4" /> Join</>
              )}
            </button>
          </div>
          
          {status === 'error' && (
            <div className="absolute -bottom-6 left-0 right-0 text-red-300 text-xs font-semibold flex items-center justify-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> {errorMessage}
            </div>
          )}
          {status === 'success' && (
            <div className="absolute -bottom-6 left-0 right-0 text-green-300 text-xs font-semibold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Thank you for subscribing!
            </div>
          )}
        </form>
        
        <p className="text-white/40 text-xs">
          By subscribing, you agree to receive travel inspiration and occasional offers. You can unsubscribe at any time.
        </p>
      </Container>
    </section>
  );
}
