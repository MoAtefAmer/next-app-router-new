import courses from './data.json';
import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  // console.log('request.body :>> ', await request.json());
  try {
    const course = await request.json();
    courses.push({...course});
    console.log('courses :>> ', courses);
  } catch (error) {
    return console.log(error);
  }

  

  return NextResponse.json({ message: 'Course created' });
}
