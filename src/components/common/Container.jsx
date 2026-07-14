export default function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
