import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Container from '../common/Container';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call (no backend dependency yet)
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! We will send you travel inspiration soon.');
      setEmail('');
      
      // Reset after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="bg-forest rounded-[32px] overflow-hidden relative shadow-[0_20px_40px_-15px_rgba(20,62,51,0.5)]">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10 px-6 py-16 md:py-20 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">Travel Inspiration, Delivered to Your Inbox</h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">Receive destination ideas, seasonal travel guides and selected holiday offers from Tourswale.</p>
            </div>
            
            <div className="w-full lg:w-auto min-w-[320px] max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative flex items-center">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address" 
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 pl-6 pr-44 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors text-sm"
                    disabled={status === 'loading' || status === 'success'}
                    aria-label="Email address"
                  />
                  <button 
                    type="submit" 
                    className={`absolute right-2 px-6 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${status === 'success' ? 'bg-emerald text-white' : 'bg-gold hover:bg-white text-forest'}`}
                    disabled={status === 'loading' || status === 'success'}
                  >
                    {status === 'loading' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Joined</span>
                    ) : (
                      <span className="flex items-center gap-1.5">Join the Journey <Send className="w-3.5 h-3.5" /></span>
                    )}
                  </button>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-300 text-xs flex items-center gap-1 mt-1 pl-2">
                    <AlertCircle className="w-3.5 h-3.5" /> {message}
                  </p>
                )}
                {status === 'success' && (
                  <p className="text-emerald-300 text-xs flex items-center gap-1 mt-1 pl-2">
                    {message}
                  </p>
                )}
                <p className="text-white/40 text-[10px] text-center lg:text-left mt-2">
                  * Note: Integration with newsletter backend can be connected later.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
