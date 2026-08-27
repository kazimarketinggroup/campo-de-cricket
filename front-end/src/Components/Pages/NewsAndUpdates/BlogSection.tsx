
import { Search, Calendar, MessageSquare, Folder, ArrowUpRight } from "lucide-react";
import mainimage1 from "../../../assets/News/Img.png";
import mainimage2 from "../../../assets/News/Img (1).png";
import sideImage1 from "../../../assets/News/Img (2).png";
import sideImage2 from "../../../assets/News/Img (3).png";
import sideImage3 from "../../../assets/News/Img (4).png";
import sideImage4 from "../../../assets/News/Img (5).png";

const mainPosts = [
  {
    image: mainimage1,
    category: "Cricket",
    date: "Mon, 08 May",
    comments: 0,
    title: "Spring Tournament Dates Taking Shape",
    excerpt: "Planning has begun for our first Spring Tournament, scheduled for April...",
    author: "Cody Fisher",
  },
  {
    image: mainimage2,
    category: "Cricket",
    date: "Mon, 08 May",
    comments: 0,
    title: "Ground Preparation Enters Phase 2",
    excerpt: "Work continues as pitch preparation moves into its next stage. Ground leveling...",
    author: "Cody Fisher",
  },
];

const relatedPosts = [
  { image: sideImage1, category: "Cricket", date: "Mon, 08 May", title: "Cultural Accommodation Plan" },
  { image: sideImage2, date: "Mon, 08 May", title: "Focuses on Player Comfort" },
  { image: sideImage3, date: "Mon, 08 May", title: "International Team Interest" },
  { image: sideImage4, date: "Mon, 08 May", title: "Community Support Progress" },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-6 bg-white">
      {/* Reduced from max-w-6xl to 5xl */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-10">Latest Updates</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content Area - Scaled Down */}
          <div className="lg:col-span-2 space-y-6">
            {mainPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-4 transition-shadow hover:shadow-md">
                {/* Reduced height from 400px to 280px */}
                <img src={post.image} alt={post.title} className="w-full h-[280px] object-cover rounded-xl mb-4" />
                
                <div className="flex items-center gap-3 text-[10px] text-blue-600 font-medium mb-2">
                  <span className="flex items-center gap-1"><Folder size={12} /> {post.category}</span>
                  <span className="flex items-center gap-1 text-gray-400"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1 text-gray-400"><MessageSquare size={12} /> {post.comments}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{post.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 border border-dashed border-blue-100 p-3 rounded-lg bg-blue-50/20">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" /> 
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase">Posted by:</p>
                      <p className="text-xs font-semibold text-gray-700">{post.author}</p>
                    </div>
                  </div>
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - Scaled Down */}
          <div className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search.." 
                className="w-full py-3 px-4 rounded-xl border border-gray-100 shadow-sm focus:outline-none text-xs text-gray-400"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h4 className="text-sm font-bold text-gray-800 mb-5">Related posts</h4>
              
              <div className="space-y-5">
                {relatedPosts.map((post, idx) => (
                  <div key={idx} className={`${idx === 0 ? "space-y-3" : "flex gap-3 items-center"}`}>
                    {/* First image reduced from h-48 to h-32 */}
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className={`${idx === 0 ? "w-full h-32" : "w-16 h-12"} object-cover rounded-lg`} 
                    />
                    <div className="space-y-0.5">
                      {idx === 0 && (
                         <div className="flex items-center gap-2 text-[9px] text-blue-600 font-medium">
                            <span className="flex items-center gap-1"><Folder size={10} /> {post.category}</span>
                            <span className="flex items-center gap-1 text-gray-400"><Calendar size={10} /> {post.date}</span>
                         </div>
                      )}
                      <h5 className={`font-bold text-gray-800 leading-tight ${idx === 0 ? "text-sm" : "text-[11px]"}`}>
                        {post.title}
                      </h5>
                      {idx !== 0 && (
                        <p className="flex items-center gap-1 text-[9px] text-gray-400">
                          <Calendar size={10} /> {post.date}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;