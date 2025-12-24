import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MenuSection({ title, items, onImageClick }) {
  return (
    <div className="mb-10 last:mb-0">
      <h2 className="text-2xl font-serif text-bosco mb-6 border-b border-gray-100 pb-2">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4 group">
            {/* Image with hover and click effect */}
            <motion.div 
              className="flex-shrink-0 overflow-hidden rounded-md cursor-pointer shadow-sm relative w-40 h-40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onImageClick && onImageClick(item.image)}
            >
              <Image 
                src={item.image} 
                alt={item.name} 
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium text-lg text-antracite group-hover:text-bosco transition-colors">{item.name}</h3>
                <span className="text-bosco font-semibold whitespace-nowrap ml-4">€ {item.price}</span>
              </div>
              <p className="text-grigio text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}