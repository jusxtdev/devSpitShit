function BlogCard({ title, createdAt, coverURL }) {
  return (
    <div className="group flex flex-col cursor-pointer">
      {/* Cover image */}
      <div id="cover" className="overflow-hidden rounded-sm">
        <img
          src={coverURL}
          alt="cover"
          className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>

      {/* Blog info */}
      <div id="blog-info" className="pt-4 pb-2 flex flex-col gap-1">
        <p className="text-base font-medium text-[#171717] leading-snug">
          {title}
        </p>
        <p className="text-xs text-[#a3a3a3] font-iosveka tracking-wide">
          {new Date(createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Border line on hover */}
      <div className="h-px w-0 bg-[#171717] group-hover:w-full transition-all duration-300 ease-out" />
    </div>
  );
}

export default BlogCard;
