import { Link } from 'react-router-dom';
import Container from '../common/Container';

export default function InnerHero({ 
  title, 
  description, 
  backgroundImage, 
  breadcrumbs = [], 
  overlayOpacity = "bg-forest/80" 
}) {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background Image */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-0 ${overlayOpacity}`}></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-forest">
          {/* Subtle pattern for pages without an image */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        </div>
      )}

      <Container className="relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span>/</span>
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-gold transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white" aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
          {title}
        </h1>
        
        {description && (
          <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
