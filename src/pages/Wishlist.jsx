import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "سماعات لاسلكية فاخرة", price: 499.99, image: "https://example.com/headphones.jpg" },
    { id: 2, name: "ساعة ذكية متطورة", price: 299.99, image: "https://example.com/smartwatch.jpg" },
    { id: 3, name: "حقيبة ظهر للسفر", price: 129.99, image: "https://example.com/backpack.jpg" },
    { id: 4, name: "كاميرا رقمية احترافية", price: 799.99, image: "https://example.com/camera.jpg" },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    console.log(`تمت إضافة ${item.name} إلى سلة التسوق`);
    // هنا يمكنك إضافة المنطق الخاص بإضافة العنصر إلى سلة التسوق
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">قائمة الأمنيات</h1>
        {wishlistItems.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl font-semibold mb-2">قائمة الأمنيات فارغة</p>
              <p className="text-gray-600 mb-4">أضف بعض المنتجات إلى قائمة الأمنيات الخاصة بك للعثور عليها بسهولة لاحقًا.</p>
              <Button>استكشف المنتجات</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="truncate">{item.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <img src={item.image} alt={item.name} className="object-cover object-center" />
                  </div>
                  <p className="text-lg font-bold mb-2">{item.price.toFixed(2)} ريال</p>
                  <Button className="w-full" onClick={() => addToCart(item)}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    إضافة إلى السلة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
