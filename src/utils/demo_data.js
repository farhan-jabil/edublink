import { images } from "./demo_images"

export const data = {
    categories_item: [
        {
            category_name: "Business Management",
            course_number: "38 courses",
            icon_color: "#1ab69d",
            icon_bg: "#1ab69d1a",
        },
        {
            category_name: "Arts & Design",
            course_number: "12 courses",
            icon_color: "#ee4a62",
            icon_bg: "#ee4a621a",   
        },
        {
            category_name: "Personal Development",
            course_number: "27 courses",
            icon_color: "#0ecd73",
            icon_bg: "#0ecd731a",
        },
        {
            category_name: "Health & Fitness",
            course_number: "19 courses",
            icon_color: "#f8b81f",
            icon_bg: "#f8b81f1a",
        },
        {
            category_name: "Data Science",
            course_number: "23 courses",
            icon_color: "#8e56ff",
            icon_bg: "#8e56ff1a",
        },
        {
            category_name: "Marketing",
            course_number: "30 courses",
            icon_color: "#f92596",
            icon_bg: "#f925961a",
        },
        {
            category_name: "Business & Finance",
            course_number: "26 courses",
            icon_color: "#5866eb",
            icon_bg: "#5866eb1a",
        },
        {
            category_name: "Computer Science",
            course_number: "9 courses",
            icon_color: "#f8941f",
            icon_bg: "#f8941f1a",
        },
        {
            category_name: "Video & Photography",
            course_number: "24 courses",
            icon_color: "#39c0fa",
            icon_bg: "#39c0fa1a",
        },
    ],
    course_items: [
        {
            price: 29.00,
            description: "The Complete Camtasia Course for Content Creators",
            picture: images.course1,
            weeks: 3,
            rating: 5.0,
            lessons: 8,
            students: 20
        },
        {
            price: 29.00,
            description: "Master Your Personal Brand Like a Marketing Pro",
            picture: images.course2,
            weeks: 3,
            rating: 5.0,
            lessons: 8,
            students: 20
        },
        {
            price: 29.00,
            description: "Java Programming Masterclass for Software Developers",
            picture: images.course3,
            weeks: 3,
            rating: 5.0,
            lessons: 8,
            students: 20
        },
        {
            price: 29.00,
            description: "The Ultimate Drawing Course - Beginner to Advanced",
            picture: images.course4,
            weeks: 3,
            rating: 5.0,
            lessons: 8,
            students: 20
        },
    ],
    student_info: [
        {
            picture: images.student1,
            feedback: "Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
            name: "Ray Sanchez",
            designation: "Student"
        },
        {
            picture: images.student2,
            feedback: "Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
            name: "Thomas Lopez",
            designation: "Designer"
        },
        {
            picture: images.student3,
            feedback: "Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
            name: "Amber Page",
            designation: "Student"
        },
        {
            picture: images.student4,
            feedback: "Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
            name: "James Flowers",
            designation: "Manager"
        },

    ],
    blog_item: [
        {
            pitcure: images.blog1,
            type: "ONLINE",
            heading: "Become a Better Blogger: Content Planning",
            short: "Lorem ipsum dolor sit amet cons tetur sed idunt.",
            date: "Oct 10, 2021"
        },
        {
            pitcure: images.blog2,
            type: "LECTURE",
            heading: "How to Keep Workouts Fresh in the Morning",
            short: "Lorem ipsum dolor sit amet cons tetur sed idunt.",
            date: "Oct 10, 2021"
        },
        {
            pitcure: images.blog3,
            type: "BUSINESS",
            heading: "Four Ways to Keep Your Workout Routine Fresh",
            short: "Lorem ipsum dolor sit amet cons tetur sed idunt.",
            date: "Oct 10, 2021"
        },
        {
            pitcure: images.blog4,
            type: "BUSINESS",
            heading: "Starting SEO as your Home Based Business policy",
            short: "Lorem ipsum dolor sit amet cons tetur sed idunt.",
            date: "Oct 10, 2021"
        },
    ],
    navbar_items: [
        {
            item: "Home",
            id: "one",
            padding: "70px",
            content: {
                content1: [
                    {
                        item: "EduBlink Education",
                        offer: "Hot",
                    },
                    {
                        item: "Distant Learning",
                        offer: "",
                    },
                    {
                        item: "University",
                        offer: "",
                    },
                    {
                        item: "Online Academy",
                        offer: "Hot",
                    },
                    {
                        item: "Modern Schooling",
                        offer: "",
                    },
                    {
                        item: "Kitchen Coach",
                        offer: "",
                    },
                    {
                        item: "Yoga Instructor",
                        offer: "",
                    },
                ],
                content2: [
                    {
                        item: "Kindergarden",
                        offer: "",
                    },
                    {
                        item: "Health Coach",
                        offer: "New",
                    },
                    {
                        item: "Language Academy",
                        offer: "New",
                    },
                    {
                        item: "Remote Training",
                        offer: "New",
                    },
                    {
                        item: "Photography",
                        offer: "New",
                    },
                    {
                        item: "Dark Version",
                        offer: "",
                    },
                    {
                        item: "Landong Demo",
                        offer: "",
                    },
                ],
                content3: [
                    {
                        picture: images.navbarMenu
                    },
                ]
            }
        },
        {
            item: "Pages",
            id: "two",
            padding: "70px",
            content: {
                content1: [
                    {
                        item: "About Us 1"
                    },
                    {
                        item: "About Us 2"
                    },
                    {
                        item: "About Us 3"
                    },
                    {
                        item: "Instructor 1"
                    },
                    {
                        item: "Instructor 2"
                    },
                    {
                        item: "Instructor 3"
                    },
                    {
                        item: "Instructor Profile"
                    },
                    {
                        item: "Faq's"
                    },
                    {
                        item: "404 Error"
                    },
                    {
                        item: "Coming Soon"
                    },
                ],
                content2: [
                    {
                        item: "Gallery Grid"
                    },
                    {
                        item: "Gallery Mansory"
                    },
                    {
                        item: "Event Grid"
                    },
                    {
                        item: "Event List"
                    },
                    {
                        item: "Event Details"
                    },
                    {
                        item: "Pricing Table"
                    },
                    {
                        item: "Purchase Guide"
                    },
                    {
                        item: "Privacy Policy"
                    },
                    {
                        item: "Terms & Condition"
                    },
                    {
                        item: "Sign In"
                    },
                ],
                content3: [
                    {
                        item: "Shop"
                    },
                    {
                        item: "Product Details"
                    },
                    {
                        item: "Cart"
                    },
                    {
                        item: "Wishlist"
                    },
                    {
                        item: "Checkout"
                    },
                ],
            }
        },
        {
            item: "Courses",
            id: "three",
            padding: "20px",
            content: {
                content1: [
                    {
                        item: "Course Style 1",
                    },
                    {
                        item: "Course Style 2",
                    },
                    {
                        item: "Course Style 3",
                    },
                    {
                        item: "Course Style 4",
                    },
                    {
                        item: "Course Style 5",
                    },
                    {
                        item: "Course Details 1",
                    },
                    {
                        item: "Course Details 2",
                    },
                    {
                        item: "Course Details 3",
                    },
                ]
            },
        },
        {
            item: "Blog",
            id: "four",
            padding: "20px",
            content: {
                content1: [
                    {
                        item: "Blog Standard",
                    },
                    {
                        item: "Blog Masonry",
                    },
                    {
                        item: "Blog List",
                    },
                    {
                        item: "Blog Details",
                    },
                ]
            },
        },
        {
            item: "Contact",
            id: "five",
            padding: "20px",
            content: {
                content1: [
                    {
                        item: "Contact Us",
                    },
                    {
                        item: "Contact Me",
                    }
                ]
            },
        },
    ],
    nav_categories_item: [
        {
            item: "Design",
        },
        {
            item: "Development",
        },
        {
            item: "Architecture",
        },
        {
            item: "Life Style",
        },
        {
            item: "Data Science",
        },
        {
            item: "Marketing",
        },
        {
            item: "Music",

        },
        {
            item: "Photography",
        },
        {
            item: "Finance",
        },
        {
            item: "Motivation",
        },
    ],

}