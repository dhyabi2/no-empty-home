import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderHistory = () => {
  const orders = [
    { id: 1, date: '2024-03-15', status: 'Delivered', total: 50 },
    { id: 2, date: '2024-03-10', status: 'Processing', total: 75 },
    { id: 3, date: '2024-03-05', status: 'Cancelled', total: 100 },
  ];

  const handleTrackOrder = (orderId) => {
    alert(`Tracking order ${orderId}`);
    // In a real app, this would navigate to an order tracking page
  };

  const handleCancelOrder = (orderId) => {
    alert(`Cancelling order ${orderId}`);
    // In a real app, this would update the order status
  };

  const handleReorder = (orderId) => {
    alert(`Reordering items from order ${orderId}`);
    // In a real app, this would add items to the cart
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Order History</h1>
        {orders.map((order) => (
          <Card key={order.id} className="mb-4">
            <CardHeader>
              <CardTitle>Order #{order.id}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {order.date}</p>
              <p>Status: {order.status}</p>
              <p>Total: ${order.total}</p>
              <div className="mt-4 space-x-2">
                <Button onClick={() => handleTrackOrder(order.id)}>Track Order</Button>
                {order.status === 'Processing' && (
                  <Button onClick={() => handleCancelOrder(order.id)} variant="destructive">
                    Cancel Order
                  </Button>
                )}
                <Button onClick={() => handleReorder(order.id)} variant="outline">
                  Reorder
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistory;
