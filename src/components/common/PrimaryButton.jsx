import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PrimaryButton({ children, to, onClick, className = "", type = "button", light = false }) {
  const bgColors = light ? "bg-white text-forest hover:bg-cream" : "bg-forest hover:bg-emerald text-white";
  const hoverText = light ? "group-hover:text-forest" : "group-hover:text-gold";

  const baseClasses = `inline-flex items-center justify-center ${bgColors} px-8 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative overflow-hidden ${className}`;
  
  const content = (
    <>
      <span className={`relative z-10 ${hoverText} transition-colors duration-300 flex items-center gap-2`}>
        {children} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      <span className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></span>
    </>
  );

  if (to) {
    return <Link to={to} className={baseClasses}>{content}</Link>;
  }
  
  return <button type={type} onClick={onClick} className={baseClasses}>{content}</button>;
}
