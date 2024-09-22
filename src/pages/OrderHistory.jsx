import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Truck, XCircle, ShoppingCart, MessageCircle } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderHistory = () => {
  const orders = [
    { id: 1, date: '2023-05-01', status: 'Delivered', items: ['Coffee', 'Croissant'], total: 15.99 },
    { id: 2, date: '2023-05-15', status: 'In Transit', items: ['Latte', 'Muffin'], total: 12.50 },
    { id: 3, date: '2023-05-30', status: 'Processing', items: ['Espresso', 'Sandwich'], total: 18.75 },
  ];

  const handleTrackOrder = (orderId) => {
    alert(`Tracking order ${orderId}`);
  };

  const handleRateProduct = (orderId) => {
    alert(`Rating products for order ${orderId}`);
  };

  const handleCancelOrder = (orderId) => {
    alert(`Cancelling order ${orderId}`);
  };

  const handleReorder = (orderId) => {
    alert(`Reordering items from order ${orderId}`);
  };

  const handleContactSupport = () => {
    alert('Contacting support');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Order History</h1>
        {orders.map((order) => (
          <Card key={order.id} className="mb-6">
            <CardHeader>
              <CardTitle>Order #{order.id} - {order.date}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Status: {order.status}</p>
              <p className="mb-2">Items: {order.items.join(', ')}</p>
              <p className="mb-4">Total: ${order.total.toFixed(2)}</p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => handleTrackOrder(order.id)}>
                  <Truck className="mr-2 h-4 w-4" />
                  Track Order
                </Button>
                <Button onClick={() => handleRateProduct(order.id)}>
                  <Star className="mr-2 h-4 w-4" />
                  Rate Product
                </Button>
                {order.status !== 'Delivered' && (
                  <Button variant="destructive" onClick={() => handleCancelOrder(order.id)}>
                    <XCircle className="mr-2 h-4 w-4" />
                    Cancel Order
                  </Button>
                )}
                <Button onClick={() => handleReorder(order.id)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Reorder
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button onClick={handleContactSupport} className="mt-4">
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact Support
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistory;
