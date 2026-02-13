import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    return NextResponse.json({
        message: `Hello, I am alive!`, 
        timestamp: new Date().toISOString(),
        poweredBy: process.env.NEXT_PUBLIC_SITE_NAME || 'Next.js',
    });
}