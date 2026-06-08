import { useTheme } from "../hooks/useTheme";

function BlogCard({ title, createdAt, coverURL }) {
  const { isDark } = useTheme();

  return (
    <div className="group flex flex-col cursor-pointer">
      <div id="cover" className="overflow-hidden rounded-sm">
        <img
          src={coverURL}
          alt="cover"
          className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>

      <div id="blog-info" className="pt-4 pb-2 flex flex-col gap-1">
        <p className={`text-base font-medium leading-snug transition-colors duration-300 ${isDark ? "text-[#e8dcc8]" : "text-[#171717]"}`}>
          {title}
        </p>
        <p className={`text-xs font-iosveka tracking-wide transition-colors duration-300 ${isDark ? "text-[#8a8aa0]" : "text-[#a3a3a3]"}`}>
          {new Date(createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <div className={`h-px w-0 group-hover:w-full transition-all duration-300 ease-out ${isDark ? "bg-[#e8dcc8]" : "bg-[#171717]"}`} />
    </div>
  );
}

export default BlogCard;
