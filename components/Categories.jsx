import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-slate-500 shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((categories) => (
        <Link key={categories.slug} href={`/category/${categories.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {categories.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
