import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import ImageWithFallback from '../common/ImageWithFallback';
import { blogPreviews } from '../../data/homeData';

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-forest text-white">
      {/* Background Decor */}
      <svg className="absolute bottom-0 left-0 w-full lg:w-1/2 h-[60%] pointer-events-none opacity-[0.05] text-gold" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax slice">
        <path d="M 0 500 L 100 350 L 150 420 L 250 250 L 320 380 L 450 280 L 500 350 L 500 500 Z" stroke="currentColor" strokeWidth="2" />
        <path d="M 80 400 L 120 300 L 180 380 L 280 180 L 350 320 L 480 200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="text-center flex flex-col items-center mb-16">
          <SectionHeading 
            eyebrow="Travel Inspiration"
            title="Travel Guides, Ideas and Expert Tips"
            description="Explore destination guides, travel tips, seasonal recommendations and practical advice to help you plan a smoother and more rewarding holiday."
            className="items-center text-center"
            light={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPreviews.map((post) => (
            <article key={post.id} className="group cursor-pointer bg-white/5 border border-gold/10 p-4 rounded-3xl hover:bg-white/10 transition-colors duration-300">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <ImageWithFallback 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-forest/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> {post.category}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-4 text-xs text-white/60 font-semibold mb-4 uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" /> {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-gold font-bold text-sm hover:text-white transition-colors group/link"
                >
                  Read Article 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton to="/blog" light={true}>
            View All Articles
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
