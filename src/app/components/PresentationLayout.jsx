import { Outlet, useNavigate, useLocation } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const slides = [
  { path: '/', label: 'Hero' },
  { path: '/overview', label: 'Overview' },
  { path: '/problem', label: 'Problem' },
  { path: '/solution', label: 'Solution' },
  { path: '/modules', label: 'Modules' },
  { path: '/platform', label: 'Platform' },
  { path: '/technology', label: 'Technology' },
  { path: '/roadmap', label: 'Roadmap' },
  { path: '/impact', label: 'Impact' },
  { path: '/cta', label: 'CTA' },
];

function PresentationLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentIndex = slides.findIndex(slide => slide.path === location.pathname);
  
  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      navigate(slides[currentIndex + 1].path);
    }
  };
  
  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(slides[currentIndex - 1].path);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };
  
  return (
    <div 
      className="min-h-screen bg-gray-50"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Outlet />
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="p-2 rounded-full hover:bg-orange-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-orange-600" />
        </button>
        
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.path}
              onClick={() => navigate(slide.path)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-orange-600 w-8' 
                  : 'bg-gray-300 hover:bg-orange-300'
              }`}
              title={slide.label}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          disabled={currentIndex === slides.length - 1}
          className="p-2 rounded-full hover:bg-orange-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronRight className="w-5 h-5 text-orange-600" />
        </button>
      </div>
      
      {/* Slide Counter */}
      <div className="fixed top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200">
        <span className="text-sm text-gray-600">
          {currentIndex + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}

export default PresentationLayout;
