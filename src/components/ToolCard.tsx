import React from 'react';
import { Tool as ToolType } from '../types/tool';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  tool: ToolType;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const Icon = Icons[tool.icon as keyof typeof Icons];

  return (
    <div className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon className="h-6 w-6 text-indigo-600" />}
          <h3 className="ml-2 text-lg font-medium text-gray-900">{tool.name}</h3>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">{tool.description}</p>
      <div className="mt-4">
        <Link
          to={`/tool/${tool.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Use Tool
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;