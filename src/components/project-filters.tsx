import React from "react";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              isActive
                ? "bg-black text-white"
                : "bg-white text-black border border-[#D4D4D4] hover:bg-[#F5F5F5]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilters;
