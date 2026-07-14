import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import ImageWithFallback from '../common/ImageWithFallback';
import { blogPreviews } from '../../data/homeData';

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="text-center flex flex-col items-center mb-16">
          <SectionHeading 
            eyebrow="Travel Inspiration"
            title="Travel Guides, Ideas and Expert Tips"
            description="Explore destination guides, travel tips, seasonal recommendations and practical advice to help you plan a smoother and more rewarding holiday."
            className="items-center text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPreviews.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <ImageWithFallback 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-bold text-forest uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-forest transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/50 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-gold font-bold text-xs hover:text-forest transition-colors uppercase tracking-wider"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton to="/blog">
            Explore Travel Guides
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
