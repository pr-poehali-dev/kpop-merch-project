import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <Card
        className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600 text-white">
                NEW
              </Badge>
            )}
            {product.isSale && (
              <Badge className="bg-red-500 hover:bg-red-600 text-white">
                SALE
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="w-4 h-4" />
          </Button>

          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button className="bg-white text-black hover:bg-gray-100">
              Подробнее
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          {/* Artist */}
          <p className="text-sm text-purple-600 font-medium mb-1">
            {product.artist}
          </p>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-500 ml-1">
              ({product.rating}.0)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                {product.price.toLocaleString()}₽
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice.toLocaleString()}₽
                </span>
              )}
            </div>
            {product.isSale && product.originalPrice && (
              <Badge variant="destructive" className="text-xs">
                -
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100,
                )}
                %
              </Badge>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium"
            disabled={!product.inStock}
            onClick={(e) => e.stopPropagation()}
          >
            {product.inStock ? (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />В корзину
              </>
            ) : (
              "Нет в наличии"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Product Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-600">
              {product.title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover rounded-lg"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-green-500 text-white">NEW</Badge>
                )}
                {product.isSale && (
                  <Badge className="bg-red-500 text-white">SALE</Badge>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-lg text-purple-600 font-medium mb-2">
                  {product.artist}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.rating}.0)
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Описание</h4>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price.toLocaleString()}₽
                  </span>
                  {product.isSale && product.originalPrice && (
                    <Badge variant="destructive">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      %
                    </Badge>
                  )}
                </div>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()}₽
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3"
                  disabled={!product.inStock}
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Добавить в корзину
                    </>
                  ) : (
                    "Нет в наличии"
                  )}
                </Button>

                <Button variant="outline" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />В избранное
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
