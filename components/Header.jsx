import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";

const categories = [
  { name: "React", slug: "react" },
  { name: "Development", slug: "dev" },
];

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block boarder-pink-400 py-8">
        <div className="md:float-left block">
          <Link href={"/"}>
            <span className="cursor-pointer font-bold text-4xl text-pink-600">
              CDBlob
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((categories) => (
            <Link key={categories.slug} href={`/category/${categories.slug}`}>
              <span className="md:float-right mt-2 align-middle text-pink-600 ml-4 font-semibold cursor-pointer">
                {categories.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
