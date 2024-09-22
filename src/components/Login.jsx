import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, FacebookIcon, TwitterIcon, GithubIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const passwordStrength = (password) => {
    const strengthChecks = {
      length: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    const strength = Object.values(strengthChecks).filter(Boolean).length;
    return ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength - 1] || 'Very Weak';
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </Button>
            </div>
            {password && (
              <p className={`text-sm mt-1 ${
                passwordStrength(password) === 'Very Strong' ? 'text-green-500' :
                passwordStrength(password) === 'Strong' ? 'text-blue-500' :
                passwordStrength(password) === 'Good' ? 'text-yellow-500' :
                'text-red-500'
              }`}>
                Password strength: {passwordStrength(password)}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm text-gray-500">Or sign in with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Button variant="outline" size="icon">
              <FacebookIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <TwitterIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <GithubIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
