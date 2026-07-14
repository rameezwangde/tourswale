import { Link } from 'react-router-dom';

export default function SecondaryButton({ children, to, onClick, className = "", light = false }) {
  const colorClasses = light 
    ? "bg-white/10 text-white hover:bg-white hover:text-forest border-white/20" 
    : "bg-transparent text-charcoal hover:bg-cream border-gray-200";

  const baseClasses = `inline-flex items-center justify-center border px-8 py-3.5 rounded-xl text-sm font-bold transition-colors ${colorClasses} ${className}`;
  
  if (to) {
    return <Link to={to} className={baseClasses}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={baseClasses}>{children}</button>;
}
