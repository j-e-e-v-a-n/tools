export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

export type Category = {
  id: string;
  name: string;
  description: string;
};

export interface ToolResult {
  success: boolean;
  data: any;
  error?: string;
}