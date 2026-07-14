import Container from '../../common/Container';
import BlogCard from '../BlogCard';

export default function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">You May Also Like</h2>
          <p className="text-charcoal/70 text-base max-w-2xl mx-auto">
            Explore more travel guides and inspiration matching your interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
