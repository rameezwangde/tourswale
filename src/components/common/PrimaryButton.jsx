import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PrimaryButton({ children, to, onClick, className = "", type = "button" }) {
  const baseClasses = `inline-flex items-center justify-center bg-forest hover:bg-emerald text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative overflow-hidden ${className}`;
  
  const content = (
    <>
      <span className="relative z-10 group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
        {children} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></span>
    </>
  );

  if (to) {
    return <Link to={to} className={baseClasses}>{content}</Link>;
  }
  
  return <button type={type} onClick={onClick} className={baseClasses}>{content}</button>;
}
