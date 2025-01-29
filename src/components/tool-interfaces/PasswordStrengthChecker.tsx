import React, { useState } from 'react';

const PasswordStrengthChecker: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<string>('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    checkStrength(event.target.value);
  };

  const checkStrength = (password: string) => {
    const strongPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (strongPasswordPattern.test(password)) {
      setStrength('Strong');
    } else if (mediumPasswordPattern.test(password)) {
      setStrength('Medium');
    } else {
      setStrength('Weak');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {strength && (
        <div>
          <p className="mt-2 text-sm text-gray-700">Password Strength: {strength}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
