import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log('request.nextUrl :>> ', request.nextUrl); // more robust than request.url
  console.log('request.Url :>> ', request.url);
  console.log('searchParams :>> ', searchParams);
  console.log('searchParams :>> ', searchParams.get('query'));
  const query = searchParams.get('query');
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json(filteredCourses);
}
