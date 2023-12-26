import { MortarBoardIcon } from 'assets/icons';
import chairman from 'assets/images/chairman.jpeg';
import principal from 'assets/images/principal.jpeg';
import founder from 'assets/images/founder.jpeg';
import teacher from 'assets/images/teacher.jpeg';
import parentImage1 from 'assets/images/parentImage1.jpeg';
import parentImage2 from 'assets/images/parentImage2.jpeg';




const ABOUT_DATA = {
    title: "Indiana Public School:<br>Nurturing Excellence, Fostering Uniqueness",
    cards: [
        {
            id: 1,
            title: "Comprehensive Education",
            description: "Indiana Public School offers a holistic learning experience from Pre-KG to 12th grade, ensuring a well-rounded education under the CBSE curriculum.",
            icon: <MortarBoardIcon />,
        },
        {
            id: 2,
            title: "Exclusive English Medium",
            description: "As the sole complete English school in Attingal, we prioritize effective communication and language proficiency, preparing students for global challenges.",
            icon: <MortarBoardIcon />,
        },
        {
            id: 3,
            title: "Singular in Attingal",
            description: "Indiana Public School stands as the only complete english school in Attingal, providing a unique and inclusive educational environment for the local community.",
            icon: <MortarBoardIcon />,
        },

    ],
};

export default ABOUT_DATA;

export const CREW_DATA = [
    { id: 1, img: chairman, name: 'Some Name', designation: 'Chairman' },
    { id: 2, img: founder, name: 'Some Name', designation: 'Founder' },
    { id: 3, img: principal, name: 'Some Name', designation: 'Principal' },
    { id: 4, img: teacher, name: 'Some Name', designation: 'English, Teacher' },
    { id: 5, img: teacher, name: 'Some Name', designation: 'Mathematics, Teacher' },
    { id: 6, img: teacher, name: 'Some Name', designation: 'Hindi, Teacher' },
    { id: 7, img: teacher, name: 'Some Name', designation: 'Social Science, Teacher' },
    { id: 8, img: teacher, name: 'Some Name', designation: 'Science, Teacher' },
    { id: 9, img: teacher, name: 'Some Name', designation: 'Malayalam, Teacher' },
];

export const CREW_DATA_TITLE = [ "Meet the crew" ];

export const TESTIMONIALS_DATA = [
    {
      rating: "4",
      quote: "Choosing Indiana Public School for our child was the best decision we made. The warmth and friendliness of the staff make it feel like a second home. The teachers' dedication and effective management contribute to a positive and enriching academic experience. Our child not only enjoys going to school but is also thriving both academically and socially. Indiana Public School has truly exceeded our expectations.",
      name: "Thara J",
      location: "Attingal",
      photo: parentImage1,
    },
    {
      rating: "5",
      quote: "At Indiana Public School, the welcoming atmosphere and friendly demeanor of the staff have made a significant impact on our experience. The teachers exhibit a high level of professionalism, creating a positive and engaging learning environment. The management's effective communication and support further enhance our confidence in the school. Our child is thriving at Indiana Public School, and we are grateful for the school's commitment to fostering a happy and nurturing educational journey.",
      name: "John Doe",
      location: "Cityville",
      photo: parentImage2,
    },
  ];
  

