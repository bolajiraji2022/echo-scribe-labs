-- Create contacts table for storing client information
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contacts (public form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public read access (admin only)
CREATE POLICY "No public read access to contacts" 
ON public.contacts 
FOR SELECT 
USING (false);