import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-md">
      <div className="relative h-40 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}
        ></div>
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>

      <CardContent className="p-6 relative -mt-8 bg-white rounded-t-2xl">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600">{category.itemCount} товаров</p>
        </div>

        {/* Decorative element */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
