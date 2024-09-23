import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login with any credentials
    login({ email, points: 0 });
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" dir="rtl">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">تسجيل الدخول</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">تسجيل الدخول</Button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">نسيت كلمة المرور؟</a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              ليس لديك حساب؟{' '}
              <a href="#" className="text-blue-600 hover:underline">إنشاء حساب جديد</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
