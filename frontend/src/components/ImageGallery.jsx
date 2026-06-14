import { Image as ImageIcon } from 'lucide-react';

export default function ImageGallery({ images }) {
  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
        <ImageIcon size={16} />
        Related Images
      </h2>
      
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <div key={i} className="group relative rounded-xl overflow-hidden aspect-video">
            <img 
              src={img.url} 
              alt={img.caption} 
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-2">
              <p className="text-[10px] text-white line-clamp-2">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
