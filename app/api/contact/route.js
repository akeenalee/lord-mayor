import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body || {};

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please complete all required fields before submitting.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to process your request at the moment.' },
      { status: 500 }
    );
  }
}
