import React from 'react';
import img1 from '../../assets/AI/image-2.png'
import img2 from '../../assets/AI/image-3.png'

const OurCourses = () => {
    const courses = [
        {
            id: 1,
            title: "Web Design Fundamentals",
            duration: "4 Weeks",
            level: "Beginner",
            author: "John Smith",
            description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            image: img1
        },
        {
            id: 2,
            title: "Web Design Fundamentals",
            duration: "4 Weeks",
            level: "Beginner",
            author: "John Smith",
            description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            image: img2
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
            {/* Heading Section */}
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-3xl font-semibold">Our Courses</h2>
                    <p className="text-gray-600 max-w-xl mt-2">
                        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu ut dignissim lorem nibh et.
                    </p>
                </div>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">View All</button>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:p-10 gap-8">
                {courses.map(course => (
                    <div key={course.id} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <img src={course.image} alt={course.title} className="w-[605px] h-[380px] object-cover rounded-xl mb-4" />
                        <div className="flex justify-between text-sm text-gray-500 my-6">
                            <div className='flex gap-4'>
                                <span className='bg-white py-1 px-2 rounded-sm text-black'>{course.duration}</span>
                                <span className='bg-white py-1 px-2 rounded-sm text-black'>{course.level}</span>
                            </div>
                            <span>By {course.author}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-6">{course.description}</p>
                        <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                            Get it Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurCourses;
