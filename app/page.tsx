//this is the main page of the app, it will be rendered when the user visits the root url
import React from 'react';  
import { Card, CardContent, CardHeader, CardDescription} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


const HomePage = () => {
  const router = useRouter();
    return (
        <div className='container md:py-12'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>Welcome to the AI Agent App</h1>
                <p className='text-lg text-muted-foreground mb-8'>Create and manage your AI agents with ease</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> 
                <Card>
                    <CardHeader>
                        <h2 className='text-2xl font-semibold'>Create a New Agent</h2>
                    </CardHeader>
                    </Card>
                    )